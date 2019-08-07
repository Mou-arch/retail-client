import Taro, {Component} from '@tarojs/taro'
import {View, Input} from '@tarojs/components'
import {AtIcon} from 'taro-ui'
import './index.scss';

export default class SearchBanner extends Component {
  render() {
    return (
      <View className='index-search-banner'>
        <Input className='index-search-banner__search_input' placeholder='搜索商品' />
        <View className='index-search-banner__search_icon'>
          <AtIcon value='search' size='15' color='#ADB2BE' />
        </View>
      </View>
    );
  }
}
