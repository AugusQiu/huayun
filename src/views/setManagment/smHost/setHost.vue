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
          <p>创建云主机</p>
          <div class="flex" style="display: inline-block">
          <label>地区:</label>
          <el-input v-model="area" style="width: 60%" placeholder="请输入地区"></el-input>
          </div>
            <div class="flex">
          <label>购买年限周期(/月):</label>
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
              <label>试用(/月):</label>
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="flex">
              <label>主机系列:</label>
              <el-radio v-model="radio1" label="1">普通型</el-radio>
              <el-radio v-model="radio1" label="2">高性能型</el-radio>
            </div>
            <div class="flex">
              <label>系统盘、云硬盘类型:</label>
              <el-radio v-model="radio2" label="1">普通盘</el-radio>
              <el-radio v-model="radio2" label="2">高性能盘</el-radio>
            </div>
            <div class="flex">
              <label>云主机名称:</label>
              <el-input v-model="name" style="width: 50%"></el-input>
            </div>
            <div class="flex">
              <label>云主机密码:</label>
              <el-input v-model="pas" style="width: 50%"></el-input>
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
    name: "setHost",
    data(){
      return{
        area:'',
        options: [{
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        },{
          value: '5',
          label: '5'
        },
          {
            value: '6',
            label: '6'
          },
          {
            value: '7',
            label: '7'
          },
          {
            value: '8',
            label: '8'
          },
          {
            value: '9',
            label: '9'
          },
          {
            value: '10',
            label: '10'
          },
          {
            value: '11',
            label: '11'
          },
          {
            value: '12',
            label: '12'
          }
        ],
        value1:'',
        value2:'',
        radio1: '1',
        radio2:'1',
        name:'',
        pas:'',
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
        }else if(this.value1===''){
          alert("请选择购买年限");
          return false;
        }else if(this.value2===''){
          alert("请选择试用周期");
          return false;
        }
        else if(this.name===''){
          alert("请填写云主机名称");
          return false;
        }
        else if(this.pas===''){
          alert("请填写云主机密码");
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
