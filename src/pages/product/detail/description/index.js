import Taro, {Component} from '@tarojs/taro'
import {View, RichText} from "@tarojs/components";
import {AtDivider} from 'taro-ui'
import './index.scss';

export default class Description extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    const nodes = `<p>1111111</p>`;

    return (
      <View className='product__detail-description'>
        <AtDivider content='宝贝详情' />
        <View className='product__detail-description-content'>
          <RichText
            nodes={nodes}
          />
        </View>
      </View>
    );
  }
}
