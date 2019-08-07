import Taro, {Component} from '@tarojs/taro'
import {Text, View} from "@tarojs/components";
import {AtIcon} from "taro-ui";
import './index.scss';

/**
 * 社区组件
 */
export default class Community extends Component {
  render() {
    return (
      <View className='index-community'>
        <View className='index-community__name'>
          <Text>
            爵士花园山姆超市
          </Text>
          <AtIcon value='chevron-down' size='12' />
        </View>
      </View>
    );
  }
}
