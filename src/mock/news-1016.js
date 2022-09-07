
// 引入mockjs
import Mock from "mockjs";
import newsOne from '@/static/images/news/news101601.jpg'
import newsTwo from '@/static/images/news/news101602.jpg'
import newsThree from '@/static/images/news/news101603.jpg'
// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: '10月16日，麟康医疗与凯鸿科技正式签署战略合作协议，今后双方将共同推动诊所云his业务的普及，推动基层医疗机构信息化管理水平。' }
    ],
    imgList: [{ img: newsOne, }, { img: newsTwo }],
  },
  {
    id: "2",
    content: [
      { name: ' 麟康医疗是一家综合型医疗服务互联网平台，整合先进的云HIS系统、专家名医集团、检查检验、基因检测及其他优质的医疗服务资源，以高要求高水准的理念，以丰富的设计经验及突破性的创意思维打造一个助力提升基层医疗服务的互联网平台。' },
      { name: ' 邻家好医是一家集优质医疗资源、人性化服务理念为一体的新型门诊部，目前开设：全科、内科、外科、妇科、儿科、中医科、针灸推拿科、口腔科、检验、超声、放射等医疗科室。是家门口的好医生，给患者提供更多优质、便捷、个性化的医疗服务，让患者的每一次健康咨询和治疗过程都是快乐的体验。旗下的凯鸿科技是一家专业从事医疗、医药、卫生行业各类应用软、硬件开发、销售与服务、电子商务运营、企业信息化建设的高科技软件企业。公司本着“以客户为中心”的经营理念，提供一站式的管理解决方案，以全方位的服务，帮助社区医疗高效运作，让医疗运营管理智能化。 “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。' },
      { name: ' 两家合作，互惠共赢！' }
    ],
    imgList: [{ img: newsThree }],
  },
  {
    id: "3",
    content: [
      { name: ' 麟康医疗希望，通过此次与邻家好医的强强联合，可以协同提升基层医疗信息化、智能化服务能力，共同构造健康普惠的医疗服务生态体系，助力“健康中国”国家战略。' },
    ],
    imgList: [{ img: '' }],
  },
]

/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGet1016List", "get", () => {
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