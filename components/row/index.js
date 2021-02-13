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
    justifyCls: ''
  },
  observers : {
    'align': function () {
      var { align } = this.data;
      this.setData({
        alignCls: align ? 'f-row-flex-' + align : ''
      })
    },
    'justify': function () {
      var { justify } = this.data;
      this.setData({
        justifyCls: justify ? 'f-row-flex-' + justify : ''
      })
    },
    'gutter': function () {
    }
  },
  lifetimes: {
    ready: function () {
    }
  },
  created () {
  },
  attached () {
    console.log(this.data.gutter)
  },
  methods: {
  }
})
