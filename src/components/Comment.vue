<template>
  <div>
    <van-form @submit="onSubmit">
      <h3>发表评论</h3>
      <van-field
        v-model="content"
        placeholder="请输入要BB的评论"
        type="textarea"
        rows="4"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">发表评论</van-button>
      </div>
    </van-form>

    <van-list
      @loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item,index) in list" :key="item">
        <template #title>
          <div class="cmt-title">
            第{{index}}楼&nbsp;&nbsp;张三&nbsp;&nbsp;时间2017-10-15
          </div>
        </template>
        <template #label>
          <div class="cmt-body">此用户很懒，嘛都没说</div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
           
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { Toast } from "vant";
type IState = {
  content: string;
  list: any[];
  loading: boolean;
  finished: boolean;
};
export default defineComponent({
  props: ["id"],
  setup(props: any, context) {
    const initalState: IState = {
      content: "",
      list: [],
      loading: false,
      finished: false,
    };
    //状态数据
    const state = reactive(initalState);

    const onSubmit = () => {};
    const onLoad = () => {
      state.loading = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1);
        }
        state.loading = false;
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };
    return { ...toRefs(state),onLoad,onSubmit };
  },
});
</script>
<style lang="scss" scoped>
.van-form {
  h3 {
    padding: 16px;
  }
  .van-field__body {
    border: 1px solid #ccc;
  }
}
</style>