<template>
  <div class="weather">
    <div id="he-plugin-simple"></div>
  </div>
</template>         
<script>
window.WIDGET = {
  CONFIG: {
    modules: "01234",
    background: "5",
    tmpColor: "FFFFFF",
    tmpSize: "5",
    cityColor: "FFFFFF",
    citySize: "5",
    aqiColor: "FFFFFF",
    aqiSize: "5",
    weatherIconSize: "5",
    alertIconSize: "18",
    padding: "5px 5px 5px 5px",
    shadow: "1",
    language: "auto",
    borderRadius: "5",
    fixed: "false",
    vertical: "center",
    horizontal: "center",
    key: "1de8c538fdb04bf0bdd64b283d8dcf69"
  }
};
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";
    // import {useRouter} from "vue-router"
export default defineComponent({
    //vue2.x写法
  //   mounted() {
  //     this.$nextTick(() => {
  //       this.load()
  //     })
  //   },
  //   methods: {
  //     load() {
  //       const s = document.createElement('script')
  //       s.type = 'text/javascript'
  //       s.src =
  //         'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0'
  //       document.body.appendChild(s)
  //     },
  //   },

  //vue3.0的写法
  setup() {
    // const router = useRouter()
    onMounted(() => {
        weather()
    });
    const weather = () => {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0";
      document.body.appendChild(s);
    };
    //   const goWeather = ()=>{
    //   console.log(window.location);
    //   window.location.href("//widget-page.qweather.net/h5/index.html?md=0123456&bg=1&lc=accu&key=fd38773a9810420ea2b5569626509bd0&demo=true&v=_1620800220404")
    // }

    // return {goWeather};
  }
});
</script>
<style lang="scss" scoped>
.weather {
  width: 60px !important;
  height: 100%;
}
</style>