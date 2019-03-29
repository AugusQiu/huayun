<template>
  <div id="wrap">
    <el-container>
      <el-header id="header"><logout></logout></el-header>
      <el-container>
        <el-aside style="width:30%;">
          <left-nav></left-nav>
        </el-aside>
        <el-main style="width:70%;margin-left: -10%">
          <el-row :gutter="20" class="table" >
            <el-col :span="20">
              <div class="grid-content">
                <el-card class="card" @click="" style="width:100%;height: 100%">
                  <div id="IPLine" >

                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
  import leftNav from '../../../components/leftNav'
  import logout from   '../../../components/logout'
  let moment = require("moment");
  // import echarts from 'echarts'
  //按需导入
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  require('echarts/lib/component/legendScroll')
  let TimeIO =[];
  let SdataOut =[];
  let SdataIn  =[];
    export default {
        name: "pmMonRouter",
        data(){
          return{
            startTime:moment().subtract(10,'m').format('YYYY-MM-DD HH:mm:ss'),
            endTime:moment().format('YYYY-MM-DD HH:mm:ss')
          }
         },
      mounted(){
        this.drawLine();
      },
      components:{
        leftNav,
        logout
      },
      methods: {
        drawLine(){
          let postdata = new FormData();
          postdata.append("region","cn-huaian");
          postdata.append("id","i-0g6rj2ddjm42s");
          postdata.append("startTime",this.startTime);
          postdata.append("endTime",this.endTime);
          this.$http.post("pmp/instanceFipInMonitor",postdata).then((res)=>{
            let result = res.data.Data[0].Data;
            for(var i =1;i<result.length;i++){
              TimeIO.push(result[i][0]);
              SdataIn.push(result[i][1]);
            }
            console.log("get执行完成")
          }).catch((err)=>{
            console.log(err)
          });
          this.$http.post("pmp/instanceFipOutMonitor",postdata).then((res)=>{
            let myChart = echarts.init(document.getElementById('IPLine'));
            let result = res.data.Data[0].Data;
            // console.log(result)
            let lineOption = {
              title: {
                text: '公网IP流入流出速率(Bytes/s)'
              },
              tooltip : {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data:TimeIO
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  name:'IP流入速率',
                  type:'line',
                  stack: '速率',
                  areaStyle: {},
                  data:SdataIn
                },
                {
                  name:'IP流出速率',
                  type:'line',
                  stack: '速率',
                  areaStyle: {},
                  data:SdataOut
                }]
            };
            for(var i =1;i<result.length;i++){
              SdataOut.push(result[i][1]);
            }
            myChart.setOption(lineOption);
            console.log("get执行完成")
          }).catch((err)=>{
            console.log(err)
          });
          console.log("draw执行完成")
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
  .card{
    text-align: center;
  }
  .grid-content{
    width:100%;
    height:450px;
    margin-top: 100px;
  }
  .card img{
    width:50%;
    height:55%;
  }
  #IPLine{
    width: 100%;
    height:450px;
  }
  .table{
    text-align: center;
  }
</style>
