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
            <div class="flex">
              <label>查询地区:</label>
              <el-select v-model="area" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-button type="primary" style=" "  @click.native="inquiry">查询</el-button>
            </div>


            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="key"
                label="key">
              </el-table-column>
              <el-table-column
                prop="value"
                label="value">
              </el-table-column>
            </el-table>
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
        name: "pmBaquery",
      data(){
        return{
          tableData:[],
          options: [{
            value: 'cn-suzhou1',
            label: '苏州'
          }, {
            value: 'cn-huaian',
            label: '淮安'
          }, {
            value: 'cn-beijing1',
            label: '北京'
          }, {
            value: 'cn-guangzhou1',
            label: '广东'
          },{
            value: 'cn-chengdu',
            label: '成都'
          },
            {
              value: 'cn-anxi',
              label: '西安'
            }
          ],
          area:'cn-huaian'
        }
      },
      created(){
      },
      components:{
        leftNav,
        logout
      },
      methods:{
        inquiry:function () {
          let formData  = new FormData();
          formData.append("region", this.area);
          this.$http.post("lb/describeLoadBalancers",formData).then((res)=>{
            console.log(res);
            let result =res.data;
            this.tableData =[];
              this.tableData.push(
                {key:'Action',value:result.Action},
                {key:"TaskId",value:result.TaskId},
                {key:'TotalCount',value:result.TotalCount}
              )

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
    margin-bottom: 15px;
  }
  .flex label{
    letter-spacing: 4px;
  }
</style>

