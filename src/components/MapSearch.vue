<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      top="14vh"
      append-to-body
      :before-close="close"
    >
      <div slot="title" class="el-dialog-title">
        <span class="amap-title">{{title}}</span>
      </div>
      <div class="dialog-content">
        <el-amap class="watch-amap" vid="amapDemo" :zoom="zoom" :center="center">
          <el-amap-marker v-if="position.length" :position="position"></el-amap-marker>
          <el-amap-polygon v-if="path.length" :path="path"></el-amap-polygon>
        </el-amap>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      dialogVisible: false,
      type: '',
      zoom: 16,
      center: [],
      position: [],
      path: [],
    }
  },
  created() {},
  mounted() {},
  methods: {
    open(data, type) {
      this.type = type
      if (type === 'S') {
        this.title = 'sos报警'
      } else if (type === 'O') {
        this.title = '越界报警'
      }
      this.center = [data.longitude, data.latitude]
      this.position = [data.longitude, data.latitude]
      if (data.electronicFence.length) {
        data.electronicFence.forEach((e) => {
          this.path.push([e.longitude, e.latitude])
        })
      }
      this.dialogVisible = true
    },
    // 确定
    define() {},
    // 关闭
    close() {
      this.dialogVisible = false
      this.center = []
      this.position = []
      this.path = []
    },
  },
}
</script>

<style scoped>
.watch-amap {
  width: 100%;
  height: 9.4rem;
}
.amap-title {
  position: relative;
  top: 0.2rem;
}
</style>
