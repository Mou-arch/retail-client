import Taro, {Component} from '@tarojs/taro'
import {AtTabBar} from "taro-ui";

export default class TabBar extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })

    if(value === 0){
      Taro.redirectTo({
        url: '/pages/index/index'
      })
    }

    if(value === 2){
      Taro.redirectTo({
        url: '/pages/user/index'
      })
    }
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
        current={this.state.current}
      />
    );
  }
}
