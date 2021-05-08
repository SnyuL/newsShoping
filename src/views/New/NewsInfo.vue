<template>
  <div>
    <van-skeleton title :row="3" :loading="loading">
      <div class="title">{{ newsinfo.title }}</div>
      <div class="time">{{ timeHandler(newsinfo.add_time) }}</div>
      <div class="content" v-html="newsinfo.content"></div>
    </van-skeleton>
    <Comment :id="id"></Comment>
  </div>
</template>
           
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { Toast } from "vant";
import moment from "moment";
import { NewsInfoUrl } from "@/utils/api/index";
import Comment from "@/components/Comment.vue"
export default defineComponent({
  props: ["id"],
   components: {
    Comment
  },
  setup(props: any, context) {
    //获取动态路由参数
  
    //状态数据
    const state = reactive({
      loading: false,
      id: props.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: {} // 新闻对象
    });
  console.log(state.id);
     if(state.id==1){
       state.newsinfo= {
          title:"化解生育之痛 让成为母亲的那一天更有爱更温暖",
          add_time:"2021-05-01 12:30:50",
          content:"赞比亚旅游与艺术部长 罗纳德·奇托泰拉：据我了解，在中国“五一”假期，有超过2亿中国人前往国内各个景点旅游，这是很了不起的成绩。这是旅游业增长的关键，促进了中国地方经济的发展。由于中国游客的旅游支出是在国内，所以这也促进了中国国内经济的增长。我认为，中国假日经济所取得的成功，对于所有由于新冠肺炎疫情还在关闭边境的国家来说是令人振奋的成功榜样。中国向我们证明了想要旅游业实现可持续增长，发展国内旅游经济是（当前形势下的）最佳途径。中国的成功经验值得我们非洲国家学习。"
      }
     }else if(state.id==2){
       state.newsinfo= {
          title:"赞比亚官员：中国假日经济火热是了不起的成绩",
          add_time:"2021-05-04 09:20:00",
          content:"迎接新生命的到来，是一个家庭最重要的时刻之一。镇痛分娩让产妇变得更舒适，也让生育更有人情温度。2018年6月，中国国内首个“无痛分娩推广公益..."
      }
     }else if(state.id==3){
       state.newsinfo= {
          title:"“五一”期间全国网络零售额达3818亿元 同比增长28.1%",
          add_time:"2021-05-07 09:30:00",
          content:"商务部5月6日公布的数据显示，从4月28日至5月5日，全国网络零售额达3818亿元，同比增长28.1%，线上消费持续火热。其中，实物商品网络零售额3042亿元，同比增长27.1%。"
      }
     }
     else if(state.id==4){
       state.newsinfo= {
          title:"昨天的斗争，中国火力很猛！",
          add_time:"2021-05-06 12:40:00",
          content:"信号也是很清晰的：人不犯我、我不犯人；人若犯我、我必犯人。"
      }
     }
     else if(state.id==5){
       state.newsinfo= {
          title:"清华毕业的85后县委书记，拟获全国表彰",
          add_time:"2021-05-05 15:30:00",
          content:"【南方+5月6日讯】据新加坡《联合早报》5月6日报道，当地时间5月4日，拜登表示，美国将生产大量新冠疫苗，并出口到其他国家，并宣称美国将成为全球“对抗新冠疫情的武器库”。即便拜登政府如今“幡然醒悟”“痛改前非”，其补救措施能起到多大作用，目前还是未知之数。对此，《联合早报》明确指出，对于全球新冠疫苗接种工作而言，美国的“疫苗外交”贡献有限。美国能够做的，充其量就是加快为印度提供生产疫苗原材料，并施舍一点疫苗库存罢了。对于缓解眼下的印度乃至是世界疫情，此举无异于杯水车薪。"
      }
     }
     else if(state.id==6){
       state.newsinfo= {
          title:"敦化市“庆五一”乒乓球双打邀请赛开赛",
          add_time:"2021-05-07 14:30:00",
          content:"为推动全市群众体育发展，提高乒乓球爱好者技艺，增进各单位、俱乐部之间的交流，近日，由敦化市文广旅体局主办，敦化市体育总会承办、乒乓球协会协办的”庆五一“乒乓球双打邀请赛开赛。"
      }
     }
     console.log(state.newsinfo);
     
    // 获取新闻详情数据
    const getNewsInfo = async () => {
      try {
        const { result } = await NewsInfoUrl(state.id);
        state.newsinfo = result.message[0];
        state.loading = false;
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

    // getNewsInfo();
    return { ...toRefs(state), timeHandler };
  }
});
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  padding: 5px;
}
.time {
  text-align: right;
  margin-right: 20px;
  font-size: 14px;
  padding: 5px;
}
.content {
  padding: 5px;
  font-size: 14px;
  color: gray;
}
</style>