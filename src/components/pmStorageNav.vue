<template>
  <el-tabs  style="height:500px;width:80%">

    <el-tab-pane label="云硬盘">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card  class="card" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>修改云硬盘</span>
              </div>
            </el-card>
          </div>
        </el-col>

        <!--<el-col :span="6">-->
          <!--<div class="grid-content">-->
            <!--<el-card class="card" style="width:100%;height:100%" @click.native="delst" >-->
              <!--<img src="../assets/images/nav3.png" class="image">-->
              <!--<div style="padding: 14px;">-->
                <!--<span>删除云硬盘</span>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</div>-->
        <!--</el-col>-->

        <el-col :span="6">

          <div class="grid-content">
            <el-card class="card" @click.native="pmStoRenew" style="width:100%;height: 100%">
              <img src="../assets/images/nav5.png" class="image">
              <div style="padding: 14px;">
                <span>云硬盘续费</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>

    <el-tab-pane label="云硬盘快照">
      <el-row :gutter="20" >
      <el-col :span="6">
        <div class="grid-content">
          <el-card class="card" @click.native="pmSpRenew" style="width:100%;height: 100%">
            <img src="../assets/images/nav5.png" class="image">
            <div style="padding: 14px;">
              <span>云硬盘快照续费</span>
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
        name: "pmStorageNav",
        methods:{
          delst:function () {
              this.$router.push({
                path:'pmStorage/pmStList'
              })
          },
          pmStoRenew:function () {
            this.$router.push({
              path:'/perManagment/pmStorage/pmStoRenew'
            })
          },
          pmSpRenew:function () {
            this.$router.push({
              path:'/perManagment/pmStorage/pmSpRenew'
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
