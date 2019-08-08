import Taro, {Component} from '@tarojs/taro'
import {AtTabBar} from "taro-ui";

const app = Taro.getApp()


export default class TabBar extends Component {
  constructor() {
    super(...arguments);
    this.state = {
    }
  }

  handleClick(value) {
    if(value === 0){
      Taro.switchTab({
        url: '/pages/index/index'
      })
     
    }
    if(value === 2){
      Taro.switchTab({
        url: '/pages/user/index'
      })
    }
    app.globalData.currentBar = value
  }

  render() {
    return (
      <AtTabBar
        fixed
        iconSize='20'
        fontSize='10'
        tabList={[
          {title: '首页', iconType: 'home'},
          {title: '购物车', iconType: 'shopping-cart'},
          {title: '我的', iconType: 'user'},
        ]}
        onClick={this.handleClick.bind(this)}
        current={app.globalData.currentBar}
      />
    );
  }
}
