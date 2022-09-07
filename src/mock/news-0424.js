
// 引入mockjs
import Mock from "mockjs";
import newsOne from '@/static/images/news/news042401.jpg'
import newsTwo from '@/static/images/news/news042402.jpg'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: ' 近日，为探索如何发挥中医药特色优势，服务山区26县高质量发展和共同富裕示范区建设，浙江中医药大学于2022年4月22日下午，以线上线下同步方式举办了“中医药助力山区26县高质量发展论坛——数字化应用专场”活动。麟康医疗总经理黄文宙受邀出席，与各院校专家学者、企业代表一起，“共话”数智医疗，“共谋”山区发展。' },
    ],
    imgList: [{ img: newsOne }],
  },
  {
    id: "2",
    content: [
      { name: '会上，中医药大学副校长温成平出席论坛并致辞，他表示学校将发挥中医药特色及人才、技术、医疗资源优势，借力数字化改革之东风，依靠科技力量、数字赋能，与政府、高校、科研院所和企业等单位一起，共同提升基层的医疗卫生服务、推动中医药产业发展。' },
    ],
    imgList: [{ img: newsTwo }],
  },
  {
    id: "3",
    content: [
      { name: '随后，浙江省中医药管理局传承创新处处长朱炜、学校中医药大数据与智慧健康研究中心主任李凯、杭州聪宝、麟康医疗、和泽远志等企业代表专家，就县域医疗卫生与人民生活保健的中医药数字化场景及应用等依次做专题报告和分享。' },
      { name: '面对农村医疗改革发展需求，黄总表示，要积极探索云计算、大数据、AI等技术与医疗领域的创新融合，以“处方一件事”改革为牵引，全面推动基层医疗流程优化。接下来，麟康将基于多年行业经验，构建以云HIS为核心的基层医疗一体化解决方案，致力从“智医”“智药”“智治”“云随访”等领域出发，驱动四大关键平台建设，形成“就医问药”服务流与数据流的双螺旋，以更多元的产品及服务不断为基层医疗赋能。' },
      { name: ' 未来，麟康医疗也将联动更多专业院校、医疗机构及生态伙伴，共同构建开放共生的医疗生态圈，为打造高效、智能、便捷的医疗服务而不懈努力。' }
    ],
    imgList: [{ img: '' }],
  },
]

/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGet0424List", "get", () => {
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