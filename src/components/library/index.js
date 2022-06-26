/*
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-25 12:41:26
 * @LastEditors: sj
 * @LastEditTime: 2022-06-25 17:20:53
 */
import Skeleton from './skeleton.vue' // 骨架屏
import Carousel from './carousel.vue' // 轮播图

export default {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component(Skeleton.name, Skeleton)
    app.component(Carousel.name, Carousel)
  }
}
