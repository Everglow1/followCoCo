var app = getApp()

Page({
  data: {
    //轮播图
   movies: [
      '../../images/1.png',
      '../../images/2.png'
    ],
  },
  onLoad: function () {
    
  },
  /*转到购物列表*/ 
  golist: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  }
})
