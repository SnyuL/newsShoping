<template>
  <div class="home">
    <TabHead title="我的首页"></TabHead>
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
        <div class="shopList">商品列表</div>
      <shopList :shopList="shopList"></shopList>
          <Weather class="weather"></Weather>
  </div>
</template>
           
<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
import { Toast } from "vant";
import TabHead from "@/components/TabHead.vue";
import shopList from "@/components/ShopList.vue";
import Weather from "@/components/Weather.vue";
import { getLunbotu } from "@/utils/api/index";
export default defineComponent({
  components: {
    TabHead,
    shopList,
    Weather
  },
  props:["shopList"],
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
      ],
      shopList:[
        {
          id:1,
          price:"3000.00",
          desc:"超强的待机能力和使用寿命，完美的贴合现代人的使用标准",
          title:"红米K40",
          thumb:require("../assets/imgs/photo6.jpeg")
        },
          {
          id:2,
          price:"4999.00",
          desc:"欢迎来到5g时代的今天，使用小米11有更高的刷新率和2k的分辨率，可以拍月亮哦",
          title:"小米11",
          thumb:require("../assets/imgs/xiaomi.jpeg")
        },
          {
          id:3,
          price:"4699.00",
          desc:"作为佳能最受女生喜欢的单反，虽然是入门级的水准，但是在摆设的效果和美观上丝毫不逊色其他机型",
          title:"佳能 Es300",
          thumb:require("../assets/imgs/jianeng.jpeg")
        },
          {
          id:4,
          price:"6999.00",
          desc:"苹果今年的旗舰机，依然保持着国内较高的出货率，90hz的刷新以及5G的网络速度，让这款手机在旗舰中成为佼佼者",
          title:"苹果12",
          thumb:require("../assets/imgs/pingguo.jpeg")
        },
      ]
    });

    //获取轮播图数据
    const getLunbotu = async () => {
      try {
        const { result } = await getLunbotu();
        state.lunbotuList = result.message;
        Toast("加载成功");
      } catch (err) {
        console.log(err);
        Toast("加载失败");
      }
    };
    //请求轮播图数据
    getLunbotu();

    return { ...toRefs(state) };
  }
});
</script>
<style lang="scss" scoped>
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
.shopList{
  font-size: 16px;
  color: rgb(58, 56, 56);
  height: 20px;
  margin: 15px 10px 0 10px;
}
.weather{
  z-index: 2;
  position: fixed;
  top: 8px;
  width: 80px;
  height: 40px;
  right: 50px;
}
</style>