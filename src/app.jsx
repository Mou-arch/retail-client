import Taro, {Component} from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/user/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      /*navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',*/
      navigationStyle: "custom"
    },
    tabBar: {
      color: "#7F7C7C",
      custom:true,
      selectedColor: "#557AFF",
      backgroundColor: "#fff",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          // iconPath: "./assets/images/menus/tab_Repair@3x.png",
          // selectedIconPath: "./assets/images/menus/tab_Repair_pre@3x.png"
        },
        {
          pagePath: "pages/index/index",
          text: "购物车",
          // iconPath: "./assets/images/menus/tab_customer@3x.png",
          // selectedIconPath: "./assets/images/menus/tab_customer_pre@3x.png"
        },
        {
          pagePath: "pages/user/index",
          text: "我的",
          // iconPath: "./assets/images/menus/tab_mine@3x.png",
          // selectedIconPath: "./assets/images/menus/tab_mine_pre@3x.png"
        }
      ]
    },
    usingComponents:{},
  };
  globalData={
    list:[],
    currentBar:0,
  }
  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
