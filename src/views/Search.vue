<template>
  <div>
    <TabHead title="搜索"></TabHead>
    <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    <van-list
      @loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <van-cell v-for="item in state.list" :key="item" :title="item" />
    </van-list>
    <MapSearch></MapSearch>
    <VLayer
      v-model="showAlert"
      title="标题信息"
      content="<div style='color:#f57b16;padding:30px;'>这里是内容信息！</div>"
      z-index="2030"
      lockScroll="false"
      xclose
      resize
      dragOut
      :btns="[
        {text: '取消', click: () => showAlert=false},
        {text: '确认', style: 'color:#f90;', click: handleConfirm},
    ]"
    ></VLayer>
  </div>
</template>
           
<script>
import TabHead from "@/components/TabHead.vue";
import MapSearch from "@/components/MapSearch.vue";

// 引入弹窗组件v3layer
import VLayer from "../components/v3layer";

import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  components: {
    TabHead,
    VLayer
  },
  setup() {
    const value = ref("");
    const state = reactive({
      list: [],
      center: [],
      loading: false,
      finished: false
    });
    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          state.list.push(state.list.length + 1);
        }

        // 加载状态结束
        state.loading = false;

        // 数据全部加载完成
        if (state.list.length >= 5) {
          state.finished = true;
        }
      }, 1000);
    };

    return { value, onLoad, state };
  }
});
</script>
<style scoped lang="scss">
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style>