// pages/feedback/feedback.js
const AV = require('../../utils/av-weapp.js');

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback:'',
    oid:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      oid: app.globalData.user.authData.lc_weapp.openid
    })
  },
  
  back: function (e) {
    var Todo = AV.Object.extend("Feedback");
    // 新建一个 Todo 对象
    var todo = new Todo();
    todo.set('comment', this.data.feedback);
    todo.set('user',this.data.oid);
    todo.save().then(function (todo) {
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + todo.id);
    }, function (error) {
      // 异常处理
      console.error('Failed to create new object, with error message: ' + error.message);
    });
    wx.navigateBack({
      delta: 1
    })
  },
  commentInput: function (e)
  {
    var feedback = e.detail.value;
    this.setData({
      feedback: feedback
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})