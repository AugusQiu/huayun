<template>
  <el-tabs  style="height:500px;width:80%">
    <el-tab-pane label="创建私有网络">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="setPerIP" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>创建私有网络</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="创建公网IP">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="setPublicIP" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>创建公网IP</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="云主机绑定">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click="" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>云主机绑定</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
    export default {
        name: "smNetNav",
        methods:{
          setPublicIP:function () {
            this.$router.push({
              path:'/setManagment/smNet/setPublicIP'
            })
          },
          setPerIP:function () {
            this.$router.push({
              path:'/setManagment/smNet/setPerIP'
            })
          }
        }
    }
</script>

<style scoped>
  .card{
    text-align: center;
  }
  .grid-content{
    width:100%;
    height:200px;
  }
  .card img{
    width:50%;
    height:55%;
  }
</style>
