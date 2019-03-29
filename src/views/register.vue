<template>
 <div>
   <el-container>
     <el-header id="header"></el-header>
     <el-main id="main">
       <div id="wrap">
         <div id="formWrap" class="mgtop">
        <p class="mgtop">注册账号</p>
        <el-input v-model="name" placeholder="请输入用户名" class="mgtop"></el-input>
        <el-input v-model="pas1" type="password" placeholder="请输入密码" class="mgtop"></el-input>
        <el-input v-model="pas2" type="password"  placeholder="请再次输入密码" class="mgtop"></el-input>
        <el-input v-model="email" placeholder="请输入邮箱" class="mgtop"></el-input>
        <el-input v-model="phone" placeholder="请输入手机号" class="mgtop"></el-input>
        <div class="flex mgtop" >
          <el-input v-model="ide" placeholder="请输入验证码"></el-input>
          <el-button type="primary" @click.native="get">{{getide}}</el-button>
        </div>
        <el-input v-model="key" placeholder="请输入Access Key" class="mgtop"></el-input>
        <el-input v-model="secret" placeholder="请输入Access Key Secret" class="mgtop"></el-input>
        <el-button type="primary" class="mgtop" style="width:60%;height:40px;margin-bottom: 30px;" @click="register" >注册</el-button>
         </div>
       </div>
     </el-main>
   </el-container>
 </div>
</template>

<script>
  // let config = {
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   }
  // };
    export default {
        name: "register",
        data() {
          return {
            name: '',
            pas1:'',
            pas2:'',
            email:'',
            phone:'',
            ide:'',
            key:'d6a124fd47604a25b35fa9068a5e725a',
            secret:'e216670417e6426ea0e79bad70455fdf',
            getide:"获取验证码",
            newide:''
         }
       },
      methods:{
       register:function () {

         if(this.name===''){
           alert('用户名不能为空');
           return false;
         }else if(this.pas1 ===''){
           alert("密码不能为空");
           return false;
         }else if(this.pas1!==''&&this.pas2!==''&&this.pas1!==this.pas2){
           alert("两次密码输入不一致");
           return false;
         }else if(this.ide!==this.newide){
           alert("验证码不正确");
           return false;
         }else{
           let postdata = new FormData();
           postdata.append("username",this.name);
           postdata.append("password",this.pas1);
           postdata.append("repassword",this.pas2);
           postdata.append("account",this.email);
           postdata.append("code",this.ide);
           postdata.append("accesskey",this.key);
           postdata.append("accesssecret",this.secret);

           this.$http.post("user/sign",postdata).then((res)=>{
             console.log(res);
               alert("注册成功!");
           }).catch((err)=>{
             console.log(err)
           })
         }
       },
        get:function () {
          if(this.email ===''){
            alert("邮箱不能为空");
            return false;
          }else{
            let postdata = new FormData();
            postdata.append("account",this.email);
            this.getide ="已发送";
            this.$http.post("user/code",postdata).then((res)=>{
              var newide =res.data.msg.substring(5);
              console.log(newide);
              this.newide = newide;
            }).catch((err)=>{
              console.log(err)
            })
          }

        }
      }
    }
</script>

<style scoped>
 #header{
   background-color: #000000;
   height: 50px;
 }
  #main{
    width:100%;
    background-color: #F1F3F5;
  }
  #wrap{
    background-color: #fff;
    width:80%;
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
