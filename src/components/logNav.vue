<template>
  <el-tabs  style="height:500px;width:80%">

    <el-tab-pane label="云主机">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="logHost" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询云主机日志</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="云硬盘">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="logHD" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询云硬盘日志</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="网络">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="logNet" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询网络日志</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="块存储">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="logSt" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询块存储日志</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>

    <el-tab-pane label="负载均衡">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="logBalance" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询负载均衡日志</span>
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
        name: "log",
        methods:{
          logBalance:function () {
            this.$router.push("/perManagment/log/logBalance")
          },
          logHD:function () {
            this.$router.push("/perManagment/log/logHD")
          },
          logHost:function () {
            this.$router.push("/perManagment/log/logHost")
          },
          logNet:function () {
            this.$router.push("/perManagment/log/logNet")
          },
          logSt:function () {
            this.$router.push("/perManagment/log/logSt")
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
