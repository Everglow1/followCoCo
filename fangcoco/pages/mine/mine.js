
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nickName:"",
    avatarUrl:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        that.setData({
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
        })
      }
    })
  },
  bitphone:function(){
    wx.makePhoneCall({
      phoneNumber: '12334567890' 
    })
  },
  daijuan:function() {
    wx.showModal( {
       title:"我的代劵",
       content:"您目前没有代劵"
    })
  }
})