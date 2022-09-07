
// 引入mockjs
import Mock from "mockjs";
import newsOne from '@/static/images/news/news052201.jpeg'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: '近日，杭州麟康医疗科技有限公司顺利通过了ISO9001质量管理体系认证，标志着麟康医疗不仅在各软件系统整合上已达到国际标准，而且在步入规范化、程序化、标准化、现代化的企业管理过程中，也可以持续稳定地向客户提供符合预期需求的合格产品。' }
    ],
    imgList: [{ img: newsOne }],
  },
  {
    id: "2",
    content: [
      { name: ' ISO9001质量管理体系是基于企业或团体内部流程规范建设的一个指导标准，最初从产品质量认证中演变而来，后期发展到各个行业与领域，主要用于考察企业是否具有提供满足顾客要求和适用法规要求的产品能力，是进一步加强企业市场竞争力，提升企业质量管理水平的重要依据。' },
      { name: '   基于ISO9001质量管理体系的要求，审核认证组专家对麟康医疗所有职能部门及工作流程各环节进行了非常细致和全面的审核，对管理手册和程序控制文件等资料进行仔细检查，并在认证过程中对公司的项目管理体系给予了充分肯定和高度的评价，这标志着公司的质量管理体系已得到第三方认证机构的认可，表明麟康医疗的质量管理能力已达到国内先进水平。' },
      { name: '   SO9001质量管理体系认证的通过，一方面证明了企业自身的实力，另一方面对于企业未来发展提出更高要求。接下来，麟康医疗将继续以技术创新为核心，持续优化和规范质量管理制度，在推动企业管理体系攀升新高度的同时，不断提高公司产品、服务的满意度和美誉度，确保公司质量管理与生产经营再上一个新台阶！' }
    ],
    imgList: [{ img: '' }],
  },
]

/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGet0522List", "get", () => {
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