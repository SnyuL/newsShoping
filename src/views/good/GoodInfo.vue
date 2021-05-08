<template>
  <div>
    <!--1.图片轮播-->
    <div class="box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in goodImages" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!--2.商品购买-->
    <div class="box">
      <p class="title">{{ goodsinfo.title }}</p>
      <p class="price">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-show="ballFlag" ref="ballRef"></div>
        </transition>市场价：
        <del>{{ goodsinfo.market_price }}</del>
        销售价：
        <span class="now_price">{{ goodsinfo.sell_price }}</span>
      </p>
      <p class="buynum">
        购买数量：
        <van-stepper v-model="buynum" min="1" :max="goodsinfo.stock_quantity" disabled-input />
      </p>

      <van-action-bar>
        <van-action-bar-button type="warning" text="加入购物车" @click="addToCart" />
        <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
      </van-action-bar>
    </div>

    <!--3.商品介绍-->
    <div class="box">
      <p class="title">商品参数</p>
      <div class="desc">
        <p>商品货号：{{ goodsinfo.goods_no }}</p>
        <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
        <p>上架时间：{{ goodsinfo.add_time}}</p>
      </div>
      <van-button type="primary" block @click="goDesc(id)">图文介绍</van-button>
    </div>
  </div>
</template>
           
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  props: ["id"],
  setup(props: any, context) {
    const router = useRouter();
    const state = reactive({
      buynum: 1,
      goodImages: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      id: props.id,
      goodsinfo: {
        title: "华为（HUAWEI）Mate40 Pro 256G双5G",
        market_price: "￥5699",
        sell_price: "￥5299",
        stock_quantity: 60,
        goods_no: "SD9102356032",
        add_time: "2020-04-20 00:51:03"
      },
      ballFlag: false,
      animFinished: true
    });
    const ballRef = ref();
    const { commit } = useStore();
    const addToCart = () => {
      console.log("添加购物车");
      if (state.animFinished) {
        state.animFinished = false;
      }
      state.ballFlag = !state.ballFlag;
      // 拼接出一个要保存到store中car数组里的商品信息对象
      var goodsinfo= {
        id: state.id,
        count: state.buynum,
        price: state.goodsinfo.sell_price,
        selected: true
      };
      // 调用store中的mutations来将商品加入购物车
      commit("addToCar", goodsinfo);
    };
    const goBuy = () => {
      console.log("立即购买");
    };
    const goDesc = (id: number) => {
      router.push(`/goodDesc/${id}`);
    };
    const beforeEnter = (el: any) => {
      el.style.transform = "translate(0, 0)";
      console.log("beforeEnter");
    };
    const enter = (el: any, done: any) => {
      console.log("enter", ballRef);
      el.offsetWidth;
      // 获取小球的在页面中的位置
      const ballPosition = ballRef.value.getBoundingClientRect();
      console.log(ballPosition, "1111111111");
      // 获取徽标在页面中的位置
      const badgePosition = document
        .querySelector(".van-badge")!
        .getBoundingClientRect();
      // 计算位置偏差
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      // 开始动画
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 1s ease";
      el.addEventListener("transitionend", done);
    };
    const afterEnter = (el: any) => {
      console.log("afterEnter");
      el.style.transition = null;
      state.ballFlag = !state.ballFlag;
      state.animFinished = true
    };
    return {
      ...toRefs(state),
      addToCart,
      goBuy,
      goDesc,
      afterEnter,
      enter,
      ballRef,
      beforeEnter
    };
  }
});
</script>
<style lang="scss" scoped>
.box {
  /*设定panle的边框线*/
  margin: 5px;
  border: 1px solid #eee;
  border-radius: 5px;

  /*设定轮播图样式*/
  .van-swipe {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  /*设定面板头样式*/
  .title {
    padding: 16px;
    font-size: 16px;
  }

  /*价格和选择数量的步进器*/
  .price {
    padding-left: 16px;
    font-size: 14px;
    color: #8f8f94;
    position: relative;
    .ball {
      width: 20px;
      height: 20px;
      background-color: red;
      z-index: 100;
      border-radius: 50%;
      position: absolute;
      left: 110px;
      top: 32px;
    }
    .now_price {
      color: red;
      font-weight: bold;
    }
  }
  .buynum {
    padding-left: 16px;
    font-size: 14px;
    color: #8f8f94;
    margin-top: 10px;
    margin-bottom: 10px;
    .van-stepper {
      display: inline-block;
      vertical-align: middle;
    }
  }

  /*让立即购买不处于页面底部*/
  .van-action-bar {
    position: static;
  }
  /*商品描述*/
  .desc {
    padding-left: 16px;
    font-size: 14px;
    color: #8f8f94;
    margin-top: 10px;
    margin-bottom: 10px;
    p {
      margin-bottom: 10px;
    }
  }
}
</style>