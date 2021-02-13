/**
 * 布局 - 行
 */
Component({
  options :{
    addGlobalClass: true,
    styleIsolation: 'shared'
  },
  properties: {
    type: {
      type: String
    },
    align: {
      type: String
    },
    justify: {
      type: String
    },
    gutter: {
      type: Array
    }
  },
  data : {
    alignCls: '',
    justifyCls: '',
    style: ''
  },
  observers : {
    'align': function (align) {
      this.setData({
        alignCls: align ? 'f-row-flex-' + align : ''
      })
    },
    'justify': function (justify) {
      this.setData({
        justifyCls: justify ? 'f-row-flex-' + justify : ''
      })
    },
    'gutter': function (val) {
      var margin = '';
      if (val != null && val.length > 0) {
        margin = val.map(v => (~v + 1)/2 + 'rpx').join(' ')
      }
      this.setData({
        style: margin.length > 0 ? 'margin: ' + margin : ''
      })
    }
  },
  lifetimes: {
    ready: function () {
    }
  },
  created () {
  },
  attached () {
  },
  methods: {
  }
})
