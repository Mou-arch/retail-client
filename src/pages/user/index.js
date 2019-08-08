import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import TabBar from '@components/tab-bar';
import pickUpCode from '@assets/user/pick-up-code.png';
import avatar from '@assets/user/avatar.jpg';
import Order from './order/index';
import Tool from  './tool/index';
import './index.scss';

export default class User extends Component {
  render() {
    return (
      <View className='user'>
        <View className='user__info'>
          <View className='user__info__basic'>
            <View className='user__info__basic__detail at-row'>
              <View className='user__info__basic__detail__show at-row'>
                <View className='user__info__basic__detail__show__avatar'>
                  <Image src={avatar} />
                </View>
                <View className='user__info__basic__detail__show__nickname'>
                  <Text>morgan</Text>
                </View>
              </View>
              <View className='user__info__basic__detail__pick_up_code'>
                <View className='user__info__basic__detail__pick_up_code__code'>
                  <Image src={pickUpCode} />
                </View>
                <View className='user__info__basic__detail__pick_up_code-description'>提货码</View>
              </View>
            </View>
          </View>
        </View>

        <Order />
        {/* <TabBar /> */}
      </View>
    );
  }
}
