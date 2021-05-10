<template>
  <div>
    <TabHead title="商品详情"></TabHead>

    <div class="box">
      <p class="title">{{ info.title }}</p>
      <p class="content" v-html="info.content"></p>
    </div>
  </div>
</template>
           
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import TabHead from "../../components/TabHead.vue"
export default defineComponent({
  components:{
TabHead
  },
  props: ["id"],
  setup(props: any, context) {
    const state = reactive({
      // 图文数据
      info: {
        title: "小米11 pro  256g三网通5g",
        content:
          "小米11采用6.81英寸四曲面AMOLED屏幕，分辨率为3200x1440，支持120Hz刷新率和480Hz触控采样率。这块屏幕激发亮度900nit，峰值亮度能够达到1500nit，此外它还支持原色屏和10bit色深。小米11首发搭载骁龙888处理器，骁龙888采用5nm工艺制程，相比上代骁龙865处理器，CPU整体性能提升25%，功耗降低25%。GPU性能提升35%，功耗降低20%。小米11还采用了满血LPDDR5内存，数据传输速率最高能够达到6400Mbps。"
      },
      id: props.id
    });
    return { ...toRefs(state) };
  }
});
</script>
<style lang="scss" scoped>
.box {
  padding: 10px;
  .title {
    padding: 10px;
    font-size: 16px;
    color: #226aff;
    font-weight: bold;
    text-align: center;
  }
  .content {
    font-size: 13px;
    color: gray;
    /*因为.content下面的元素不是当前组件拥有的，所以需要使用穿透来设置样式*/
    /deep/ p {
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
  }
}
</style>