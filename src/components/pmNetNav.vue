<template>
  <el-tabs  style="height:500px;width:80%">

    <el-tab-pane label="私有网络">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="pmPriquery" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询私有网络</span>
              </div>
            </el-card>
          </div>
        </el-col>

        <!--<el-col :span="6">-->
          <!--<div class="grid-content">-->
            <!--<el-card class="card" @click="" style="width:100%;height:100%" >-->
              <!--<img src="../assets/images/nav3.png" class="image">-->
              <!--<div style="padding: 14px;">-->
                <!--<span>删除私有网络</span>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</div>-->
        <!--</el-col>-->

        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="pmPriRenew" style="width:100%;height: 100%">
              <img src="../assets/images/nav5.png" class="image">
              <div style="padding: 14px;">
                <span>私有网络续费</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="公网IP">
      <el-col :span="6">
        <div class="grid-content">
          <el-card class="card" @click.native="pmPubRenew" style="width:100%;height: 100%">
            <img src="../assets/images/nav5.png" class="image">
            <div style="padding: 14px;">
              <span>公网IP续费</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-tab-pane>
    <!--<el-tab-pane label="路由器">-->

    <!--</el-tab-pane>-->
    <!--<el-tab-pane label="防火墙">-->

    <!--</el-tab-pane>-->
  </el-tabs>
</template>

<script>
    export default {
        name: "pmNetNav",
        methods:{
          pmPubRenew:function () {
            this.$router.push({
              path:'/perManagment/pmNet/pmPubRenew'
            })
          },
          pmPriquery:function () {
            this.$router.push({
              path:'/perManagment/pmNet/pmPriquery'
            })
          },
          pmPriRenew:function () {
            this.$router.push({
              path:'/perManagment/pmNet/pmPriRenew'
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
