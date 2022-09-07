
// 引入mockjs
import Mock from "mockjs";
import newsOne from '@/static/images/news/news101701.jpg'
import newsTwo from '@/static/images/news/news101702.jpg'
// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: '10月16日，麟康医疗与壹基因正式签署战略合作协议，今后双方将共同推动基因检测业务的普及，构建先进的健康医疗生态体系。' }
    ],
    imgList: [{ img: newsOne }],
  },
  {
    id: "2",
    content: [
      { name: '麟康医疗是一家综合型医疗服务互联网平台，团队汇集了一批资深的程序开发、营销策划、渠道拓展、团队管理等各版块人员。目前已整合先进的云HIS系统、专家名医集团、检查检验、基因检测及其他优质的医疗服务资源，以高要求高水准的理念，以丰富的设计经验及突破性的创意思维打造一个助力提升基层医疗服务的互联网平台。' },
      { name: '而壹基因作为权威的防癌基因检测机构，利用先进的基因检测技术和大数据计算技术为为大众提供癌症早期筛查、提前预防和精准治疗指导的基因检测服务。团队以“让每个人更早地远离癌症威胁”为使命，以 “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。' },
      { name: '麟康医疗相关负责人表示，基因检测是健康医疗业务的未来趋势，公司一直在寻找值得信赖的合作伙伴，壹基因严谨的实验水准和不断创新的研发能力深深打动了他们，也以此为契机，推动了双方战略合作。' }
    ],
    imgList: [{ img: newsTwo }],
  },
  {
    id: "3",
    content: [
      { name: '据了解，本次壹基因与麟康医疗的战略合作，将涵盖癌症风险预测、癌症早筛以及疾病精准用药等多系列产品，这些产品将通过麟康医疗的平台走进千家万户。' },
      { name: '壹基因希望，通过此次与麟康医疗的强强联合，可以协同提升基层医疗服务能力，共同搭建健康普惠的医疗服务生态体系，助力“健康中国”国家战略。' },

    ],
    imgList: [{ img: '' }],
  },
]

/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGet1017List", "get", () => {
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