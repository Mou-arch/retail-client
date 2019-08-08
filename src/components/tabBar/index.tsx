import Taro, { useState ,Component } from '@tarojs/taro'
import {View ,Text } from "@tarojs/components";
import './style.less'

interface TabBarprops {
    list: any
}

interface TabBarTtemProps{
    active:number
}

function TabBarTtem  ({ active }:TabBarTtemProps){
    return <View>
        { this.props.children }
    </View>
}

class TabBar extends Component<TabBarprops,{}> {
   static TabBarTtem = TabBarTtem
   constructor(props:TabBarprops){
       super(props)
       this.state={
         activeTab:0,
       }
   }  
   changeTab=(val:number)=>{
      this.setState({
          activeTab:val
      })
   }
   render(){
    const { list } = this.props  
    return <View>
             <View className='tabBar_head' >
             {
              list.map((v:string,i:number)=><View  onClick={this.changeTab.call(this,i)} className='tabBar_head_item' key={ v+i }  ><Text style={{ borderBottom:activeTab === i ? '4rpx solid #5587FF ':'0 none' , color: activeTab === i ? '#5587FF ':'#000' }}  >{v}</Text></View>)   
             }
             </View>
            {  this.props.children   }
            </View>
   }
}



export default TabBar