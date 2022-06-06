/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface UploadFile {
  /**
   * 上一次变更的时间
   */
  lastModified: number;
  /**
   * 文件名称
   * @default ''
   */
  name: string;
  /**
   * 下载进度
   */
  percent: number;
  /**
   * 原始文件对象
   */
  raw: File;
  /**
   * 上传接口返回的数据
   */
  response: object;
  /**
   * 文件大小
   */
  size: number;
  /**
   * 文件上传状态：上传成功，上传失败，上传中，等待上传
   * @default ''
   */
  status: 'success' | 'fail' | 'progress' | 'waiting';
  /**
   * 文件类型
   * @default ''
   */
  type: string;
  /**
   * 文件上传成功后的下载/访问地址
   * @default ''
   */
  url: string;
}
