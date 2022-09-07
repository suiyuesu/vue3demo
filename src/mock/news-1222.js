
// 引入mockjs
import Mock from "mockjs";
import newsOne from '@/static/images/news/news122201.png'
import newsTwo from '@/static/images/news/news122202.png'
import newsThree from '@/static/images/news/news122203.jpg'
import newsFour from '@/static/images/news/news122204.png'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
  {
    id: "1",
    content: [
      { name: ' 2014年12月7日，杭州麟康健康管理有限公司正式开业啦！当天下午3时许，大幕徐徐拉开，开业典礼正式开始。台下高朋满座，众多的业界翘楚与我们共同见证了这激动人心的时刻。' }
    ],
    imgList: [{ img: newsOne }],
  },
  {
    id: "2",
    content: [
      { name: ' 开幕典礼的会场坐落在青山环绕绿树掩映的浙江文化精品体验馆，这里的环境纯朴古雅，缓缓移步内厅，耳边还隐隐听见古筝宁静从容的曲调，古色古香，韵味悠长，恍若置身魏晋，人也不由得飘逸逍遥了些许。' },
    ],
    imgList: [{ img: newsTwo }],
  },
  {
    id: "3",
    content: [
      { name: '台上的大提琴演奏余音袅袅绕梁三日，春风化雨般为开业典礼注入了一股优雅的力量。便如同我们，不必大刀阔斧，润物细无声地将健康带到你身边！' },
    ],
    imgList: [{ img: newsThree }],
  },
  {
    id: "4",
    content: [
      { name: ' 麟康医家，是医者之家、健康之家！平台的建立，不仅仅是我们的骄傲，也是带给业界的福音！麟是瑞兽，康是安康，名字承载着的是我们满满的期待和浓浓的祝福。期待能为您与您的家人打造一片身心健康的栖息之地！' },
    ],
    imgList: [{ img: newsFour }],
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
Mock.mock("/api/mockGet1222List", "get", () => {
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