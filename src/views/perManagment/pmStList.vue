<template>
  <div id="wrap">
    <el-container>
      <el-header id="header"><logout></logout></el-header>
      <el-container>
        <el-aside style="width:30%;">
          <left-nav></left-nav>
        </el-aside>
        <el-main>
          各种列表
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import logout from   '../../components/logout'
  import leftNav from '../../components/leftNav'
  export default {
    name: "pmHost",
    components:{
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
