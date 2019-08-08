import Taro, {Component} from '@tarojs/taro'
import {View} from "@tarojs/components";
import {AtCard, AtIcon} from "taro-ui"
import './index.scss';

export default class StandardCard extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    return (
      <View>
        <View className='standard-card'>
          <View className='standard-card-head at-row'>
            <View className='standard-card-head-title'>
              我的订单
            </View>
            <View className='standard-card-head-more'>
              查看所有
              <AtIcon value='chevron-right' size='13' />
            </View>
          </View>
          <View className='standard-card-content'>
            {this.props.children}
          </View>
        </View>
      </View>
    );
  }
}
