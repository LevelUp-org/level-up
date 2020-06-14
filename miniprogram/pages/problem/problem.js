// miniprogram/pages/problem/problem.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAnswer: false,
    htmlSnip: {},
    answer: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { title, content } = options;

    let result = app.towxml(title, 'markdown');

		// 更新解析数据
		this.setData({
			htmlSnip: result,
      isLoading: false,
      answer: content
		});
  },

  showAnswer() {
    this.setData({
      showAnswer: true
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})