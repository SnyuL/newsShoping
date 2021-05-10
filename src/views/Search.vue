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
  </div>
</template>
           
<script>
import TabHead from "@/components/TabHead.vue";
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  components: {
    TabHead
  },
  setup() {
    const value = ref("");
    const state = reactive({
      list: [],
      loading: false,
      finished: false
    });
        const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          state.list.push(state.list.length + 1);
        }

        // 加载状态结束
        state.loading = false;

        // 数据全部加载完成
        if (state.list.length >= 20) {
          state.finished = true;
        }
      }, 1000);
    };


    return { value,onLoad,state };
  }
});
</script>
<style>
</style>