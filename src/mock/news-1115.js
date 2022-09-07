
// 引入mockjs
import Mock from "mockjs";

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: ' 随着“健康中国”战略的持续推进，各行各业围绕大健康产业开启了新一轮提速增量、跨界融合的发展，为我国医疗卫生体制改革带来全新变革。在越来越丰富的信息技术支撑下，面对人民群众多层次、多样化医疗服务需求，基层医疗机构高质量发展，成了新时代医疗卫生事业发展的新主题。' },
      { name: ' 为更好地推动医疗信息化发展，麟康医疗与汉鼎宇佑达成战略合作共识，双方将积极布局以大数据、人工智能、物联网为代表的新一代信息技术的研发、创新和应用，整合自身与行业伙伴的优势和积累，为各地医疗卫生行业信息化发展提供一站式解决方案，以全方位的服务，帮助基层医疗高效运作，让医疗运营管理智能化。' },
      { name: ' 本次麟康医疗与汉鼎宇佑携手，必将释放麟康医疗在医疗行业领域的势能和价值，加速麟康“赋能基层医疗”目标的全面落地。 “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。 “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。' },
    ],
    imgList: [{ img: '' }],
  },

]

/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGet1115List", "get", () => {
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