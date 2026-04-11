import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vite run dev need this plugin, vite run build doesn't
import commonjs from 'vite-plugin-commonjs'

const scriptsDir = path.resolve(__dirname, '../scripts')

// Custom plugin to transform CJS scripts to ESM for Vite build
function cjsToEsmPlugin() {
  return {
    name: 'cjs-to-esm',
    enforce: 'pre',
    transform(code, id) {
      // Only transform files in the scripts directory
      if (!id.startsWith(scriptsDir)) return null

      // Skip if already ESM
      if (code.includes('export ') && !code.includes('module.exports') && !code.includes('exports.')) return null

      let transformed = code

      // Collect all export names from module.exports = { X, Y, Z } and exports.X = ...
      const exportNames = new Set()
      let hasModuleExportsObject = false
      let moduleExportsIsLiteralObject = false

      // Parse module.exports = { X, Y, Z }
      const moduleExportsMatch = transformed.match(/module\.exports\s*=\s*\{([^}]*)\}/s)
      if (moduleExportsMatch) {
        hasModuleExportsObject = true
        const exportContent = moduleExportsMatch[1]
        // Check if the content contains key:value pairs (literal object) vs just identifiers
        const identifiers = exportContent
          .split(',')
          .map(s => s.trim())
          .filter(s => s && !s.includes(':') && !s.includes('function'))

        if (identifiers.length > 0) {
          identifiers.forEach(name => exportNames.add(name))
        } else {
          // This is a literal object like { parser: 'typescript', printWidth: 120 }
          moduleExportsIsLiteralObject = true
        }
      }

      // Parse exports.X = Y
      const exportAssignments = []
      transformed.replace(/exports\.(\w+)\s*=\s*(.+)/g, (match, name, value) => {
        exportNames.add(name)
        exportAssignments.push({ name, value: value.replace(/[;,]\s*$/, '') })
      })

      // Remove all CJS export patterns
      if (moduleExportsIsLiteralObject) {
        // For literal objects, replace module.exports = {...} with const __cjs_default__ = {...}
        transformed = transformed.replace(/module\.exports\s*=\s*\{/s, 'const __cjs_default__ = {')
      } else {
        // Remove module.exports = { ... }
        transformed = transformed.replace(/module\.exports\s*=\s*\{[^}]*\}[;,]?\s*\n?/s, '')
      }
      // Remove exports.X = Y
      transformed = transformed.replace(/exports\.(\w+)\s*=\s*.+[;,]?\s*\n?/g, '')
      // Remove exports.default = ...
      transformed = transformed.replace(/exports\.default\s*=\s*.+[;,]?\s*\n?/g, '')
      // Remove Object.defineProperty(exports, '__esModule', ...)
      transformed = transformed.replace(/Object\.defineProperty\(exports,\s*'__esModule',\s*\{[^}]*\}\)[;,]?\s*\n?/g, '')

      // Replace require() calls with import
      transformed = transformed.replace(/const\s*\{([^}]*)\}\s*=\s*require\(['"]\.\/([^'"]+)['"]\)/g, (match, names, modulePath) => {
        const cleanNames = names.trim()
        return `import { ${cleanNames} } from './${modulePath}'`
      })
      // Also handle require without destructuring
      transformed = transformed.replace(/const\s+(\w+)\s*=\s*require\(['"]\.\/([^'"]+)['"]\)/g, (match, name, modulePath) => {
        return `import ${name} from './${modulePath}'`
      })
      // Handle require with path outside ./ (like '../config/...')
      transformed = transformed.replace(/const\s*\{([^}]*)\}\s*=\s*require\(['"]([^'"]+)['"]\)/g, (match, names, modulePath) => {
        const cleanNames = names.trim()
        return `import { ${cleanNames} } from '${modulePath}'`
      })
      transformed = transformed.replace(/const\s+(\w+)\s*=\s*require\(['"]([^'"]+)['"]\)/g, (match, name, modulePath) => {
        return `import ${name} from '${modulePath}'`
      })

      // Add export statement at the end
      if (exportNames.size > 0) {
        transformed += `\nexport { ${Array.from(exportNames).join(', ')} };`
      }

      // For literal module.exports objects, add default export
      if (moduleExportsIsLiteralObject) {
        transformed += `\nexport default __cjs_default__;`
      }
      // For modules that only have module.exports = { identifiers } and no named exports.X,
      // also add a default export so `import X from '...'` works
      else if (hasModuleExportsObject && exportAssignments.length === 0 && exportNames.size > 0) {
        transformed += `\nexport default { ${Array.from(exportNames).join(', ')} };`
      }

      return {
        code: transformed,
        map: null
      }
    }
  }
}

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: '/',
    assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.hdr'],
    resolve: {
      extensions: ['.js', '.ts', '.mjs', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      outDir: '_site',
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html')
        }
      },
      commonjsOptions: {
        include: [/node_modules/]
      },
    },
    optimizeDeps: {
      include: [path.resolve(__dirname, '../scripts')],
    },
    server: {
      host: '0.0.0.0',
      port: 10000,
      open: '/',
      https: false,
      fs: {
        strict: false
      }
    },
    plugins: [
      cjsToEsmPlugin(),
      commonjs(),
      vue()
    ]
  })
}
