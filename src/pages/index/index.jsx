import Taro, {Component} from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import globalBackground from '@assets/index/global-background.jpeg'
// import TabBar from '@components/tabBar';
import SwiperBanner from './banner/index';
import SearchBanner from './search-banner/index';
import Category from './category/index';
import Recommend from './recommend/index';
import Weather from './weather/index';
import Community from './community/index';
import RecommendTab from './recommend-tab/index';
import './index.scss'


// const { TabBarItem } = TabBar

// console.log(TabBarItem)
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  };

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
        {/* <TabBar list={[ '全部','直播','会员节','全场优惠' ]}  >
          <TabBarItem active={0} >
            <View style={{ backgroundColor : 'pink' , height:'500rpx' }} >
                hello, word
            </View>
          </TabBarItem>
          <TabBarItem active={1} >
            <View style={{ backgroundColor : 'green' , height:'500rpx' }} >
              hello, word
            </View>
          </TabBarItem>
          <TabBarItem active={2} >
            <View style={{ backgroundColor : 'orange' , height:'500rpx' }} >
              hello, word
            </View>
          </TabBarItem>
        </TabBar> */}
        <Image className='index-container__background' src={globalBackground} />
      </View>
    )
  }
}
