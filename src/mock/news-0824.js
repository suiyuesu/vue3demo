
// 引入mockjs
import Mock from "mockjs";
import newsOne from '@/static/images/news/news082401.png'
import newsTwo from '@/static/images/news/news082402.png'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: '近日，经浙江省软件行业协会审核，麟康医疗自主研发的“智慧门诊云HIS系统V1.0”产品，符合《软件产品管理办法》和《软件产品评估标准》的相关要求，被授予《软件产品证书》。' }
    ],
    imgList: [{ img: newsOne }],
  },
  {
    id: "2",
    content: [
      { name: '随着数字化、信息化技术逐渐成为业务发展与经济进步的核心驱动力，市场对软件的需求已从支撑基础应用转变成实现业务持续发展的新阶段，对软件水平与服务质量也提出了更高的要求。' },
      { name: '也正因此，作为双软认证之一的软件产品认证，其认证审核过程相对较严格，需公司拥有软件产品著作权登记证书，并经过权威软件测试机构的评测。申请该项目不仅是对企业知识产权的一种保护方式，更代表了公司软件产品得到了软件专业领域的高度认可。' }
    ],
    imgList: [{ img: newsTwo }],
  },
  {
    id: "3",
    content: [
      { name: '为给各医疗机构提供更优质的服务，麟康技术研发团队独立研发智慧门诊云HIS系统，并经过长期的测试、实践，不断地更新迭代后运用到实际基层诊疗环节中去。该产品结合医疗各领域丰富经验，面向医疗机构打造了以云HIS为核心的基层医疗一体化解决方案，结合民营医疗机构个性化需求，构建集预约挂号、医生门诊、医保结算、配药发药、经营分析等功能为一体的完整就诊体系，同时可拓展中医云药房、AI辅助诊疗、私域流量管理等多元增值运营服务，帮助医疗机构大幅提升运营效率及患者就医体验，实现经营稳步增长。' },
      { name: '此次麟康医疗顺利取得软件产品证书，是对公司技术研发实力予以的充分肯定以及对产品功能性的认可。未来，我们将不断提升科技创新研发能力，充分发挥技术领先优势，加大研发投入，持续探索在医疗健康领域的创新发展之路，创造出更多优质的原创软件产品，满足市场和客户的需求，更好地服务于社会。' }
    ],
    imgList: [{ img: '' }],
  },
]

/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGet0824List", "get", () => {
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