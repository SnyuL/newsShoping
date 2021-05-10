<template>
  <div class="container">
    
    <van-tabbar v-model="active" active-color="#26a2ff">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/member" icon="friends-o">会员</van-tabbar-item>
      <van-tabbar-item to="/cart">
        <van-action-bar-icon icon="cart-o" text="购物车" :badge="getters.getAllGoodCount" />
      </van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      active: 0
    });
    const { getters } = useStore();
    const goBack = () => {
      router.go(-1);
    };
    return { ...toRefs(state), getters, goBack };
  }
});
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

.container {
  // padding-top: 46px;
  padding-bottom: 50px;
  /*避免PC端网页在页面切换的时候出现的水平滚动条*/
  overflow: hidden;

  .van-tabbar {
    border-top: 1px solid #ccc;
    box-sizing: border-box;
    .van-tabbar-item--active {
      background-color: #eaeaea;
      .van-action-bar-icon {
        color: rgb(38, 162, 255);
        background-color: transparent;
        .van-icon-cart-o {
          color: rgb(38, 162, 255);
        }
      }
    }
  }
}
</style>