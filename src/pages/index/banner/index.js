import Taro, {Component} from '@tarojs/taro'
import {View, Swiper, SwiperItem, Image} from '@tarojs/components'
import bar from '@assets/default-banner.png'
import './index.scss'

export default class SwiperBanner extends Component {
  static defaultProps = {
    list: []
  };

  render() {
    return (
      <View className='index-banner at-row'>
        <Swiper
          indicatorDots
          autoplay
        >
          <SwiperItem className='index-banner__item'>
            <Image src={bar} className='index-banner__item__img' />
          </SwiperItem>
          <SwiperItem className='index-banner__item'>
            <Image src={bar} className='index-banner__item__img' />
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}
