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
            <p>续费云主机</p>
            <div class="flex" style="display:inline-block">
              <label>地区:</label>
              <el-input v-model="area" style="width:60%" placeholder="请输入地区"></el-input>
            </div>
            <div class="flex">
              <label>云主机ID:</label>
              <el-input v-model="ID" style="width: 50%"></el-input>
            </div>
            <div class="flex">
              <label>续费时长(/月):</label>
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
        name: "pmHostRenew",
      data(){
        return{
          area:'cn-huaian',
          ID:'i-0g6rj2ddjm42s',
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
          value:'',
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
          formData.append("payTyoe","PREPAID");
          formData.append("period",this.value);
          this.$http.post("ecs/renewInstance",formData).then((res)=>{
            console.log(res);
            alert("续费成功!");
            this.value ='';
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

