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
            <p>自定义镜像</p>
            <div class="flex" style="display: inline-block">
              <label>地区:</label>
              <el-input v-model="area" style="width: 60%" placeholder="请输入地区"></el-input>
            </div>
            <div class="flex">
              <label>后端卷类型:</label>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="flex">
              <label>镜像标识:</label>
              <el-input v-model="ide" style="width: 50%"></el-input>
            </div>
            <div class="flex">
              <label>镜像名称:</label>
              <el-input v-model="name" style="width: 50%"></el-input>
            </div>
            <div class="flex">
              <label>描述信息:</label>
              <el-input v-model="describe" style="width: 50%"></el-input>
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
    name: "setMirror",
    data(){
      return{
        area:'',
        options: [{
          value: 'ssd',
          label: 'ssd'
        }, {
          value: 'sata',
          label: 'sata'
        }
        ],
        value:'',
        name:'',
        ide:'',
        describe:'',
      }
    },
    components:{
      leftNav,
      logout
    },
    methods:{
      submit:function () {
        if(this.area ===''){
          alert("请填写地区");
          return false;
        }else if(this.value===''){
          alert("请选择后端卷类型");
          return false;
        }
        else if(this.ide===''){
          alert("请填写镜像标识");
          return false;
        }
        else if(this.name ===''){
          alert("请填写镜像名称");
          return false;
        }
        else if(this.describe ===''){
          alert("请填写描述信息");
          return false;
        }else{
          alert("提交成功！");
          this.$router.push('/setManagment/smHost')
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
    margin-top: 30px;
  }
  .flex label{
    letter-spacing: 4px;
  }
</style>
