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
            <p>创建云主机快照</p>
            <div class="flex">
              <label>云主机名称:</label>
              <el-input v-model="name" style="width:50%" ></el-input>
            </div>
            <div class="flex">
              <label>云主机ID:</label>
              <el-input v-model="ID" style="width:50%" ></el-input>
            </div>
            <div class="flex">
              <label>类型:</label>
              <el-input v-model="type" style="width:50%" ></el-input>
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
  import logout from   '@/components/logout'
    export default {
        name: "setSnapshot",
        data(){
          return{
            name:'cn-huaian',
            ID:'i-0g6rj2ddjm42s',
            type:"CUSTOMER"
          }
        },
      components:{
          leftNav,
          logout
      },
      methods:{
        submit:function () {
          let formData  = new FormData();
          formData.append("region", this.name);
          formData.append("instanceId",this.ID);
          formData.append("createType",this.type);
          this.$http.post("ecs/createInstanceSnapshot",formData).then((res)=>{
            console.log(res);
            alert("创建成功!");
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
    margin-top: 30px;
  }
  #formWrap p{
    margin-left: 30%;
    letter-spacing: 4px;
    font-size: 20px;
  }
  .flex{
    margin-top: 50px;
  }
  .flex label{
    letter-spacing: 4px;
  }
</style>
