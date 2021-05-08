<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="item in itemList"
        :key="item.id"
        :icon="item.url"
        :text="item.title"
        :to="item.to"
      />
    </van-grid>
  </div>
</template>
           
<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
import { Toast} from "vant";
import { getLunbotu } from "@/utils/api/index";
export default {
  setup() {
    //状态数据
    const state = reactive({
      //轮播
      lunbotuList: [
        {
          id: 1,
          img: require("../assets/imgs/photo1.jpeg")
        },
        {
          id: 2,
          img: require("../assets/imgs/photo2.jpeg")
        },
        {
          id: 3,
          img: require("../assets/imgs/photo3.jpeg")
        },
        {
          id: 4,
          img: require("../assets/imgs/photo4.jpeg")
        }
      ],
      //九宫格
      itemList: [
        {
          id: 1,
          url: require("../assets/imgs/zixun.png"),
          title: "新闻资讯",
          to: "/NewsList"
        },
        {
          id: 2,
          url: require("../assets/imgs/fenxiang.png"),
          title: "图片分享",
          to: "/photoList"
        },
        {
          id: 3,
          url: require("../assets/imgs/gouwu.png"),
          title: "商品购买",
          to: "/goodList"
        },
        {
          id: 4,
          url: require("../assets/imgs/liuyan.png"),
          title: "留言反馈",
          to: "/"
        },
        {
          id: 5,
          url: require("../assets/imgs/shipin.png"),
          title: "视频专区",
          to: "/"
        },
        {
          id: 6,
          url: require("../assets/imgs/lianxi.png"),
          title: "联系我们",
          to: "/"
        }
      ]
    });

    //获取轮播图数据
    const getLunbotu = async () => {
      try {
        const { result } = await getLunbotu();
        state.lunbotuList = result.message;
        Toast('加载成功')
      } catch (err) {
        console.log(err);
        Toast('加载失败')
      }
    };
    //请求轮播图数据
    getLunbotu();

    return { ...toRefs(state) };
  }
};
</script>
<style lang="scss">
.my-swipe {
  height: 200px;
  .van-swipe-item {
    color: #fff;
    text-align: center;
    background-color: #39a9ed;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.van-grid-item {
  .van-grid-item__icon {
    font-size: 56px;
  }
}
</style>