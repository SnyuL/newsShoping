<template>
  <div>
    <TabHead title="会员"></TabHead>
    <v-chart class="chart" :option="option" />
    <v-chart class="chart2" :option="option2" />
    <div  class='demo'>
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>
  </div>
</template>
<script>
import VideoPlayer from 'vue-video-player'
import TabHead from "@/components/TabHead.vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent, reactive, toRefs } from "vue";

use([
  CanvasRenderer,
  PieChart,
  GridComponent,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);
export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
    TabHead,
    VideoPlayer
  },
  // provide: {
  //   [THEME_KEY]: "dark"
  // },
  setup: () => {
    const state = reactive({
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [
          {
            //类型
            type: "video/mp4",
            //url地址
            src: ""
          }
        ],
        //你的封面地址
        poster: "",
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true
        }
      }
    });
    const option = ref({
      title: {
        text: "手机排行榜",
        left: "left",
        textStyle: {
          color: "skyblue",
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: "16"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "right",
        align: "right",
        itemHeight: "14",
        itemWidth: "14",
        data: ["苹果", "小米", "华为", "三星", "vivo", "oppo","一加"]
      },

      series: [
        {
          name: "手机排行榜",
          type: "pie",
          radius: "52%",
          center: ["50%", "40%"],
          label: {
            color: "skyblue",
            fontSize: "10"
          },
          data: [
            { value: 1335, name: "苹果" },
            { value: 800, name: "小米" },
            { value: 900, name: "华为" },
            { value: 135, name: "三星" },
            { value: 548, name: "vivo" },
            { value: 648, name: "oppo" },
            { value: 348, name: "一加" }
          ],
          emphasis: {
            scale: "true",
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
    const option2 = ref({
      title: {
        text: "手机销量榜",
        left: "center",
        textStyle: {
          color: "skyblue",
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: "16"
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["三星", "一加", "vivo", "小米", "苹果", "华为", "oppo"],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          legendHoverLink: true,
          name: "购买量",
          type: "bar",
          barWidth: "60%",
          data: [15, 52, 200, 334, 400, 330, 220],
          color: "skyblue",
          showBackground: true,
          backgroundStyle: {
            color: "#ccc",
            borderColor: "red"
          },
          label: {
            fontStyle: "italic"
          }
        }
      ]
    });

    return { option, option2 ,...toRefs(state)};
  }
});
</script>
<style lang="scss" scoped>
.chart {
  height: 250px;
  background-color: rgb(99, 98, 98);
}
.chart2 {
  margin-top: 10px;
  height: 250px;
  background-color: rgb(155, 151, 151);
}
 .demo{
    display: inline-block;
    width: 600px;
    height: 338px;
    text-align: center;
    line-height: 100px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }
 
  .demo:hover{
    display: block;
  }
</style>