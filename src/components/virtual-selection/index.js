import Taro, {Component} from '@tarojs/taro'
import {View} from "@tarojs/components";
import {AtIcon} from 'taro-ui'
import './index.scss';

export default class VirtualSelection extends Component {
  static options = {
    addGlobalClass: true,
  };

  render() {
    const {title = ''} = this.props;

    return (
      <View className='virtual-selection at-row at-row__align--start'>
        <View className='virtual-selection-title'>
          {title}
        </View>
        <View className='virtual-selection-content'>
          {this.props.children}
        </View>
        <View className='virtual-selection-more at-row at-row__justify--end'>
          <AtIcon value='chevron-right' size='15' />
        </View>
      </View>
    );
  }
}
