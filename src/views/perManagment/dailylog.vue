<template>
    <div id="wrap">
      <el-container>
        <el-header id="header"><logout></logout></el-header>
        <el-container>
          <el-aside style="width:30%;">
            <left-nav></left-nav>
          </el-aside>
          <el-main>
          <log-nav></log-nav>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
  import logNav  from   '@/components/logNav'
  import logout  from   '@/components/logout'
  import leftNav from   '@/components/leftNav'
    export default {
        name: "log",
        components:{
        leftNav,
        logout,
        logNav
        },
      created(){
        // this.getData()
      },
      methods:{

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
