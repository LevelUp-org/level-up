// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const { pageNo=0, count=20 } = event;
  const db = cloud.database();
  const result = await db.collection('lu_topic')
  .skip(pageNo * count)
  .limit(count)
  .get()

  if (result && Array.isArray(result.data)) {
    return result;
  }else {
    return {
      data: [],
      error: '获取失败'
    }
  }
}