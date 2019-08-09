import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import dth from '@assets/user/dth.png';
import StandardCard from '@components/standard-card/index';
import './index.scss';

export default class Tool extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    return (
      <View className='user__tool'>
        <StandardCard>
          <View className='user__tool-list at-row at-row--wrap'>
            <View className='user__tool-list-item at-row at-col-3'>
              <Image src={dth} />
              <Text>待付款</Text>
            </View>
            <View className='user__tool-list-item at-row at-col-3'>
              <Image src={dth} />
              <Text>待付款</Text>
            </View>
            <View className='user__tool-list-item at-row at-col-3'>
              <Image src={dth} />
              <Text>待付款</Text>
            </View>
            <View className='user__tool-list-item at-row at-col-3'>
              <Image src={dth} />
              <Text>待付款</Text>
            </View>
            <View className='user__tool-list-item at-row at-col-3'>
              <Image src={dth} />
              <Text>待付款</Text>
            </View>
          </View>
        </StandardCard>
      </View>
    );
  }
}
