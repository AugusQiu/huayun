<template>
  <div id="leftNav">
   <el-col :span="12">
     <el-menu router
       :default-active="$route.path"
       class="el-menu-vertical-demo"
       background-color="#545c64"
       text-color="#fff"
       active-text-color="#ffd04b"
              :default-openeds="openeds">
         <el-submenu index="1" class="minWidth">
           <template slot="title">
             <span>创建管理模块</span>
           </template>
           <el-menu-item-group>
             <el-menu-item index="/setManagment/smHost">云主机相关</el-menu-item>
             <el-menu-item index="/setManagment/smNet">私有网络</el-menu-item>
             <el-menu-item index="/setManagment/smStorage">块存储</el-menu-item>
             <el-menu-item index="/setManagment/smBalance">负载均衡</el-menu-item>
           </el-menu-item-group>
         </el-submenu>
         <el-submenu index="2" class="minWidth">
           <template slot="title">
             <span>个人管理</span>
           </template>
           <el-menu-item-group>
             <el-menu-item index="/perManagment/pmHost">云主机相关</el-menu-item>
             <el-menu-item index="/perManagment/pmNet">私有网络</el-menu-item>
             <el-menu-item index="/perManagment/pmStorage">块存储</el-menu-item>
             <el-menu-item index="/perManagment/pmBalance">负载均衡</el-menu-item>
             <el-menu-item index="/perManagment/pmMonitor">性能监控</el-menu-item>
             <el-menu-item index="/perManagment/log">日志记录</el-menu-item>
           </el-menu-item-group>
         </el-submenu>
         <el-submenu index="3" class="minWidth">
           <template slot="title">
             <span>我的消息</span>
           </template>
           <el-menu-item-group>
             <el-menu-item index="" @click.native="getMes1">云主机相关</el-menu-item>
             <el-menu-item index="" @click.native="getMes2">私有网络</el-menu-item>
             <el-menu-item index="" @click.native="getMes3">块存储</el-menu-item>
             <el-menu-item index="" @click.native="getMes4">负载均衡</el-menu-item>
           </el-menu-item-group>
         </el-submenu>
     </el-menu>
   </el-col>
  </div>
</template>

<script>
    export default {
        name: "leftNav",
        data(){
          return {
            mes:[
              {
                message:"私有网络入口流量正常！"
              },
              {
                message:"私有网络进口流量正常！"
              }
            ],
            openeds: ['1','2'],
          }
        },
        methods:{
          getMes1:function () {
            this.$notify.info({
              title:"消息",
              message:"云主机运行正常！"
            })
          },
          getMes2:function () {
            for(var i = 0;i<this.mes.length;i++){
              this.$notify.info({
                title:"消息",
                message:this.mes[i].message
              });
            }
          },
          getMes3:function () {
            this.$notify.info({
              title:"消息",
              message:"块存储充足！"
            })
          },
          getMes4:function () {
            this.$notify({
              title: '警告',
              message: '负载均衡有点超标',
              type: 'warning'
            });
          }

        }

    }
</script>

<style scoped>
  #leftNav{
    min-height:698px;
  }
  .minWidth{
    min-width: 200px
  }
</style>
