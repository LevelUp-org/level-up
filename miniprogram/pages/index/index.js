//index.js
const app = getApp()

Page({
  data: {
    list: [
      {
        id: 0,
        type: 'HTML',
        name: 'HTML',
        open: true,
        items: [
          {
            type: 'HTML',
            name: 'HTML',
            count: 198,
          },
        ]
      }
    ]
  },

  onLoad: function() {
  },

  kindToggle(e) {
    const id = e.currentTarget.id;
    console.log(id);
    const list = this.data.list;
    for (let i = 0, len = list.length; i < len; ++i) {
      console.log(id, '====',list[i].id);
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },
})
