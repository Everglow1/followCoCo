Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      tabIndex:true
    },
    changeTab:function(e){
      var index = e.currentTarget.dataset.index
      this.setData({
        tabIndex: index,
      })
    },
    golist: function () {
      wx.navigateTo({
        url: '../list/list'
      })
    },
  })