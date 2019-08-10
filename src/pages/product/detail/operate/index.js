import Taro, {Component} from '@tarojs/taro'
import {Text, View} from "@tarojs/components";
import {AtIcon} from 'taro-ui'
import './index.scss';

export default class Operate extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    return (
      <View className='product__detail-operate at-row at-row__justify--between'>
        <View className='product__detail-operate-service at-row at-col-5'>
          <View className='product__detail-operate-service-item at-col-4'>
            <AtIcon value='clock' size='18' />
            <Text className='product__detail-operate-service-item-explanation'>客服</Text>
          </View>
          <View className='product__detail-operate-service-item at-col-4'>
            <AtIcon value='clock' size='18' />
            <Text className='product__detail-operate-service-item-explanation'>客服</Text>
          </View>
          <View className='product__detail-operate-service-item at-col-4'>
            <AtIcon value='clock' size='18' />
            <Text className='product__detail-operate-service-item-explanation'>客服</Text>
          </View>
        </View>

        <View className='product__detail-operate-buy at-row at-col-7 at-row__justify--end'>
          <View className='product__detail-operate-buy-add-cart'>
            加入购物车
          </View>
          <View className='product__detail-operate-buy-buy-now'>
            立即购买
          </View>
        </View>

      </View>
    );
  }
}
