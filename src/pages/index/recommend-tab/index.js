import Taro, {Component} from '@tarojs/taro'
import {View} from "@tarojs/components";
import './index.scss';

export default class RecommendTab extends Component {

  constructor() {
    super(...arguments);

    this.state = {
      tabList: [
        {
          title: '1111',
        },
        {
          title: '222',
        }
      ]
    };
  }

  render() {
    return (
      <View className='index-recommend-tab'>
        <View className='index-recommend-tab__navigate'>
          <View className=''>

          </View>
        </View>
        <View className='index-recommend-tab__contents'>

        </View>
      </View>
    );
  }
}
