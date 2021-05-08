import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
type goodType = {
  id:number;
  count:string;
}
type stateType = {
  car:any[]
}
export default createStore<stateType>({
  state: {
    car:[]
  },
  mutations: {
    addToCar(state, goodsinfo:goodType){
      var flag:boolean = false;
      //1.看要添加的商品在购物车中是否存在
      state.car.forEach((item:any)=>{
         //2.如果存在，则修改购物车中商品的购买数量就可以了
         if(item.id ==goodsinfo.id){
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
         }
      })
       //3.如果不存在，则直接将商品添加到购物车
       if (flag == false) {
        state.car.push(goodsinfo);
      }
    },
     //更新vuex中的商品信息的方法
     updateCar(state, info) {
      state.car.forEach((item) => {
        if (item.id == info.id) {
          item.count = info.count;
        }
      })
    },

  },
  getters:{
    //返回购物车中所有商品的个数
    getAllGoodCount(state){
        var count:number = 0
        state.car.forEach((item:any) => {
          count += item.count;
        });
        return count
    },
    getGoodsCount(state){
      var obj:any = {}
      state.car.forEach((item) => {
        obj[item.id] = item.count;
      })
      return obj
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
