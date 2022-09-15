import vue from '@vitejs/plugin-vue'
import {
  viteMockServe
} from 'vite-plugin-mock'
import path, {
  resolve
} from 'path'
export default ({
  command,
  mode
}) => {
  return {
    base: "./", // 打包后的跟路径 - ./ 加.是为为了避免打包后 出现白屏的效果 （ 不推荐写法 ）
    // 开发环境的 相关配置
    server: {
      // 服务配置
      host: '0.0.0.0',
      port: 5006, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    },
    plugins: [
      vue({}),
      // mock 数据的 dev环境
      viteMockServe({
        // supportTs: true, // 是否开启支持ts
        mockPath: 'mock', // 设置mockPath为根目录下的mock目录
        localEnabled: command === 'serve', // 设置是否监视mockPath对应的文件夹内文件中的更改
        //是否在控制台显示请求日志
        logger: true
      }),
    ]
  }
}
