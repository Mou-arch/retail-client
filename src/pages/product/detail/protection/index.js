import Taro, {Component} from '@tarojs/taro'
import {Text, View} from "@tarojs/components";
import VirtualSelection from '@components/virtual-selection/index';
import './index.scss';

export default class Protection extends Component {
  render() {
    return (
      <View className='product__detail-protection'>
        <VirtualSelection
          title='保障'
        >
          <Text className='product__detail-protection-title'>
            正品保证 、过敏保证 、 极速退货 、 极速推款
          </Text>
        </VirtualSelection>
      </View>
    );
  }
}
