<template>
  <div>
    <van-tabs animated v-model="activeID" @click="tabItemClick">
      <van-tab :name="item.id" :key="item.id" v-for="item in cates" :title="item.title">
        <ul class="photo-list">
          <router-link v-for="item in list" :key="item.id" :to="'/photoInfo/'+item.id">
            <img :src="item.img_url" />
            <div class="info">
              <h1 class="info-title">{{ item.title }}</h1>
              <div class="info-body">{{ item.zhaiyao }}</div>
            </div>
          </router-link>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import { Toast } from "vant";
export default defineComponent({
  setup() {
    const state = reactive({
      cates: [
        { title: "美女图片", id: 1 },
        { title: "风景画", id: 2 },
        { title: "风景画", id: 3 },
        { title: "旅游", id: 4 },
        { title: "苏州", id: 5 },
        { title: "无锡", id: 6 },
        { title: "上海", id: 7 }
      ],
      activeID: 0,
      list: [
        {
          id: 1,
          title: "美女图片",
          zhaiyao: "关关雎鸠，在河之洲，窈窕淑女，君子好球！",
          img_url: require("../../assets/imgs/photo1.jpeg")
        },
        {
          id: 2,
          title: "风景画",
          zhaiyao: "风华是一指流沙，苍老是一段年华！",
          img_url: require("../../assets/imgs/photo2.jpeg")
        },
        {
          id: 3,
          title: "旅游",
          zhaiyao: "蒹葭苍苍，白露为霜，所谓伊人，在水一方！",
          img_url: require("../../assets/imgs/photo9.jpeg")
        },
        {
          id: 4,
          title: "苏州",
          zhaiyao: "春花秋月何时了，往事知多少！",
          img_url: require("../../assets/imgs/photo8.jpeg")
        },
        {
          id: 5,
          title: "无锡",
          zhaiyao: "醉翁之意不在酒，在乎山水之间也！",
          img_url: require("../../assets/imgs/photo5.jpeg")
        },
        {
          id: 6,
          title: "上海",
          zhaiyao: "听不到的是回答，你永远叫不醒一个装睡的人！",
          img_url: require("../../assets/imgs/photo6.jpeg")
        }
      ]
    });

    const tabItemClick = id => {
      console.log(state.activeID);
      state.activeID = id;
      if (state.activeID == 1) {
        state.list = [
          {
            id: 1,
            title: "美女图片",
            zhaiyao: "关关雎鸠，在河之洲，窈窕淑女，君子好球！",
            img_url: require("../../assets/imgs/photo1.jpeg")
          },
          {
            id: 2,
            title: "风景画",
            zhaiyao: "风华是一指流沙，苍老是一段年华！",
            img_url: require("../../assets/imgs/photo2.jpeg")
          }
        ];
      } else if (state.activeID == 2) {
        state.list = [
          {
            id: 1,
            title: "旅游",
            zhaiyao: "蒹葭苍苍，白露为霜，所谓伊人，在水一方！",
            img_url: require("../../assets/imgs/photo9.jpeg")
          },
          {
            id: 2,
            title: "苏州",
            zhaiyao: "春花秋月何时了，往事知多少！",
            img_url: require("../../assets/imgs/photo8.jpeg")
          },
          {
            id: 3,
            title: "无锡",
            zhaiyao: "醉翁之意不在酒，在乎山水之间也！",
            img_url: require("../../assets/imgs/photo5.jpeg")
          },
          {
            id: 4,
            title: "上海",
            zhaiyao: "听不到的是回答，你永远叫不醒一个装睡的人！",
            img_url: require("../../assets/imgs/photo6.jpeg")
          }
        ];
      } else if (state.activeID == 3) {
        state.list = [
          {
            id: 1,
            title: "旅游",
            zhaiyao: "蒹葭苍苍，白露为霜，所谓伊人，在水一方！",
            img_url: require("../../assets/imgs/photo6.jpeg")
          },
          {
            id: 2,
            title: "苏州",
            zhaiyao: "春花秋月何时了，往事知多少！",
            img_url: require("../../assets/imgs/photo5.jpeg")
          },
          {
            id: 3,
            title: "无锡",
            zhaiyao: "醉翁之意不在酒，在乎山水之间也！",
            img_url: require("../../assets/imgs/photo3.jpeg")
          }
        ];
      } else if (state.activeID == 4) {
        state.list = [
          {
            id: 1,
            title: "旅游",
            zhaiyao: "蒹葭苍苍，白露为霜，所谓伊人，在水一方！",
            img_url: require("../../assets/imgs/photo9.jpeg")
          },
        ];
      } else if (state.activeID ==5) {
        state.list = [
           {
          id: 1,
          title: "婀娜多姿",
          zhaiyao: "关关雎鸠，在河之洲，窈窕淑女，君子好球！",
          img_url: require("../../assets/imgs/photo4.jpeg")
        },
        {
          id: 2,
          title: "风景画",
          zhaiyao: "风华是一指流沙，苍老是一段年华！",
          img_url: require("../../assets/imgs/photo3.jpeg")
        },
        {
          id: 3,
          title: "旅游",
          zhaiyao: "蒹葭苍苍，白露为霜，所谓伊人，在水一方！",
          img_url: require("../../assets/imgs/photo6.jpeg")
        },
        {
          id: 4,
          title: "苏州",
          zhaiyao: "春花秋月何时了，往事知多少！",
          img_url: require("../../assets/imgs/photo8.jpeg")
        },
        {
          id: 5,
          title: "无锡",
          zhaiyao: "醉翁之意不在酒，在乎山水之间也！",
          img_url: require("../../assets/imgs/photo5.jpeg")
        },
        {
          id: 6,
          title: "上海",
          zhaiyao: "听不到的是回答，你永远叫不醒一个装睡的人！",
          img_url: require("../../assets/imgs/photo1.jpeg")
        }
        ];
      }else if (state.activeID ==6) {
        state.list = [
           {
          id: 1,
          title: "婀娜多姿",
          zhaiyao: "关关雎鸠，在河之洲，窈窕淑女，君子好球！",
          img_url: require("../../assets/imgs/photo5.jpeg")
        },
        {
          id: 2,
          title: "风儿",
          zhaiyao: "风华是一指流沙，苍老是一段年华！",
          img_url: require("../../assets/imgs/photo6.jpeg")
        },
        {
          id: 3,
          title: "蒹葭",
          zhaiyao: "蒹葭苍苍，白露为霜，所谓伊人，在水一方！",
          img_url: require("../../assets/imgs/photo7.jpeg")
        },
        {
          id: 4,
          title: "春风",
          zhaiyao: "春花秋月何时了，往事知多少！",
          img_url: require("../../assets/imgs/photo8.jpeg")
        },
        {
          id: 5,
          title: "到此一游",
          zhaiyao: "醉翁之意不在酒，在乎山水之间也！",
          img_url: require("../../assets/imgs/photo9.jpeg")
        },
        ];
      }
    };

    return { ...toRefs(state), tabItemClick };
  }
});
</script>

<style lang="scss">
.van-tab__pane {
  padding: 16px;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;

  a {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    display: block;

    img {
      width: 100%;
      vertical-align: middle;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      overflow: auto;
      max-height: 100px;

      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>