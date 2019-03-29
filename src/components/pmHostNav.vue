<template>
  <el-tabs  style="height:500px;width:80%">

    <el-tab-pane label="云主机相关">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
           <el-card class="card" @click.native="pmHostAbout" style="width:100%;height: 100%">
             <img src="../assets/images/nav1.png" class="image">
             <div style="padding: 14px;">
            <span>查询云主机</span>
            </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
      <el-card class="card" @click.native="pmSetHostPas" style="width:100%;height: 100%">
      <img src="../assets/images/nav4.png" class="image">
      <div style="padding: 14px;">
        <span>云主机修改密码</span>
      </div>
      </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content" >
            <el-card class="card" @click.native="pmHostRenew" style="width:100%;height:100%">
              <img src="../assets/images/nav5.png" class="image">
              <div style="padding: 14px;">
                <span>云主机续费</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 30px;">
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="云快照相关">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="pmSpAbout" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询快照信息</span>
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click="" style="width:100%;height:100%" >
              <img src="../assets/images/nav2.png" class="image">
              <div style="padding: 14px;">
                <span>云主机快照还原</span>
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click="" style="width:100%;height: 100%">
              <img src="../assets/images/nav3.png" class="image">
              <div style="padding: 14px;">
                <span>删除云主机快照</span>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click="" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>修改云主机快照</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="镜像相关">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="pmImage" style="width:100%;height: 100%">
              <img src="../assets/images/nav1.png" class="image">
              <div style="padding: 14px;">
                <span>查询镜像</span>
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
        name: "pmNav",
      methods:{
        pmHostRenew:function () {
           this.$router.push({
            path:'/perManagment/pmHost/pmHostRenew'
           })
          },
        pmSetHostPas:function () {
          this.$router.push({
            path:'/perManagment/pmHost/pmSetHostPas'
          })
        },
        pmHostAbout:function () {
          this.$router.push("/perManagment/pmHost/pmHostAbout")
        },
        pmSpAbout:function () {
          this.$router.push("/perManagment/pmHost/pmSpAbout")
        },
        pmImage:function () {
          this.$router.push("/perManagment/pmHost/pmImage")
        },
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
