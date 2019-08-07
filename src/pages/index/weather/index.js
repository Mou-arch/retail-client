import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from "@tarojs/components";
import clear from '@assets/index/clear.png';
import './index.scss';

/**
 * 天气组件
 */
export default class Weather extends Component {

  static options={
    addGlobalClass:true,
  };

  render() {
    return (
      <View className='index-weather at-row'>
        <Image className='index-weather__image' src={clear} />
        <View>31℃</View>
        <Text className='index-weather__week'>星期二</Text>
      </View>
    );
  }
}
