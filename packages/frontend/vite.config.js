import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
// vite run dev need this plugin, vite run build doesn't
import commonjs from 'vite-plugin-commonjs'

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
        // include: [path.resolve(__dirname, '../scripts')]
        exclude: [path.resolve(__dirname, '../scripts')],
        include: []
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
      commonjs(),
      createVuePlugin({
        include: /(\.md|\.vue)$/,
        jsx: true
      })
    ]
  })
}
