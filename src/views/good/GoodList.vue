<template>
  <div>
    <TabHead title="商品列表"></TabHead>
    <div class="goods-list">
      <router-link
        class="goods-item"
        v-for="item in goodslist"
        :key="item.id"
        :to="'/goodInfo/'+item.id"
        tag="div"
      >
        <img :src="item.img_url" alt />
        <h1 class="title">{{ item.title }}</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥{{ item.sell_price }}</span>
            <span class="old">￥{{ item.market_price }}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{ item.stock_quantity }}件</span>
          </p>
        </div>
      </router-link>
      <van-button type="info" block @click="getMore">加载更多</van-button>
    </div>
  </div>
</template>
           
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import TabHead from "@/components/TabHead.vue";
import { Toast } from "vant";
type IState = {
  pageindex: number;
  goodslist: any[];
  goodslist2: any[];
};
export default defineComponent({
  components: {
    TabHead
  },
  setup(props: any, context) {
    const initalState: IState = {
      pageindex: 1, // 分页的页数
      goodslist: [
        {
          id: 1,
          img_url: require("../../assets/imgs/xiaomi.jpeg"),
          title: "小米11,256g三网通",
          sell_price: "6898",
          market_price: "6999",
          stock_quantity: 999
        },
        {
          id: 2,
          img_url: require("../../assets/imgs/pingguo.jpeg"),
          title: "苹果12,128g三网通",
          sell_price: "6299",
          market_price: "6899",
          stock_quantity: 888
        },
        {
          id: 3,
          img_url: require("../../assets/imgs/jianeng.jpeg"),
          title: "佳能s,支持蓝牙，3000万像素",
          sell_price: "5689",
          market_price: "5999",
          stock_quantity: 11
        }
      ], // 存放商品列表的数组
      goodslist2: [
        {
          id: 4,
          img_url: require("../../assets/imgs/photo4.jpeg"),
          title: "佳能s5,支持蓝牙",
          sell_price: "4489",
          market_price: "4999",
          stock_quantity: 29
        }
      ]
    };

    const state = reactive(initalState);

    const getMore = () => {
      state.pageindex++;
      state.goodslist = [...state.goodslist, ...state.goodslist2];
    };

    return { ...toRefs(state), getMore };
  }
});
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;

    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>