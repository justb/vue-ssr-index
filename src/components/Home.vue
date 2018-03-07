<template>
  <div>
    <div class="header">
      <el-button plain class="login" @click="dialogFormVisible = true">登录</el-button>
    </div>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-carousel trigger="click" height="100vh">
      <el-carousel-item v-for="item in 4" :key="item">
        <img :src="carouselImg" alt="" class="carousel">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true,
    carouselImg: 'https://n1image.hjfile.cn/qa/2018/02/28/5c7130a8f887404a589734d75f1b6a0b.jpg',
    dialogFormVisible: false,
    form: {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    formLabelWidth: '120px'
  }),
  methods: {
    login() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.carousel {
  height: 100%;
}
.header {
  position: fixed;
  z-index: 10;
  width: 100vw;
  padding: 1rem 10vw;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  .login,
  .login:hover,
  .login:focus {
    background-color: rgba($color: #fff, $alpha: 0);
    border-color: #dcdfe6;
    color: #606266;
  }
}
</style>