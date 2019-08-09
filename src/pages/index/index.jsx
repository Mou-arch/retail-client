import Taro, {Component} from '@tarojs/taro'
import {Image, View, ScrollView} from '@tarojs/components'
import globalBackground from '@assets/index/global-background.jpeg'
import TabBar from '@components/tabBar';
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

  constructor(props) {
    super(props)
    this.state = {
      tabList: ['全部', '直播', '会员节', '全场优惠'],
      screenWidth: 375,
      currentTab: 0,
      isAnimate: false,
      isMove: true,
      screenHeight: '100%',
    }
    this.top = null
  }

  componentWillMount() {
  }

  componentDidMount() {
    //获取设备跨度
    Taro.getSystemInfo({
      success: (res) => {
        this.setState({
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight * 2 + 'rpx',
        })
      },
      fail: () => {
      },
    })
    Taro.createSelectorQuery().select('.tabTop').boundingClientRect((res) => {
      this.top = res.top
    }).exec()
  }

  componentWillUnmount() {
  }

  componentDidShow() {

  }

  componentDidHide() {
  }

  changeTab = (val) => {
    this.setState({
      isAnimate: true,
    }, () => {
      this.setState({
        currentTab: val,
      }, () => {
        Promise.resolve().then(() => this.setState({isAnimate: false}))
      })
    })
  }
  theScroll = (event) => {
    const scrollTop = event.detail.scrollTop
    const {isMove} = this.state
    if (scrollTop >= this.top) {
      isMove && this.setState({
        isMove: false,
      })
    } else {
      !isMove && this.setState({
        isMove: true,
      })
    }
  }

  render() {
    const {tabList, screenWidth, currentTab, isAnimate, screenHeight} = this.state
    return (
      <ScrollView onScroll={this.theScroll} scrollY style={{height: screenHeight}}>
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
          </View>
          <View className='tabTop'>
            <TabBar list={tabList} changeTab={this.changeTab} color='#fff'>
              <ScrollView
                scrollX={isAnimate}
                scrollWithAnimation
                scrollLeft={currentTab * 375}
              >
                <View
                  style={{width: screenWidth * 2 * (tabList.length) + 'rpx', display: 'flex', padding: 0, margin: 0}}
                >

                  {/* ————————————————————你自己需要写入得内容———————————————————— */}
                  <View
                    className='tabItem'
                    style={{width: screenWidth * 2 + 'rpx', backgroundColor: 'pink', height: '1500rpx',}}
                  >
                    <Recommend />
                    <Recommend />
                    <Recommend />
                  </View>
                  <View
                    className='tabItem'
                    style={{width: screenWidth * 2 + 'rpx', backgroundColor: 'green', minHeight: '1500rpx'}}
                  >
                    <Recommend />
                    <Recommend />
                    <Recommend />
                  </View>
                  <View
                    className='tabItem'
                    style={{width: screenWidth * 2 + 'rpx', backgroundColor: 'orange', minHeight: '1500rpx'}}
                  >
                    <Recommend />
                    <Recommend />
                    <Recommend />
                  </View>
                  <View
                    className='tabItem'
                    style={{width: screenWidth * 2 + 'rpx', backgroundColor: '#5587FF', minHeight: '1100rpx'}}
                  >
                    <Recommend />
                    <Recommend />
                    <Recommend />
                  </View>
                  {/* ————————————————————------------——————————————————— */}
                </View>
              </ScrollView>
            </TabBar>
          </View>
          <Image className='index-container__background' src={globalBackground} />
        </View>
      </ScrollView>
    )
  }
}
