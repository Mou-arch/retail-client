import Taro, {Component} from '@tarojs/taro'
import {Image, Swiper, SwiperItem, View} from '@tarojs/components'
import defaultProduct from '@assets/default-product.jpg'
import './index.scss';

export default class DetailSwiper extends Component {

  state = {
    height: 0
  };

  constructor(props) {
    super(props);

    this.state.height = wx.getSystemInfoSync().windowWidth + 'px';
  }

  render() {
    console.log(this.state.height);
    return (
      <View>
        <Swiper
          className='swiper-container'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
          style={{height: this.state.height}}
        >
          <SwiperItem>
            <Image className='swiper-img' src={defaultProduct} />
          </SwiperItem>
          <SwiperItem>
            <Image className='swiper-img' src={defaultProduct} />
          </SwiperItem>
          <SwiperItem>
            <Image className='swiper-img' src={defaultProduct} />
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}
