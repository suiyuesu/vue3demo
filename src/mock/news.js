
// 引入mockjs
import Mock from "mockjs";
import news0824One from '@/static/images/news/news082401.png'
import news0824Two from '@/static/images/news/news082402.png'

import news0712One from '@/static/images/news/news071201.png'
import news0712Two from '@/static/images/news/news071202.png'

import news0630One from '@/static/images/news/news063001.png'
import news0630Two from '@/static/images/news/news063002.png'

import news0522One from '@/static/images/news/news052201.jpeg'

import news0424One from '@/static/images/news/news042401.jpg'
import news0424Two from '@/static/images/news/news042402.jpg'

import news0420One from '@/static/images/news/news042001.png'
import news0420Two from '@/static/images/news/news042002.png'

import news1017One from '@/static/images/news/news101701.jpg'
import news1017Two from '@/static/images/news/news101702.jpg'

import news1016One from '@/static/images/news/news101601.jpg'
import news1016Two from '@/static/images/news/news101602.jpg'
import news1016Three from '@/static/images/news/news101603.jpg'

import news0614One from '@/static/images/news/news061401.jpg'

import news0603One from '@/static/images/news/news060301.jpg'

import news0510One from '@/static/images/news/news051001.jpg'
import news0510Two from '@/static/images/news/news051002.jpg'
import news0510Three from '@/static/images/news/news051003.jpg'
import news0510Four from '@/static/images/news/news051004.jpg'
import news0510Five from '@/static/images/news/news051005.jpg'
import news0510Six from '@/static/images/news/news051006.jpg'
import news0510Seven from '@/static/images/news/news051007.jpg'
import news0510Eight from '@/static/images/news/news051008.jpg'
import news0510Nine from '@/static/images/news/news051009.jpg'
import news0510Ten from '@/static/images/news/news0510010.jpg'


import news1224One from '@/static/images/news/news122401.jpg'
import news1224Two from '@/static/images/news/news122402.jpg'
import news1224Three from '@/static/images/news/news122403.jpg'

import news1222One from '@/static/images/news/news122201.png'
import news1222Two from '@/static/images/news/news122202.png'
import news1222Three from '@/static/images/news/news122203.jpg'
import news1222Four from '@/static/images/news/news122204.png'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let table0824List = [
  {
    id: "1",
    content: [
      { name: '近日，经浙江省软件行业协会审核，麟康医疗自主研发的“智慧门诊云HIS系统V1.0”产品，符合《软件产品管理办法》和《软件产品评估标准》的相关要求，被授予《软件产品证书》。' }
    ],
    imgList: [{ img: news0824One }],
  },
  {
    id: "2",
    content: [
      { name: '随着数字化、信息化技术逐渐成为业务发展与经济进步的核心驱动力，市场对软件的需求已从支撑基础应用转变成实现业务持续发展的新阶段，对软件水平与服务质量也提出了更高的要求。' },
      { name: '也正因此，作为双软认证之一的软件产品认证，其认证审核过程相对较严格，需公司拥有软件产品著作权登记证书，并经过权威软件测试机构的评测。申请该项目不仅是对企业知识产权的一种保护方式，更代表了公司软件产品得到了软件专业领域的高度认可。' }
    ],
    imgList: [{ img: news0824Two }],
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

let table0712List = [
  {
    id: "1",
    content: [
      { name: '近日，凭借过硬的技术实力及良好的市场口碑，麟康医疗通过了浙江省软件行业协会的严格审核，成为浙江省软件行业协会会员单位，进一步彰显了麟康医疗在信息化软件行业的领先性。' }
    ],
    imgList: [{ img: news0712One }],
  },
  {
    id: "2",
    content: [
      { name: '浙江省软件行业协会(ZSIA)成立于2000年8月，是中国软件行业协会常务理事单位，致力于发挥政府和企业之间的桥梁纽带作用，促进全省软件企事业单位、科研院校之间的合作交流，推动浙江省软件产业的发展。该协会成员单位有阿里巴巴、海康威视、恒生电子、网易、大华股份等。' },
      { name: '此次荣获浙江省软件行业协会会员单位认证，不仅是协会对麟康医疗的肯定和鼓励，更是市场对麟康医疗软件研发实力、专业服务理念及产品市场价值的一致认可，标志着麟康医疗在软件产品创新、技术研发能力上迈入新阶段、新台阶！' }
    ],
    imgList: [{ img: news0712Two }],
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

let table0630List = [
  {
    id: "1",
    content: [
      { name: '近年来，浙江省一直在围绕“数字浙江”建设持续发力。2021年2月，浙江省召开全省数字化改革大会，揭开了浙江省全省域推进数字化改革的序幕。' },
      { name: ' 为深入贯彻浙江省数字化改革部署要求，基于当前卫生健康体系信息化建设现状，浙江省发布《卫生健康数字化改革指南》，明确了4项数字化改革规定动作和8项卫生健康系统自选动作，并要求各医疗卫生健康单位应围绕数字赋能做好改革工作，在实际工作中以数字化改革总抓手撬动卫生健康各领域的改革深化。' }
    ],
    imgList: [{ img: news0630One }],
  },
  {
    id: "2",
    content: [
      { name: '面对全面吹响的卫生健康数字化改革冲锋号角，浙江省各地积极响应，全面部署并高效落实，持续探索医疗卫生健康体系数字化改革的实践方法和具体举措，携手麟康医疗助推医疗机构数字化转型升级。通过为基层医疗机构提供一体化解决方案，帮助医疗机构完成信息化转型升级，在推动‍医疗机构高效运作，实现门诊流程管理智能化的同时，不断规范医疗机构诊疗行为，提高诊疗行为在线监管工作质量。' },
      { name: '为更好推进医疗机构数字化改革在全省范围内的落地，浙江省台州市、宁波市、丽水市、湖州市等地各区县陆续召开医疗机构数字化改革动员大会，邀请麟康医疗提供专业培训支持，从相关政策背景及系统建设必要性等方面着手为各地机构带来体系化讲解。' }
    ],
    imgList: [{ img: news0630Two }],
  },
  {
    id: "3",
    content: [
      { name: '结合各区县中小医疗机构信息化建设现状，麟康医疗技术人员带来一体化“轻量级”解决方案，通过部署云HIS系统，为医疗机构打造集在线预约、医院门诊、医保结算、配药发药、经营分析等多功能一体的就诊系统，帮助医疗机构大幅提升运营效率及患者轻松就医体验，有效规范医护人员诊疗行为，提升医护工作效率。' },
      { name: '同时，为帮助医疗机构更好地了解信息系统在实际诊疗场景中的应用，麟康医疗技术人员针对会上提出的系统升级改造、数据对接、云端部署、系统操作等疑惑作了详细解答及功能操作演示，得到广泛好评及认可。' },
      { name: ' 接下来，麟康医疗将持续跟进浙江省医疗机构数字化升级改造工作，不断完善医疗机构与卫生监督体系的信息共享模式，助力卫生健康事业跨越式高质量发展。' }
    ],
    imgList: [{ img: '' }],
  },
]

let table0522List = [
  {
    id: "1",
    content: [
      { name: '近日，杭州麟康医疗科技有限公司顺利通过了ISO9001质量管理体系认证，标志着麟康医疗不仅在各软件系统整合上已达到国际标准，而且在步入规范化、程序化、标准化、现代化的企业管理过程中，也可以持续稳定地向客户提供符合预期需求的合格产品。' }
    ],
    imgList: [{ img: news0522One }],
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

let table0424List = [
  {
    id: "1",
    content: [
      { name: ' 近日，为探索如何发挥中医药特色优势，服务山区26县高质量发展和共同富裕示范区建设，浙江中医药大学于2022年4月22日下午，以线上线下同步方式举办了“中医药助力山区26县高质量发展论坛——数字化应用专场”活动。麟康医疗总经理黄文宙受邀出席，与各院校专家学者、企业代表一起，“共话”数智医疗，“共谋”山区发展。' },
    ],
    imgList: [{ img: news0424One }],
  },
  {
    id: "2",
    content: [
      { name: '会上，中医药大学副校长温成平出席论坛并致辞，他表示学校将发挥中医药特色及人才、技术、医疗资源优势，借力数字化改革之东风，依靠科技力量、数字赋能，与政府、高校、科研院所和企业等单位一起，共同提升基层的医疗卫生服务、推动中医药产业发展。' },
    ],
    imgList: [{ img: news0424Two }],
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

let table0420List = [
  {
    id: "1",
    content: [
      { name: ' 近日，杭州麟康医疗科技有限公司（以下简称“麟康医疗”）和杭州唐古信息科技有限公司（以下简称“唐古信息”）达成战略合作。双方将以“赋能基层中医医疗机构发展”为核心，共建覆盖基层中医药全流程服务的生态圈，在着力提升基层中医药服务水平的同时，探索中医药发展新思路。' },
      { name: '    近年来，国家高度重视中医药发展，先后颁布实施《中医药法》、《“健康中国2030”规划纲要》和《中医药发展“十三五”规划》，坚持把发展中医药提升至国家战略。3月29日，国务院印发《关于“十四五”中医药发展规划的通知》，要求建设优质高效中医药服务体系，提升中医药健康服务能力，推动中药产业高质量发展。' },
    ],
    imgList: [{ img: news0420One }],
  },
  {
    id: "2",
    content: [
      { name: '为提升中医药基层服务能力，助力中医药基层医疗机构高效运营，破解基层中医医疗机构发展困局，杭州唐古信息科技有限公司（以下简称“唐古信息”）和杭州麟康医疗科技有限公司（以下简称“麟康医疗”）于近日达成战略合作。双方将以“赋能基层中医医疗机构发展”为核心，打通各自在中医药服务领域的信息化产品解决方案，整合优势资源，在中药代煎、云药房、中医辅助开方、中药合理用药、医疗机构私域运营等方面开展全面深入的合作，探索基层中医机构发展新动能。' },
    ],
    imgList: [{ img: news0420Two }],
  },
  {
    id: "3",
    content: [
      { name: '早在2020年，双方就基于互联网+医疗技术，依托麟康医疗“云HIS”平台和唐古信息“中医云药房”平台展开合作，实现医疗机构、云药房及第三方药物物流服务配送全环节全流程立体打通，完成浙江省内60余家中医基层医疗机构的落地覆盖。' },
      { name: '本次战略合作，双方将在此基础上进一步实现优势互补和信息共享，深入中医药基层医疗机构各业务场景，察真实场景需求，在优化基层医疗机构运营能力的同时，不断提升基层医疗机构的专业服务能力，让基层居民享受优质的中医药服务。' },
      { name: ' 接下来，双方还将整合各自在全国市场的客户服务、市场推广、合作伙伴、学术培训等资源，在医疗机构私域运营、基层人员继续教育、市场推广培育等领域探索更深入合作，竭力为基层医疗机构赋能。' }
    ],
    imgList: [{ img: '' }],

  },
]

let table1203List = [
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

let table1115List = [
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

let table1017List = [
  {
    id: "1",
    content: [
      { name: '10月16日，麟康医疗与壹基因正式签署战略合作协议，今后双方将共同推动基因检测业务的普及，构建先进的健康医疗生态体系。' }
    ],
    imgList: [{ img: news1017One }],
  },
  {
    id: "2",
    content: [
      { name: '麟康医疗是一家综合型医疗服务互联网平台，团队汇集了一批资深的程序开发、营销策划、渠道拓展、团队管理等各版块人员。目前已整合先进的云HIS系统、专家名医集团、检查检验、基因检测及其他优质的医疗服务资源，以高要求高水准的理念，以丰富的设计经验及突破性的创意思维打造一个助力提升基层医疗服务的互联网平台。' },
      { name: '而壹基因作为权威的防癌基因检测机构，利用先进的基因检测技术和大数据计算技术为为大众提供癌症早期筛查、提前预防和精准治疗指导的基因检测服务。团队以“让每个人更早地远离癌症威胁”为使命，以 “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。' },
      { name: '麟康医疗相关负责人表示，基因检测是健康医疗业务的未来趋势，公司一直在寻找值得信赖的合作伙伴，壹基因严谨的实验水准和不断创新的研发能力深深打动了他们，也以此为契机，推动了双方战略合作。' }
    ],
    imgList: [{ img: news1017Two }],
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

let table1016List = [
  {
    id: "1",
    content: [
      { name: '10月16日，麟康医疗与凯鸿科技正式签署战略合作协议，今后双方将共同推动诊所云his业务的普及，推动基层医疗机构信息化管理水平。' }
    ],
    imgList: [{ img: news1016One, }, { img: news1016Two }],
  },
  {
    id: "2",
    content: [
      { name: ' 麟康医疗是一家综合型医疗服务互联网平台，整合先进的云HIS系统、专家名医集团、检查检验、基因检测及其他优质的医疗服务资源，以高要求高水准的理念，以丰富的设计经验及突破性的创意思维打造一个助力提升基层医疗服务的互联网平台。' },
      { name: ' 邻家好医是一家集优质医疗资源、人性化服务理念为一体的新型门诊部，目前开设：全科、内科、外科、妇科、儿科、中医科、针灸推拿科、口腔科、检验、超声、放射等医疗科室。是家门口的好医生，给患者提供更多优质、便捷、个性化的医疗服务，让患者的每一次健康咨询和治疗过程都是快乐的体验。旗下的凯鸿科技是一家专业从事医疗、医药、卫生行业各类应用软、硬件开发、销售与服务、电子商务运营、企业信息化建设的高科技软件企业。公司本着“以客户为中心”的经营理念，提供一站式的管理解决方案，以全方位的服务，帮助社区医疗高效运作，让医疗运营管理智能化。 “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。' },
      { name: ' 两家合作，互惠共赢！' }
    ],
    imgList: [{ img: news1016Three }],
  },
  {
    id: "3",
    content: [
      { name: ' 麟康医疗希望，通过此次与邻家好医的强强联合，可以协同提升基层医疗信息化、智能化服务能力，共同构造健康普惠的医疗服务生态体系，助力“健康中国”国家战略。' },
    ],
    imgList: [{ img: '' }],
  },
]

let table0614List = [
  {
    id: "1",
    content: [
      { name: ' 合理的输液可以挽救患者生命，而一次差错也可能让一个生命消逝，输液安全问题一直深受关注。近段时间以来，全国各地纷纷叫停门诊输液。' }
    ],
    imgList: [{ img: news0614One }],
  },
  {
    id: "2",
    content: [
      { name: ' 近日，中国健康促进基金会、中华护理学会、中国医药包装协会、中国药师协会等六个组织共同编制的首部《守护针尖上的安全-中国输液安全与防范专家共识》（以下简称《专家共识》）在北京定稿。据悉，该共识将于5月份发布。' },
      { name: '“能口服不肌注，能肌注不输液”，这是世卫组织很早就提出的用药原则。一般来说，输液是仅对急救患者、重症患者和不能进食的患者使用的“最后给药方式”。但在我国，长期以来，由于输液治疗能给医院和医生增加收入，加上不少患者治病求“速好”的心理等因素，导致输液治疗被普遍滥用。 “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。' },
      { name: '《专家共识》主要倡导者、首都医科大学附属北京天坛医院药学部赵志刚教授表示，目前，不少患者对输液治疗认知还存在一些误区，如普通发烧感冒、腹泻、肠胃炎等常见疾病均使用输液治疗，对输液的风险和不良反应认识不足，成为过度输液的重要原因之一，以上误区凸显我国过度输液及输液安全需引起重点关注。' },
      { name: '据悉，初步定稿的《专家共识》共分为六部分，包括中国输液使用现状、输液质量与安全评价、输液包装材料质量与安全性评价、各国输液的质量与安全性评价、不合理使用输液的危害及合理使用输液的政策建议。“共识”全面梳理了我国输液使用的现状与存在主要问题，从专业的角度介绍了输液质量与安全性问题的评价方法，介绍了国外相关输液合理使用的指南，同时提出了综合施治，解决我国目前存在的过度输液问题的策略和方法。' },
      { name: '《专家共识》初稿中对于目前输液使用医药包材、设备也都做了较为详尽的介绍。中国医药设备工程协会会长顾维军表示，提升输液安全要重视过程管理，对于近年来在医药生产领域涌现出的许多新工艺、新技术、新产品，要给予推荐建议，而落后的工艺也应建议取消，只有临床和产业形成良性互动，才能真正提升输液安全。' }
    ],
    imgList: [{ img: '' }],
  },

]

let table0603List = [
  {
    id: "1",
    content: [
      { name: '' }
    ],
    imgList: [{ img: news0603One }],
  },
  {
    id: "2",
    content: [
      { name: ' 医生集团、多点执业的概念不在多点，而是在价值的回归和体现。价值回归表现：病人找到合适的医生，避免盲目看病的损失；医生找到合适的病人，获得应有的报酬；医保资金得到合理使用，而不至于鼓励过度医疗……-中国输液安全与防范专家共识》（以下简称《专家共识》）在北京定稿。据悉，该共识将于5月份发布。' },
      { name: ' 医生多点执业提出已久，但一直没有突破。“医生工作室”是在没有任何法律约束状态下的一种工作形式，目前的关键是有没有落脚点。很多政策都在鼓励医生到基层，“鼓励”两个字是很难实现的，为什么我们不用“吸引”两个字，使医疗资源的供给有序的分布呢？ “防癌基因检测领军专家”为定位，不断开发和优化癌症基因检测技术，帮助每个人赢得癌症防御战。' },
      { name: ' 流动就是世界进步的动力，如果没有流动，就是死水一潭，也是医改，尤其是分级诊疗为什么一直没有取得很明显效果的原因。李斌主任所讲的“互联网+”提升医疗水平，是谁提升医疗水平、服务能力呢？是医生，也就是“互联网+医生团队”。李斌提出了医生团队，就是一种潮流。' },
      { name: ' 将来，医生团队不仅仅是为有钱人服务的，应该是为有需要的人服务。所以说医生集团、名医中心，就是打造一个品牌。什么叫品牌呢？就是品质、品格、品位+招牌。' },
      { name: ' 品质，是我们的技术、力量、核心竞争力；品德，是我们经常讲的“仁心”，我们的爱心；品位，是有一定的地位、价值观，医生本来就是一个很有品位的职业。为何现在却要用薄利多销、大小通吃，甚至用过度医疗来提高收入呢？为什么不能用自己的能力去提升自己价值呢？' },
      { name: ' 医生有品无牌，是一个珍品；医生有质无牌，是一个藏品，是古董，因为只有少部分人知道，为少部分人服务。如果医生有牌无质，那么就是一个赝品，欺骗百姓，靠虚假广告。有质有牌就是一个真品。只要不是政府背景的名医中心，它一定是按照市场规律去做，投资集团有没有能力赢得医生就是关键。现在医生自己来组织成立的医生集团，是大家认可的一个团队，一个group，必定会产生核裂变般的发展。+招牌。' },
      { name: ' 如果以医生集团的形式去“出售”服务，就不需医生去建诊所，建医院，只要利用医生集团、名医中心这样的平台，和医院建立PHP的关系，就能得到快速的发展。' },
      { name: ' 在这种医生流动的潮流下，目前的支付制度对医生的流动是有所阻碍的。解开医生单位人的枷锁，有两把钥匙，一个是人事制度改革，使医生脱离人事关系，现在国家已经在做。医生再眷恋于大型医院，通过现在的一种分配制度，可能会过时了。+招牌。' },
      { name: ' 第二个就是支付制度。同一个医生在省城看专科，收挂号费可能15块钱，或者算专家门诊挂号费100块钱吧。他离开了省城，到基层出诊，他的挂号费就没有这个价了，就降低了。这种支付制度使医生难以流动，无法吸引医生流动到基层。' },
      { name: ' 医生集团、多点执业的概念不在多点，而是在价值的回归和体现。价值回归表现：病人找到合适的医生，避免盲目看病的损失；医生找到合适的病人，获得应有的报酬；医保资金得到合理使用，而不至于鼓励过度医疗。+招牌。' },
      { name: ' 医学专家如果仅仅是为了赚几个钱的话，现在的医生工作室已经可以优哉游哉了，但是他们是想做一番事业的，如果一班想做事的人与开明的政府部门的结合，一定会开创一片新天地。' },
      { name: ' 医生作为一群很有自律性的专业团体，绝不会为了蝇头小利去破坏自己的声誉。而作为医院管理者更应该有一个开拓的思维去迎合医生流动时代的管理需求。+招牌。' },
      { name: ' 医生流动的成功、医疗集团的成功不在于是看多少病人，而是体现于病人如何去找合适的医生，医生又如何去找合适的病人，这才是我们的目标！' },
    ],
    imgList: [{ img: '' }],
  },

]

let table0510List = [
  {
    id: "1",
    content: [
      { name: '' }
    ],
    imgList: [{ img: news0510One }],
  },
  {
    id: "2",
    subContentOne: '浙江新闻客户端记者 童桦 通讯员 王蕊 邹梦佳',
    subContentTwo: "（因医学专业表达需要，文内图片如引起您任何不适，敬请谅解！）",
    content: [
      { name: '小编一大早到达现场后，就被会场里的人群差点给挤了出去。低头一看表，才8点35分，离9点讲座开始还早着呢，怎么那多人？' },
      { name: '现场观众早已落座' },
      { name: '  “金刀”倪一鸣的魅力，看来真不是盖的。先来听听他的专业技术吧。' },
      { name: '心脏有几扇门？' },
      { name: '心脏里的瓣膜，就是控制心脏里血液流向的门。”浙江大学附属第一医院心胸外科主任倪一鸣外形儒雅，他向现场的听众解释起心脏的构造。 “瓣膜病可以理解为心脏里面的门坏了。”他说，心脏里面就像一个房子，里面有许多零件，坏了是可以修的。' }
    ],
    imgList: [{ img: news0510Two }],
  },
  {
    id: "3",
    content: [
      { name: '心脏构造图' },
      { name: '教皇的帽子就像是个二尖瓣，正常人二尖瓣这扇门打开的面积是4到6平方厘米，就像一元硬币那么大。如果这扇门开不全了，打开的面积小于1.5平方厘米，就会出现症状。 “你开始可能什么都不会有影响，但是最后就会出现问题了。”倪一鸣说，最严重的情况是会出现胸闷、气急、心慌、心跳很严重、咳嗽出现粉红色的泡沫样痰，甚至脸颊红彤彤的。正常的心跳又是如何的？有问题的心跳又是如何的？现场观众在听到音频资料后，立刻会心地笑了，因为健康心跳和问题心跳的区别太大了。' },
    ],
    imgList: [{ img: news0510Three }],
  },
  {
    id: "4",
    content: [
      { name: '什么叫心房颤动？' },
      { name: '  如果你听这些患者的心跳毫无规律，那就是房颤。如果因此血栓掉在脑子里，就会中风。如果掉在腿里，腿也会废掉。风湿性主动脉瓣关闭不全又是怎么一回事呢？“一家人每天挑半桶水够用一天，有天这个桶破了个洞，一次回家挑半桶水漏水就不够用了。”他说，如果心脏比正常人多送一点血，就很危险了。' },
    ],
    imgList: [{ img: news0510Four }],
  },
  {
    id: "5",
    content: [
      { name: ' 如何换瓣呢？是不是越贵越好？' },
      { name: ' “有的人喜欢卖法拉利，有的人喜欢桑塔纳，我建议用最合适的，而不是最贵的。”倪一鸣回忆说，他以前对瓣膜也不太清楚，直到去年才发现机械瓣和生物瓣的区别，而且每一种都会有一些细微的不同。 机械瓣不是金属的，而是热解碳材料，优点是理论上可使用300年，缺点是需要终身使用华法林抗凝，定期检查血指标。 生物瓣是从猪、牛的心脏上取材而成，优点是只需要华法林抗凝3到6个月，缺点是生物材料存在磨损的现象，理论上使用15年有20%的患者需要重新换瓣。 “60岁以下建议机械瓣 ，70岁以上生物瓣，因为70岁以上的患者运动能力小了，生物瓣的磨损率就会小很多。”倪一鸣解释道，如果孕期妇女使用抗凝剂，药的成分会流到胎儿中从而引起畸形等症状，“如果考虑要小孩，可以先换生物瓣，生完以后再换机械瓣。” “我刚工作的时候，这种手术的死亡率是非常高的，换一个瓣，死亡率是三分之一，上手术台如同上刑场，你搞得不好就送命了。”但现在的他很乐观，“现在只有1%的死亡率了，不过很难再提升，毕竟是心脏，有太多的未知因素。”' },
      { name: ' 开刀的方式又有哪几种？' }
    ],
    imgList: [{ img: news0510Five }],
  },
  {
    id: "6",
    content: [
      { name: '这一方式的优点是手术视野暴露较好，术者操作方便，心脏停跳时间短，相对安全；缺点是术后较慢。' },

    ],
    imgList: [{ img: news0510Six }],
  },
  {
    id: "7",
    content: [
      { name: '这一手术方式的优点是手术切口相对较小，术后恢复相对较快，心脏停跳时间延长，手术风险增加，外周体外循环对血管损伤较大，仅限于单瓣置换及简单先心病。 “我做过年纪最大的人有84岁，用的是经导管主动脉置入术。”倪一鸣讲道，现在这块技术较为成熟，“生动地讲，就是把大门先踢开，然后重新安装一个大门。”' },
    ],
    imgList: [{ img: news0510Seven }],
  },
  {
    id: "8",
    content: [
      { name: ' 有没有办法修好瓣膜呢？而不是换掉它？' },
      { name: ' “能够修最好修，修不好再换。”倪一鸣认为，二尖瓣置换术虽然较为成熟，但是如果在修复过程中出现各种情况，反而会出现复杂问题，“况且心脏长时间停止也不是很好。” 讲到三尖瓣返流症状，倪一鸣也说了几个症状，比如颈部一按一个窝，腹水等。 “心跳停跳时间半小时左右，术后1到2个月可以恢复正常生活，术后半年可以做轻度体力活，术后半年2年左右恢复到最佳水平。”他说，如果2年之后还没有完全恢复，也就只能这样了。 关于华法林的服用效果方式： 首先每天的服用剂量要均衡，不要一天一颗一天半颗。“不如改成每天四分之三，而且要下午吃，因为早上去验血，如果医生判断吃多了，药就取不出来了。”倪一鸣讲到了一些标准。' },
    ],
    imgList: [{ img: news0510Eight }],
  },
  {
    id: "9",
    content: [
      { name: ' 现场有观众问：“吃东西有影响吗？” 倪一鸣说：“一般食物对华法林的影响不大，只是不要盯着一样东西吃个不停就可以了。但药物对华法林的影响却很大，比如丹参和活血类药物。” 另外，有房颤的患者用阿司匹林是无效的；芬必得、消炎痛，甚至感冒类药物，对抗凝都会有影响；烟、酒都对华法林有影响。 手术后还能参加运动吗？ 虽然可以，但是不能参与剧烈运动，另外出血时也不会出血不止，所以拔牙时停止抗凝是值得商榷的。“咬根棉签三天也就止住了，不需要停药。”' },
      { name: ' 如何才能防范风湿心心脏病？' },
      { name: ' “发热、游走性关节红肿热痛、在6到15岁发病、链球菌感染、环形红斑等，都是特征之一”倪一鸣说，如果有过这些病史，则需要密切关注。 谢谢大家！希望各位的身体都健康。 倪一鸣感谢了到现场的病友和听众们。 直播结束，话图侠下周老时间仍会给大家带来一目了然的图文内容，以生动有趣的讲解方式重新诠释病症特点和治疗方式，敬请期待和收藏。' }
    ],
    imgList: [{ img: news0510Nine }],
  },
  {
    id: "10",
    content: [
      { name: '' },
    ],
    imgList: [{ img: news0510Ten }],
  },
]

let table1224List = [
  {
    id: "1",
    content: [
      { name: '' }
    ],
    imgList: [{ img: news1224One }],
  },
  {
    id: "2",
    content: [
      { name: '2014年12月27日，必将成为一个历史节点，位于滨江区的浙医儿院滨江院区将正式启用。浙医儿院滨江院区总用地面积91.5亩，投资约7.44亿元人民币，一期建筑面积约13.05万平方米，床位数900张，停车位近800个。经过五年的精心建设，这家规模将达到国内领先的儿童医院正式启用，为发展国内儿科事业、保障儿童健康发挥更大作用。' },
      { name: '浙医儿院院长杜立中说：滨江院区的启用备受社会关注，就诊的家长更是尤为关心。经过我们的努力，浙医儿院的就诊环境将更为宽敞、舒适，交通将更为便利，停车位更为充足。更重要的是两个院区各个专科门诊、病房配备更为齐全，新院区门诊日接待量达到10000人次，实际开设床位900张，两院区病床总数增至1300张，能够极大缓解病人“看病难”、“住院难”的现状。对于很多家长关心的“儿童体检中心”也在筹建过程中，很快就会为大家服务。' }
    ],
    imgList: [{ img: news1224Two }],
  },
  {
    id: "3",
    content: [
      { name: '浙医儿院滨江院区全面启用，其门急诊接待量可达10000人次。其住院病房更为充足，目前启用900张病床。包括内科监护室、新生儿监护室、外科监护室、耳鼻喉头颈外科、眼科、骨科、烧伤整形科、神经外科、新生儿外科、内分泌科、神经内科、消化内科、心内科；原有的心胸外科扩大为1.5个病房，诊疗更为细致，分外胸外科、心脏外科；普外科、呼吸内科、新生儿科均设两个病房；新增设口腔科病房、创伤外科病房、外科腔镜中心病房、肿瘤外科病房；并新开设感染楼诊治发热、肠道病人，收治感染科病人。' },
      { name: '据介绍，浙医儿院位于竹竿巷的湖滨院区依旧保留，其门急诊接待量为4000人次左右。湖滨院区住院病房暂保留病床数400余张,包括手术室、综合监护室、普外科、风湿免疫科、综合内科，并开设血液科层流病房、血液透析中心、康复科病房等。为了满足儿童就诊需求，原湖滨院区泌尿外科、肾脏内科病房增设为两个病房、血液科增设为三个病房。以后根据病人就诊的需求，可逐渐增加住院床位。' },
      { name: '门诊病人可根据实际情况选择湖滨或滨江院区就诊，两个院区的门诊均有齐全的专科设置，具备常规的诊断、治疗、检查医疗功能,包括CT、磁共振等特殊的检查项目，并对常规检查、特殊检查和住院预约等实行资源共享。但值得注意的是，对于需要看血液科的家长们，请认牢湖滨院区，滨江院区不设血液科；2015年1月1日起骨科湖滨院区仅上午开设门诊，下午停诊；2015年1月5号后湖滨院区的烧伤整形外科、神经外科门诊将全面停诊，此后看这两个专科只能到滨江院区就诊。1月15日起眼科湖滨院区仅保留周一至周五工作日门诊，双休日、节假日停诊。在此，要为家长们提个醒，两个院区均可以预约各个专科的专家号，请家长记牢就诊院区，以免耽误就诊。' },
      { name: '  12月27日，滨江新院区启用当天，将开展的大型义诊，门诊所有科别免挂号费，1000余专家号等你免费就诊。唐兰芳、陈洁、董关萍、高峰专科涉及呼吸、消化、内分泌、神经内科等各个科室，欢迎各位家长来浙医儿院滨江院区感受全新的就诊体验。' }
    ],
    imgList: [{ img: news1224Three }],
  },
  {
    id: "4",
    content: [
      { name: '浙医儿院滨江院区具体地址在滨盛路3333号，位于江南大道与信诚路交叉口，与省疾控中心相邻，从江南大道转兴宁路就能轻松到达新院区正大门。市区的病人要到滨江院区看门诊请乘坐地铁1号线到滨和路站下车，附近有172路、B支6路公交车可以到新院，或者坐K155路、92路换乘B支3路也可以到达。' }
    ],
    imgList: [{ img: '' }],
  },
]

let table1222List = [
  {
    id: "1",
    content: [
      { name: ' 2014年12月7日，杭州麟康健康管理有限公司正式开业啦！当天下午3时许，大幕徐徐拉开，开业典礼正式开始。台下高朋满座，众多的业界翘楚与我们共同见证了这激动人心的时刻。' }
    ],
    imgList: [{ img: news1222One }],
  },
  {
    id: "2",
    content: [
      { name: ' 开幕典礼的会场坐落在青山环绕绿树掩映的浙江文化精品体验馆，这里的环境纯朴古雅，缓缓移步内厅，耳边还隐隐听见古筝宁静从容的曲调，古色古香，韵味悠长，恍若置身魏晋，人也不由得飘逸逍遥了些许。' },
    ],
    imgList: [{ img: news1222Two }],
  },
  {
    id: "3",
    content: [
      { name: '台上的大提琴演奏余音袅袅绕梁三日，春风化雨般为开业典礼注入了一股优雅的力量。便如同我们，不必大刀阔斧，润物细无声地将健康带到你身边！' },
    ],
    imgList: [{ img: news1222Three }],
  },
  {
    id: "4",
    content: [
      { name: ' 麟康医家，是医者之家、健康之家！平台的建立，不仅仅是我们的骄傲，也是带给业界的福音！麟是瑞兽，康是安康，名字承载着的是我们满满的期待和浓浓的祝福。期待能为您与您的家人打造一片身心健康的栖息之地！' },
    ],
    imgList: [{ img: news1222Four }],
  },
  {
    id: "5",
    content: [
      { name: '' },
      { name: '' }
    ],
    imgList: [{ img: '' }],
  },
]

/** get请求
 * 获取用户列表
 */
Mock.mock(RegExp('/api/mockGetList' + '.*'), "get", (params) => {
  const detailDataId = params?.url.split('=')[1]
  const data = (() => {
    switch (Number(detailDataId)) {
      case 1:
        return table0824List
      case 2:
        return table0712List
      case 3:
        return table0630List
      case 4:
        return table0522List
      case 5:
        return table0424List
      case 6:
        return table0420List
      case 7:
        return table1203List
      case 8:
        return table1115List
      case 9:
        return table1017List
      case 10:
        return table1016List
      case 11:
        return table0614List
      case 12:
        return table0603List
      case 13:
        return table0510List
      case 14:
        return table1224List
      case 15:
        return table1222List
      default:
        return [];
    }
  })()
  return {
    code: "200",
    data
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
    data: tableOneList,
  };
});