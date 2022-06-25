/*
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-25 12:06:03
 * @LastEditors: sj
 * @LastEditTime: 2022-06-25 12:10:34
 */
import request from '@/utils/request'

export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}
