<template>
  <div>
    <el-container>
      <el-header id="header"></el-header>
      <el-main id="main">
        <div id="wrap">
          <div id="formWrap" class="mgtop">
            <p class="mgtop">用户登录</p>
            <el-input v-model="account" placeholder="用户名、手机号、邮箱" class="mgtop"></el-input>
            <el-input v-model="password"  type="password" placeholder="请输入密码" class="mgtop"></el-input>
            <div class="flex mgtop">
              <router-link to="/forgetPas" tag="span" class="span">忘记密码</router-link>
              <router-link to="/register"  tag="span" class="span">立即注册</router-link>
            </div>
            <el-button type="primary" class="mgtop" style="width:60%;height:40px;margin-bottom: 30px;"  @click="login">登录</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return{
            account:'',
            password:''
          }
        },
       created(){
       },
       methods:{
        login:function () {
          if(this.account===''||this.password===''){
            alert("账号或者密码不能为空")
          }else{
            let postdata = new FormData();
            postdata.append("account",this.account);
            postdata.append("password",this.password);
            this.$http.post("user/login",postdata).then((res)=>{
              console.log(res.data);
              if(res.data.code===200){
                alert("登录成功！");
                this.$router.push({
                  path: '/perManagment/pmHost/',
                })
              }else if(res.data.msg==="账户不存在"){
                alert("账户不存在");
                return false;
              }else if(res.data.msg==="密码错误"){
                alert("密码错误");
                return false;
              }
            }).catch((err)=>{
              console.log(err)
            });

          }
        },

      }
    }
</script>

<style scoped>
  #header{
    background-color: #000000;
    height: 50px;
    z-index: 10;
  }
  #main{
    width:100%;
    position:absolute;
    top:0;
    left: 0;
    height: 100%;
    background-color: #F1F3F5;
  }
  #wrap{
    background-color: #fff;
    width:80%;
    margin-top: 100px;
    height:550px;
    margin-left: 10%;
  }
  #formWrap{
    width:30%;
    margin-left: 35%;
    overflow: hidden;
    text-align: center;
  }
  .flex{
    display: flex;
    justify-content: space-around;
  }
  .span{
    color: #409eff;
  }
  .mgtop{
    margin-top: 30px;
  }
  p{
    font-size:24px;
    color: #212226;
    letter-spacing: 5px;
  }
</style>
