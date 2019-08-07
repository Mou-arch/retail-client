import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from "@tarojs/components";
import defaultProduct from '@assets/default-product.jpg';
import {AtIcon} from 'taro-ui'

export default class Recommend extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    return (
      <View className='index-recommend'>
        <View className='index-recommend__item at-row'>
          <View className='index-recommend__item__image'>
            <Image
              mode='widthFix'
              src={defaultProduct}
            />
          </View>
          <View className='index-recommend__item__introduction'>
            <View className='index-recommend__item__introduction__title'>
              韩国进口 春雨蜂蜜面膜补水面膜面膜面膜面膜面膜
            </View>
            <View className='index-recommend__item__introduction__summary'>
              韩国进口 春雨(papa recipe)蜂蜜面膜 补水保湿舒缓滋润面膜 敏感肌肤等等
            </View>
            <View className='index-recommend__item__introduction__complex'>
              <View className='index-recommend__item__introduction__complex__price'>
                <Text className='index-recommend__item__introduction__complex__price__discount_price'>￥700.00</Text>
                <Text className='index-recommend__item__introduction__complex__price__original_price'>￥900</Text>
              </View>
              <View className='index-recommend__item__introduction__complex__add_cart'>
                <AtIcon value='shopping-cart' size='20' />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
