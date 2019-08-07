import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import dfk from '@assets/user/dfk.png';
import dfh from '@assets/user/dfh.png';
import dth from '@assets/user/dth.png';
import ywc from '@assets/user/ywc.png';
import sh from '@assets/user/sh.png';
import {AtIcon} from 'taro-ui'
import './index.scss';

export default class Order extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    return (
      <View className='user__order'>
        <View className='user__order-my-order'>
          <View className='user__order-my-order-title'>
            我的订单
          </View>
          <View className='user__order-my-order-show-all'>
            <Text>
              查看全部订单
            </Text>
            <AtIcon value='chevron-right' size='13' />
          </View>
        </View>
        <View className='user__order-order-feature'>
          <View className='user__order-order-feature-item'>
            <Image src={dfk} />
            <Text>待付款</Text>
          </View>
          <View className='user__order-order-feature-item'>
            <Image src={dfh} />
            <Text>待配送</Text>
          </View>
          <View className='user__order-order-feature-item'>
            <Image src={dth} />
            <Text>待提货</Text>
          </View>
          <View className='user__order-order-feature-item'>
            <Image src={ywc} />
            <Text>已提货</Text>
          </View>
          <View className='user__order-order-feature-item'>
            <Image src={sh} />
            <Text>售后服务</Text>
          </View>
        </View>
      </View>
    );
  }
}
