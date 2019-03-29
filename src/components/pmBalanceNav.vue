<template>
  <el-tabs  style="height:500px;width:80%">
    <el-tab-pane label="负载均衡器">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="pmBaquery" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询负载均衡器</span>
              </div>
            </el-card>
          </div>
        </el-col>

        <!--<el-col :span="6">-->
          <!--<div class="grid-content">-->
            <!--<el-card class="card" style="width:100%;height:100%"  @click=" "  >-->
              <!--<img src="../assets/images/nav3.png" class="image">-->
              <!--<div style="padding: 14px;">-->
                <!--<span>删除负载均衡器</span>-->
              <!--</div>-->
            <!--</el-card>-->
          <!--</div>-->
        <!--</el-col>-->

        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="pmBaRenew" style="width:100%;height: 100%">
              <img src="../assets/images/nav5.png" class="image">
              <div style="padding: 14px;">
                <span>负载均衡器续费</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click="" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>修改负载均衡器</span>
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
        name: "pmBalanceNav",
        methods:{
          pmBaRenew:function () {
            this.$router.push({
              path:"/perManagment/pmBalance/pmBaRenew"
            })
          },
          pmBaquery:function () {
            this.$router.push({
              path:"/perManagment/pmBalance/pmBaquery"
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
