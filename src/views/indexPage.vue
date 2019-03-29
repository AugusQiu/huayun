<template>
  <div>
    <el-container>
      <el-header id="header">
            <div class="right">
            <router-link to="/login" tag="span" style="color:white">登录</router-link>
           </div>
      </el-header>
      <el-container id="main">
        <div class="block">
          <el-carousel trigger="click" height="500px" >
            <el-carousel-item class='carousel' v-for="item in imagesbox" :key="item.idView">
              <img :src="item.idView" >
            </el-carousel-item>
          </el-carousel>
        </div>
        <div id="nav">
              <el-card class="card" @click="loginWarn1">
                <img src="../assets/images/logo1.png" class="image">
                <div style="padding: 14px;">
                  <span>创建管理模块</span>
                </div>
              </el-card>
            <el-card class="card">
              <img src="../assets/images/logo2.png" class="image">
              <div style="padding: 14px;">
                <span>个人管理</span>
              </div>
            </el-card>
            <el-card class="card">
              <img src="../assets/images/logo3.png" class="image">
              <div style="padding: 14px;">
                <span>我的消息</span>
              </div>
            </el-card>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
      name: "indexPage",
      data(){
        return {
          imagesbox:
            [
              {
                idView: require("../assets/images/carousel1.jpg")
              },
              {
                idView: require("../assets/images/carousel2.jpg")
              },
              {
                idView: require("../assets/images/carousel3.jpg")
              },
            ]
        }
      },
      methods:{
        loginWarn1:function () {

        }
      }
    }
</script>

<style scoped>
  #header{
    background-color: #000000;
    height: 50px;
    z-index: 10;
  }
  .right{
    margin-left: 95%;
    width:5%;
    height: 50px;
    display: flex;
    align-items: center;
  }
  #main{
    width:100%;
    background-color: #F1F3F5;
    display: flex;
    flex-direction: column;
  }
  .block{
    width:100%;
  }
  .carousel img{
    width:100%;
    height:100%;
  }
  #nav{
    width:100%;
    display: flex;
    justify-content: space-around;

  }
  .card{
    margin-top: 100px;
    width:30%;
    text-align: center;
    overflow: hidden;
  }
  .card img{
    height:60px;
  }
  .card span{
    letter-spacing: 4px;
  }
</style>
