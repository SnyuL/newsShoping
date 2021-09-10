import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/mock/index"
import VideoPlayer from 'vue-video-player'
// 高德地图
import VueAMap from 'vue-amap'

import { Button,Stepper,Checkbox,Card ,Divider , CheckboxGroup , Tabbar,NavBar, TabbarItem , Swipe, SwipeItem,Grid, GridItem,List,Cell, Image as VanImage, CellGroup, SwipeCell,Toast ,Skeleton,Field,Form,Tab, Tabs, Icon, ActionBar, ActionBarIcon, ActionBarButton,Search } from 'vant';
import 'amfe-flexible'
createApp(App).use(VideoPlayer).use(VueAMap).use(Button).use(Divider).use(Card).use(Stepper).use(Checkbox).use(CheckboxGroup).use(NavBar).use(Tabbar).use(VanImage).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(TabbarItem).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(List).use(Cell).use(Tab).use(Tabs).use(Toast).use(Icon).use(CellGroup).use(Form).use(Field).use(SwipeCell).use(Search).use(Skeleton).use(store).use(router).mount('#app')
createApp(App)
VueAMap.initAMapApiLoader({
    key: '21f2a46d3150a8d51850058039242132',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
  })