<template>
  <el-tabs  style="height:500px;width:80%">

    <el-tab-pane label="云主机">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="pmMonHost" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>监控主机</span>
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
            <el-card class="card" @click.native="pmMonHD" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>监控云硬盘</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="路由器">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="pmMonRouter" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>监控路由器</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <!--<el-tab-pane label="负载均衡">-->
      <!--<el-row :gutter="20" >-->
        <!--<el-col :span="6">-->
          <!--<div class="grid-content">-->
            <!--<el-card class="card" @click="" style="width:100%;height: 100%">-->
              <!--<img src="../assets/images/nav1.png" class="image">-->
              <!--<div style="padding: 14px;">-->
                <!--<span>监控负载均衡</span>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</el-tab-pane>-->
  </el-tabs>
</template>

<script>
    export default {
        name: "pmMonitorNav",
       methods:{
         pmMonHost:function () {
           this.$router.push({
             path:'/perManagment/pmMonitor/pmMonHost'
           })
         },
         pmMonRouter:function () {
           this.$router.push({
             path:'/perManagment/pmMonitor/pmMonRouter'
           })
         },
         pmMonHD:function () {
           this.$router.push({
             path:'/perManagment/pmMonitor/pmMonHD'
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
