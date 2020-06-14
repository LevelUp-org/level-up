// miniprogram/pages/problemList/problemList.js

const createRecycleContext = require('miniprogram-recycle-view');
const app = getApp();

Page({

  _top: 0, // 下一个item的top值
  _itemCount: 0, // 当前已经加载的item数量
  _windowWidth: undefined, // 屏幕宽度

  /**
   * 页面的初始数据
   */
  data: {
    recycleList: [],
    pageNo: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isLoading: true
    })

    wx.getSystemInfo({
      success: (res) => {
        this._windowWidth = res.windowWidth;
        this.getData(0);
      },
    })
  },

  onReady: function () {
    this.ctx = createRecycleContext({
      id: 'recycleId',
      dataKey: 'recycleList',
      page: this,
      itemSize: { // 这个参数也可以直接传下面定义的this.itemSizeFunc函数
        width: this._windowWidth,
        height: 60
      },
      useInPage: true,
      root: getCurrentPages()[getCurrentPages().length - 1],
    })
    // this.ctx.append(this.data.recycleList);
    // ctx.update(beginIndex, list)
    // ctx.destroy()
    // ctx.forceUpdate();
  },
  itemSizeFunc: function (item, idx) {
    return {
      width: this._windowWidth,
      height: 60
    }
  },

  onReachBottom() {
    console.log('onReachBottom ====>');

    this.getData(this.data.pageNo);
  },

  onPageScroll(e) {},

  getData(pageNo) {

    console.log(pageNo);

    wx.cloud.callFunction({
      name: 'getTopicList',
      data: {
        pageNo: pageNo
      }
    }).then(res => {
      console.log("=========>", res);
      const { result } = res || {};
      const { data } = result || {};
      if (Array.isArray(data)) {
        // let appendArr = [];
        // data.forEach((item) => {
        //   const { title } = item || {};
        //   console.log(title);
        //   let titleObj = app.towxml(title, 'markdown');
        //   appendArr.push(titleObj);
        // });
        // this.ctx.append(appendArr)

        this.ctx.append(data)
        this.setData({
          pageNo: pageNo + 1
        });
      } else {
      // } else {

      }
      
    }).catch(err => {
      console.log('err ======>', err);
    });
  }
})