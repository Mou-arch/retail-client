import  Taro ,{ useState } from '@tarojs/taro'
import {View ,Text , ScrollView } from "@tarojs/components";
import './style.less'

interface TabBarprops {
    list: any
    changeTab:Function
    color:string
}

 function TabBar({ list ,changeTab ,color }:TabBarprops){
    const [ activeTab , setActiveTab ] = useState(0)
    return <View  >
        <View className='tabBar_head' style={{backgroundColor:color}} >
          {
            list.map((v:string,i:number)=><View  onClick={()=>{setActiveTab(i);changeTab(i)}} className='tabBar_head_item' key={ v+i }  ><Text style={{ borderBottom:activeTab === i ? '4rpx solid #5587FF ':'0 none' , color: activeTab === i ? '#5587FF ':'#000' }}  >{v}</Text></View>)   
          }
        </View>
        <View style={{ display:'flex' }}  >
            <ScrollView   >
                {  this.props.children   }
            </ScrollView>  
        </View>
    </View>
}

export default TabBar

