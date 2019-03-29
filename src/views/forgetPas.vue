<template>
  <div>
    <el-container>
      <el-header id="header"></el-header>
      <el-main id="main">
        <div id="wrap">
          <div id="formWrap" class="mgtop">
            <p class="mgtop">找回密码</p>
            <el-input v-model="account" placeholder="手机号、邮箱" class="mgtop"></el-input>
            <div class="flex mgtop">
              <el-input v-model="ide" placeholder="请输入验证码"></el-input>
              <el-button type="primary" @click="get">{{getide}}</el-button>
            </div>
            <el-input v-model="password" type="password" placeholder="请输入密码" class="mgtop"></el-input>
            <el-input v-model="repassword" type="password" placeholder="请再次输入密码" class="mgtop"></el-input>
            <el-button type="primary" class="mgtop" style="width:60%;height:40px;margin-bottom: 30px;" @click="sure">确认</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
    export default {
        name: "forgetPas",
        data(){
          return{
            account:'',
            password:'',
            repassword:'',
            ide:'',
            newide:'',
            getide:'获取验证码'
          }
        },
       methods:{
         get:function () {
           if(this.account ===''){
             alert("邮箱不能为空");
             return false;
           }else{
             let postdata = new FormData();
             postdata.append("account",this.account);
             this.getide ="已发送";
             this.$http.post("user/code",postdata).then((res)=>{
               var newide =res.data.msg.substring(5);
               console.log(newide);
               this.newide = newide;
             }).catch((err)=>{
               console.log(err)
             })
           }

         },
         sure:function () {
           if(this.account===''||this.password===''){
             alert("账号或者密码不能为空");
             return false;
           }else if (this.password!==this.repassword){
             alert("两次输入密码不一致！");
             return false;
           }else if (this.ide!==this.newide){
             alert("验证码输入不正确");
             return false;
           }
           else{
             let postdata = new FormData();
             postdata.append("account",this.account);
             postdata.append("code",this.ide);
             postdata.append("password",this.password);
             postdata.append("repassword",this.repassword);
             this.$http.post("user/change",postdata).then((res)=>{
               console.log(res.data);
               alert("修改成功！");
             }).catch((err)=>{
               console.log(err)
             });

           }
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
  .mgtop{
    margin-top: 30px;
  }
  p{
    font-size:24px;
    color: #212226;
    letter-spacing: 5px;
  }
</style>
