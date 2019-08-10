import Taro, {Component} from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import VirtualSelection from '@components/virtual-selection/index';
import defaultProduct from '@assets/default-product.jpg'
import { AtTag } from 'taro-ui'
import './index.scss';

export default class Specification extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    return (
      <View className='product__detail-specification'>
        <VirtualSelection
          title='选择'
        >
          <View>
            <Text className='product__detail-specification-title'>
              选择 颜色分类
            </Text>
            <View className='product__detail-specification-preview at-row'>
              <Image src={defaultProduct} />
              <Image src={defaultProduct} />
              <Text>共3种颜色分类可选</Text>
            </View>
          </View>

        </VirtualSelection>
      </View>
    );
  }
}
