
// 引入mockjs
import Mock from "mockjs";
import newsOne from '@/static/images/news/news071201.png'
import newsTwo from '@/static/images/news/news071202.png'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: '近日，凭借过硬的技术实力及良好的市场口碑，麟康医疗通过了浙江省软件行业协会的严格审核，成为浙江省软件行业协会会员单位，进一步彰显了麟康医疗在信息化软件行业的领先性。' }
    ],
    imgList: [{ img: newsOne }],
  },
  {
    id: "2",
    content: [
      { name: '浙江省软件行业协会(ZSIA)成立于2000年8月，是中国软件行业协会常务理事单位，致力于发挥政府和企业之间的桥梁纽带作用，促进全省软件企事业单位、科研院校之间的合作交流，推动浙江省软件产业的发展。该协会成员单位有阿里巴巴、海康威视、恒生电子、网易、大华股份等。' },
      { name: '此次荣获浙江省软件行业协会会员单位认证，不仅是协会对麟康医疗的肯定和鼓励，更是市场对麟康医疗软件研发实力、专业服务理念及产品市场价值的一致认可，标志着麟康医疗在软件产品创新、技术研发能力上迈入新阶段、新台阶！' }
    ],
    imgList: [{ img: newsTwo }],
  },
  {
    id: "3",
    content: [
      { name: '作为一家专业从事创新医疗服务的技术型企业，麟康医疗一直深耕在基层非公医疗领域，致力于医疗机构信息化建设的深度探索，依托大数据、互联网、人工智能等技术，自主研发云HIS、诊疗行为在线监督等各类核心产品，为基层医疗提供契合实际经营需求的一体化解决方案，并在产品开拓创新发展中取得了多项行业领先的软件著作以及荣誉认证。' },
      { name: '不忘初心，方得始终。成为浙江省软件行业协会会员是麟康医疗前行的新动力，这将不断鞭策麟康医疗在未来的发展中再接再厉，再创佳绩，通过与浙江省软件行业协会及其会员单位加强合作，共同积极推动医疗信息化领域技术产品的自主创新与科学发展，共同促进软件行业新技术、新产品、新设备、新模式的市场发展与产业应用。' }
    ],
    imgList: [{ img: '' }],
  },
]

/** get请求
 * 获取用户列表
 */
Mock.mock("/api/mockGet0712List", "get", () => {
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