
// 引入mockjs
import Mock from "mockjs";

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: ' “健康有保障，看病不烦神”不仅仅是老百姓心中的简单愿望，也是各地区政府打造“健康中国”的样本，如何提高基层医疗机构的服务能力，是健康中国背景下亟待解决的问题。' },
      { name: ' 面对基层医疗机构信息化需求，麟康医疗积极行动，与浩洋科技达成战略合作共识，借助自身在移动互联网、云计算、大数据、人工智能等领域积累的丰富经验与产品能力，为各区域提供集成化的区域云HIS一体化解决方案，根据云HIS可扩展、易共享、区域化、易协同、低成本、易维护、体验好等特性，实现区域范围内各医疗机构无机房、无服务器、无系统、免维护的云平台应用，彻底解决基层医疗机构信息化建设“三缺三难”的问题。' },
      { name: ' 基于本次合作，麟康医疗将乘势而进，持续发力，加速推进云产品在全国各区域的落地上线，借力打造行业标杆品牌。 “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。' },
    ],
    imgList: [{ img: '' }],
  },

]

/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGet1203List", "get", () => {
  return {
    code: "200",
    data: tableList,
  };

});


/** post请求添加表格数据 */
Mock.mock("/api/add", "post", (params) => {
  let newData = JSON.parse(params.body);
  newData.id = Random.guid();
  tableList.push(newData);
  return {
    code: "200",
    message: "success",
    data: tableList,
  };
});