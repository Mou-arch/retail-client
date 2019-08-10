import Taro, {Component} from '@tarojs/taro'
import {View} from "@tarojs/components";
import Brief from './brief/index';
import Protection from './protection/index';
import DetailSwiper from './detail-swiper/index';
import Operate from './operate/index';
import Specification from './specification/index';
import Parameter from './parameter/index';
import Description from './description/index';
import './index.scss';

export default class Detail extends Component {
  render() {
    return (
      <View className='product__detail'>
        <DetailSwiper />
        <Brief />
        <Protection />
        <Specification />
        <Parameter />
        <Description />
        <Operate />
      </View>
    );
  }
}
