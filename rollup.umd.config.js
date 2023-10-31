import basicConfig, { file } from './rollup.config.js'
export default {
  ...basicConfig,
  output: {
    name: 'thComponents',
    file: file('umd'),
    format: 'umd',
    globals: { // 设定全局变量的名称
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}
