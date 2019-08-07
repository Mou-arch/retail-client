import Taro, {Component} from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import {AtTabBar} from 'taro-ui'
import globalBackground from '@assets/index/global-background.jpeg'
import SwiperBanner from './banner/index';
import SearchBanner from './search-banner/index';
import Category from './category/index';
import Recommend from './recommend/index';
import Weather from './weather/index';
import Community from './community/index';
import RecommendTab from './recommend-tab/index';
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  };

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
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='index-container'>
        <View className='index-container__header'>
          <Weather className='at-row' />
          <View className='at-row'>
            <View className='at-col-5'>
              <Community />
            </View>
            <View className='at-col-5 at-col__offset-2'>
              <SearchBanner />
            </View>
          </View>
        </View>
        <View className='index-container__content'>
          <SwiperBanner />
          <Category />
          <RecommendTab />
          <Recommend />
        </View>

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
        <Image className='index-container__background' src={globalBackground} />
      </View>
    )
  }
}
