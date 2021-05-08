<template>
  <div>
    <van-cell-group>
    <van-cell v-for="item in goodslist" :key="item.id">
        <template #icon>
            <div class="icon">
                <van-checkbox v-model="checked"></van-checkbox>
                <van-image
                           width="5rem"
                           height="3rem"
                           fit="contain"
                           :src="item.thumb_path"
                           />
            </div>
        </template>
        <template #title
                  ><div class="title">{{ item.title }}</div></template
            >
        <template #label>
            <div class="label">
                <span class="price">￥{{ item.sell_price }}</span>
                <van-stepper
                             v-model="getters.getGoodsCount[item.id]"
                             min="1"
                             button-size="24px"
                             disable-input
                             @change="buynumChanged($event, item.id)"
                             />
                <van-button type="info" size="small">删除</van-button>
            </div>
        </template>
    </van-cell>
</van-cell-group>

    <div class="jiesuan">
      <div class="left">
        <p>总计1000</p>
        <p>
          已勾选
          <span class="red">10</span> 件，总价
          <span class="red">￥10000</span>
        </p>
      </div>
      <van-button type="danger">去结算</van-button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.van-cell {
  padding: 10px;
  .icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-weight: bold;
  }
  .label {
    .van-stepper {
      display: inline-block;
      vertical-align: middle;
      margin-right: 3px;
    }
    .price {
      font-size: 14px;
      color: red;
      font-weight: bold;
      margin-right: 3px;
    }
  }
}

.jiesuan {
  padding: 16px;
  color: #515a6e;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  .red {
    color: red;
    font-weight: bold;
  }
}
</style>



<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { Toast } from "vant";
import { useStore } from "vuex";
export default defineComponent({
  setup(props) {
    const state = reactive({
      checked: true,
      buynum: 1,
    goodslist: [
        {
            id:1,
            thumb_path:require("../assets/imgs/xiaomi.jpeg"),
            title:"小米11 Pro 轻装上阵，256g三网通5g",
            sell_price:4699
        },
         {
            id:2,
            thumb_path:require("../assets/imgs/pingguo.jpeg"),
            title:"小米11 Pro 轻装上阵，256g三网通5g",
            sell_price:4699
        },
         {
            id:3,
            thumb_path:require("../assets/imgs/jianeng.jpeg"),
            title:"小米11 Pro 轻装上阵，256g三网通5g",
            sell_price:4699
        }
    ],
    });
    const { state: store, getters, commit } = useStore();
     const buynumChanged = (buynum: number, id: number) => {
      commit("updateCar", {
        id,
        count: buynum,
      });
    };

    return { ...toRefs(state), getters,buynumChanged  };
  },
});
</script>