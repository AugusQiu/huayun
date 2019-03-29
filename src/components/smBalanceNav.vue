<template>
  <el-tabs  style="height:500px;width:80%">
    <el-tab-pane label="创建负载均衡器">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="setBalance" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>创建负载均衡器</span>
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
        name: "smBalanceNav",
        methods:{
          setBalance:function () {
            this.$router.push({
              path:'/setManagment/smBalance/setBalance'
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
