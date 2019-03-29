<template>
  <div id="wrap">
    <el-container>
      <el-header><logout></logout></el-header>
      <el-container>
        <el-aside style="width:30%;"><left-nav>
        </left-nav></el-aside>
        <el-main>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import leftNav from '@/components/leftNav.vue'
  import logout from   '../../components/logout'
    export default {
        name: "aboutHost",
        components:{
        leftNav:leftNav,
          logout
      }
    }
</script>

<style scoped>
#wrap{
  margin: 0;
  padding: 0;
}
</style>
