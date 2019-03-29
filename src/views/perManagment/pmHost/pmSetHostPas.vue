<template>
  <div id="wrap">
    <el-container>
      <el-header id="header"><logout></logout></el-header>
      <el-container>
        <el-aside style="width:30%;">
          <left-nav></left-nav>
        </el-aside>
        <el-main id="main">
          <div id="formWrap">
            <p>快速设置云主机密码</p>
            <div class="flex" style="display:inline-block">
              <label>地区:</label>
              <el-input v-model="area" style="width:60%" placeholder="请输入地区"></el-input>
            </div>
            <div class="flex">
              <label>云主机ID:</label>
              <el-input v-model="ID" style="width: 50%"></el-input>
            </div>
            <div class="flex">
              <label>设置新密码:</label>
              <el-input v-model="newPas" style="width: 50%" type="password"></el-input>
              <span>由大小写字母、数字和特殊字符组成</span>
            </div>
            <div class="flex">
              <el-button type="primary" style="width:30%;height:40px;margin-left: 20%"  @click.native="submit">提交</el-button>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import leftNav from '../../../components/leftNav'
  import logout from   '../../../components/logout'
    export default {
        name: "pmSetHostPas",
       data(){
        return{
          area:'cn-huaian',
          ID:'i-0g6rj2ddjm42s',
          newPas:''
        }
      },
      components:{
        leftNav,
        logout
      },
      methods:{
        submit:function () {
          let formData  = new FormData();
          formData.append("region", this.area);
          formData.append("id",this.ID);
          formData.append("password",this.newPas);
          this.$http.post("ecs/changeInstancePassword",formData).then((res)=>{
            console.log(res);
            alert("修改成功!");
            this.newPas ='';
          }).catch((err)=>{console.log(err)})
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
    width:80%;
  }
  #formWrap{
    margin-top: 50px;
  }
  #formWrap p:nth-of-type(1){
    margin-left: 30%;
    letter-spacing: 4px;
    font-size: 20px;
  }
  #formWrap p:nth-of-type(2){
    margin-left: 28%;
    letter-spacing: 4px;
    margin-top: 25px;
    font-size: 20px;
  }
  .flex{
    margin-top: 30px;
  }
  .flex-col{
    display: flex;
    flex-direction: column;
    margin-left: 32%;
  }
  .flex label{
    letter-spacing: 4px;
  }
</style>
