import Taro, {Component} from '@tarojs/taro'
import {Text, View} from "@tarojs/components";
import {AtFloatLayout} from "taro-ui"
import VirtualSelection from '@components/virtual-selection/index';
import './index.scss';

export default class Parameter extends Component {

  static options = {
    addGlobalClass: true,
  };

  state = {
    display: true
  };

  handleParameterClick = () => {
    this.setState({
      display: true
    })
  };

  handleClose = () => {
    this.setState({
      display: false
    });
  };

  render() {
    return (
      <View className='product__detail-parameter' onClick={this.handleParameterClick}>
        <VirtualSelection
          title='参数'
        >
          <Text className='product__detail-parameter-title'>
            品牌 单品...
          </Text>
        </VirtualSelection>
        <AtFloatLayout
         customStyle={{background: 'red'}}
          isOpened={this.state.display}
          onClose={this.handleClose}
        >
          <View className='product__detail-parameter-layout-detail'>
            <View className='product__detail-parameter-layout-detail-title'>
              <Text>产品参数</Text>
            </View>
            <View className='product__detail-parameter-layout-detail-list'>
              <View className='product__detail-parameter-layout-detail-list-item at-row'>
                <View className='product__detail-parameter-layout-detail-list-item-label at-col-3'>
                  各种
                </View>
                <View className='product__detail-parameter-layout-detail-list-item-content 9'>
                  三只松鼠
                </View>
              </View>
              <View className='product__detail-parameter-layout-detail-list-item at-row'>
                <View className='product__detail-parameter-layout-detail-list-item-label at-col-3'>
                  生产企业
                </View>
                <View className='product__detail-parameter-layout-detail-list-item-content 9'>
                  三只松鼠
                </View>
              </View>
            </View>
          </View>
        </AtFloatLayout>
      </View>
    );
  }
}
