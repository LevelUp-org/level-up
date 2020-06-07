//index.js
const app = getApp()

Page({
  data: {
    list: [
      {
        id: 0,
        type: 'Web',
        name: 'Web',
        open: true,
        items: [
          {
            type: 'css',
            name: 'css',
            count: 198,
          },
          {
            type: 'js',
            name: 'js',
            count: 190,
          },
          {
            type: 'html',
            name: 'html',
            count: 190,
          },
          {
            type: 'react',
            name: 'react',
            count: 190,
          },
          {
            type: 'Vue',
            name: 'Vue',
            count: 190,
          }
        ]
      },
      {
        id: 1,
        type: 'Hybrid',
        name: 'Hybrid',
        open: false,
        items: [
          {
            type: 'Flutter',
            name: 'Flutter',
            count: 190,
          },
          {
            type: 'react-native',
            name: 'react-native',
            count: 190,
          },
        ]
      },
      {
        id: 2,
        type: 'Native',
        name: 'Native',
        open: false,
        items: [
          {
            type: 'iOS',
            name: 'iOS',
            count: 190,
          },
          {
            type: 'Android',
            name: 'Android',
            count: 19112,
          }
        ]
      },
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
