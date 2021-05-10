<template>
       <van-nav-bar :title="title" fixed>
      <template #left>
        <van-icon name="arrow-left" size="18" @click="goBack" v-if="title!='我的首页'"/>
        <van-icon name="user-circle-o" size="24"  v-if="title=='我的首页'"/>
      </template>
    </van-nav-bar>
</template>     
<script lang="ts">
import { defineComponent, ref, reactive, toRefs} from "vue"
import {useRouter} from "vue-router"
export default defineComponent({
     props: ["title"],
    setup(){
        const router = useRouter()
        const goBack = ()=>{
            router.go(-1)
        }
        return {goBack}
    }
             
})
</script>
<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
 .van-nav-bar {
    background-color: skyblue !important;
   /deep/ .van-nav-bar__title {
      color: white !important;
    }
  /deep/  .van-nav-bar__left {
      .van-icon {
        color: white !important;
      }
    }
  }
</style>