
import  Taro ,{ useState } from '@tarojs/taro'
import {View ,Text} from "@tarojs/components";
import './style.less'

interface TabBarTtemProps {
    active:number
}

export default  function TabBarTtem ({ active }:TabBarTtemProps){
    return <View>
        { this.props.children }
    </View>
}