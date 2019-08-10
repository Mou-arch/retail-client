import Taro, {Component} from '@tarojs/taro'
import {Text, View} from "@tarojs/components";
import {AtIcon} from 'taro-ui'
import './index.scss';

export default class Brief extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    return (
      <View className='product__detail-brief'>
        <View className='product__detail-brief-price-with-share at-row at-row__justify--between'>
          <View className='product__detail-brief-price-with-share-price'>
            ￥700.00
            <Text className='product__detail-brief-price-with-share-price-original-price'>
              ￥100.00
            </Text>
          </View>
          <View className='product__detail-brief-price-with-share-share'>
            <AtIcon value='share' size='12' />
            <Text className='product__detail-brief-price-with-share-share-text'>分享</Text>
          </View>
        </View>
        <View className='product__detail-brief-title'>
          农夫山泉茶兀饮料茶派果味水500ml*15瓶整箱蜜桃乌龙西柚茉莉红茶15瓶整箱蜜桃乌龙西柚茉莉红茶15瓶整箱蜜桃乌龙西柚茉莉红茶
        </View>
      </View>
    );
  }
}
