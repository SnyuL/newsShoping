<template>
  <div>
    <!--头部区域-->
    <div class="header">
      <h4 class="title">{{ photoinfo.title }}</h4>
      <div class="desc">
        <span class="addtime">{{photoinfo.add_time}}</span>
        <span class="clickcount">点击:{{ photoinfo.click }}次</span>
      </div>
    </div>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <div class="item" v-for="(item, index) in list" :key="item" @click="showThumb(index)">
        <img :src="item" />
      </div>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
  </div>
</template>
           
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { Toast, ImagePreview } from "vant";
import moment from "moment";
export default defineComponent({
  props: ["id"],
  setup(props) {
    const state = reactive({
      id: props.id,
      photoinfo: {
        id: 1,
        title: "风华是一指流沙，苍老是一段年华！",
        add_time: "2020-12-15 15:30:00",
        click: 15,
        content:
          "难以忘记初次见你，你那迷人的眼睛，在我的脑海里，我的真心，就是那么的动人哦！"
      }, // 图片详情
      list: [
          require("../../assets/imgs/photo1.jpeg"),
          require("../../assets/imgs/photo3.jpeg"),
          require("../../assets/imgs/photo5.jpeg"),
          require("../../assets/imgs/photo6.jpeg"),
      ] // 缩略图的数组
    });

    //显示缩略图的方法
    const showThumb = (index: number) => {
      ImagePreview({
        images: state.list,
        startPosition: index
      });
    };
    //处理事件的计算属性(Vue3.0没有过滤器，可以使用计算属性来替代)
    const timeHandler = computed(() => {
      return (dataStr: string) => {
        return moment(dataStr).format("YYYY-MM-DD HH:mm:ss");
      };
    });
    return { ...toRefs(state), timeHandler,showThumb };
  }
});
</script>
<style lang="scss" scoped>
.header {
  padding: 8px;
  .title {
    text-align: center;
    padding-bottom: 10px;
    color: #26a2ff;
  }
  .desc {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
}

.thumbs {
  .item {
    width: 20%;
    margin: 8px;
    display: inline-block;
    img {
      width: 100%;
    }
  }
}

.content {
  font-size: 13px;
  line-height: 30px;
}
</style>