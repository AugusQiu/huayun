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
            <p>创建负载均衡器</p>
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
              <label>负载均衡器型号:</label>
              <el-input v-model="type" style="width: 50%"></el-input>
            </div>
            <div class="flex">
              <label>网络ID:</label>
              <el-input v-model="ID" style="width: 50%"></el-input>
              <span>或DEFAULT,DEFAULT标识默认基础网络</span>
            </div>
            <div class="flex">
              <label>负载均衡器名称:</label>
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
    name: "setBalance",
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
        type:'',
        ID:'',
        name:'',
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
        }else if(this.value1===''){
          alert("请选择购买年限");
          return false;
        }else if(this.value2===''){
          alert("请选择试用周期");
          return false;
        }
        else if(this.type ===''){
          alert("请填写负载均衡器型号");
          return false;
        }
        else if(this.ID===''){
          alert("请填写网络ID");
          return false;
        }
        else if(this.name===''){
          alert("请填写负载均衡器名称");
          return false;
        }
        else if(this.describe===''){
          alert("请填写描述信息");
          return false;
        }
        else{
          alert("提交成功！");
          this.$router.push('/setManagment/smBalance')
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
