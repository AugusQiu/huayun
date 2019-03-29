<template>
  <div id="wrap">
    <el-container>
      <el-header id="header"><logout></logout></el-header>
      <el-container>
        <el-aside style="width:30%;">
          <left-nav></left-nav>
        </el-aside>
        <el-main>
         <pm-monitor-nav></pm-monitor-nav>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import pmMonitorNav from '../../components/pmMonitorNav'
  import leftNav from '../../components/leftNav'
  import logout from   '../../components/logout'
    export default {
        name: "pmMonitor",
       components:{
          pmMonitorNav,
          leftNav,
          logout
       }
    }
</script>

<style scoped>
  #header{
    background-color: #000000;
    height: 50px;
    z-index: 10;
  }
</style>
