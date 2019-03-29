<template>
  <el-tabs  style="height:500px;width:80%">
      <el-tab-pane label="创建云主机">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="setHost" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>创建云主机</span>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
      <el-tab-pane label="创建云主机快照">
        <el-row :gutter="20" >
          <el-col :span="6">
            <div class="grid-content">
              <el-card class="card" @click.native="setSnapshot" style="width:100%;height: 100%">
                <img src="../assets/images/nav4.png" class="image">
                <div style="padding: 14px;">
                  <span>创建云主机快照</span>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
    </el-tab-pane>
      <el-tab-pane label="自定义镜像">
      <el-row :gutter="20" >
        <el-col :span="6">
          <div class="grid-content">
            <el-card class="card" @click.native="setMirror" style="width:100%;height: 100%">
              <img src="../assets/images/nav4.png" class="image">
              <div style="padding: 14px;">
                <span>自定义镜像</span>
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
        name: "smHostNav",
        methods:{
          setHost:function () {
            this.$router.push({
              path:'/setManagment/smHost/setHost'
            })
          },
          setSnapshot:function () {
            this.$router.push({
              path:'/setManagment/smHost/setSnapshot'
            })
          },
          setMirror:function () {
            this.$router.push({
              path:'/setManagment/smHost/setMirror'
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
