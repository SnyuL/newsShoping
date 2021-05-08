import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Stepper,Checkbox, CheckboxGroup , Tabbar,NavBar, TabbarItem , Swipe, SwipeItem,Grid, GridItem,List,Cell, Image as VanImage, CellGroup, SwipeCell,Toast ,Skeleton,Field,Form,Tab, Tabs, Icon, ActionBar, ActionBarIcon, ActionBarButton} from 'vant';
import 'amfe-flexible'
createApp(App).use(Button).use(Stepper).use(Checkbox).use(CheckboxGroup).use(NavBar).use(Tabbar).use(VanImage).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(TabbarItem).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(List).use(Cell).use(Tab).use(Tabs).use(Toast).use(Icon).use(CellGroup).use(Form).use(Field).use(SwipeCell).use(Skeleton).use(store).use(router).mount('#app')