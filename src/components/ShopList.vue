<template>
  <div >
    <van-card
    v-for="item in shopList" :key="item.id"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.thumb"
    />
  </div>
</template>
           
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  props: ["shopList"],
  setup(){
      const state = reactive({

      })
      return {...toRefs(state)}
  }
});
</script>
<style lang="scss" scoped>
// .shopList{
//   font-size: 16px;
//   color: rgb(58, 56, 56);
//   height: 20px;
//   margin: 15px 10px 0 10px;
// }
</style>