<template>
  <div class="news">
    <van-list @loading="loading" :finished="finished" finished-text="没有更多了" @load="getNewsList">
      <van-cell v-for="item in list" :to="'/NewsInfo/'+item.id" :key="item.id" :icon="item.img_url">
        <template #title>
          <h4 class="title">{{item.title}}</h4>
        </template>
        <template #label>
          <span class="addtime">发表时间：{{ item.add_time }}</span>
          <span class="clickcount">点击：{{item.click}}次</span>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
           
<script lang='ts'>
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { NewslistUrl } from "../../utils/api/index";
import { Toast } from "vant";
import moment from "moment";
export default defineComponent({
  setup() {
    const state = reactive({
      list: [
        {
          id: 1,
          title: "这是一则新闻咨询1",
          add_time: "2020/10/01 18:16:20",
          click: 5,
          img_url: require("../../assets/imgs/photo5.jpeg")
        },
        {
          id: 2,
          title: "这是一则新闻咨询2",
          add_time: "2019/8/15 18:16:20",
          click: 34,
          img_url: require("../../assets/imgs/photo6.jpeg")
        },
        {
          id: 3,
          title: "这是一则新闻咨询3",
          add_time: "2017/2/11 09:13:00",
          click: 55,
          img_url: require("../../assets/imgs/photo7.jpeg")
        },
        {
          id: 4,
          title: "这是一则新闻咨询5",
          add_time: "2015/1/15 05:10:00",
          click: 199,
          img_url: require("../../assets/imgs/photo8.jpeg")
        },
        {
          id: 5,
          title: "这是一则新闻咨询6",
          add_time: "2021/5/01 12:00:00",
          click: 20,
          img_url: require("../../assets/imgs/photo9.jpeg")
        },
        {
          id: 6,
          title: "这是一则新闻咨询9",
          add_time: "2021/4/05 15:25:00",
          click: 100,
          img_url: require("../../assets/imgs/photo3.jpeg")
        }
      ],
      //加载状态
      loading: false,
      //数据是否已经加载完毕
      finished: false
    });
    // const getNewsList = () => {
    //   axios.get("/api/getnewslist").then(({ data }) => {
    //     state.loading = false;
    //     if (data.status === 0) {
    //       // 成功了
    //       state.list = data.message;
    //       //   console.log(this.list);
    //       state.finished = true;
    //     } else {
    //       Toast.fail("请求数据失败");
    //     }
    //   });
    // };

    const getNewsList = async () => {
      try {
        const { data } = await NewslistUrl();
        state.list = data.message;
        Toast("加载成功");
      } catch (err) {
        console.log(err);
        Toast("加载失败");
      }
    };
    //处理事件的计算属性(Vue3.0没有过滤器，可以使用计算属性来替代)
    const timeHandler = computed(() => {
      return (dataStr: string) => {
        return moment(dataStr).format("YYYY-MM-DD HH:mm:ss");
      };
    });
    return {
      ...toRefs(state),
      // getNewsList,
      timeHandler
    };
  }
});
</script>
<style lang='scss'>
.news {
  .van-list {
    .van-cell {
      /*修改图片的大小*/
      .van-icon {
        font-size: 36px;
        /*通过margin微调让图片居中*/
        margin-top: 5px;
      }
      .van-cell__title {
        /*这边给一个小于...的宽度之后就可以了*/
        width: 80%;
        /*超出一行显示省略号*/
        .title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .van-cell__label {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>