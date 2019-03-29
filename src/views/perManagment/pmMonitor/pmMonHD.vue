<template>
  <div id="wrap">
    <el-container>
      <el-header id="header"><logout></logout></el-header>
      <el-container>
        <el-aside style="width:30%;">
          <left-nav></left-nav>
        </el-aside>
        <el-main style="width:70%;margin-left: -10%">
          <el-row :gutter="20" class="table"  >
            <el-col :span="20">
              <div class="grid-content">
                <el-card class="card" @click="" style="width:100%;height: 100%">
                  <div id="HDLine" >
                  </div>
                </el-card>
              </div>
              <!--<el-button type="primary" class="mgtop" style="width:60%;height:40px;margin-bottom: 30px;"  @click="drawLine">展示数据</el-button>-->
            </el-col>
          </el-row>
          <el-row :gutter="20" class="table"  >
            <el-col :span="20">
              <div class="grid-content">
                <el-card class="card" @click="" style="width:100%;height: 100%">
                  <div id="IOLine" >
                  </div>
                </el-card>
              </div>
              <!--<el-button type="primary" class="mgtop" style="width:60%;height:40px;margin-bottom: 30px;"  @click="drawLine">展示数据</el-button>-->
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
  // import echarts from 'echarts'
  //按需导入
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line');
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  require('echarts/lib/component/legendScroll')
  var Sdata = [];
  var Time  = [];
  var SdataIO1 = [];
  var TimeIO  = [];
  var SdataIO2 = [];
  var SdataRIOPS = [];
  var SdataWIOPS = [];
  let moment = require("moment");
    export default {
        name: "pmMonHD",
      data(){
        return{
          startTime:moment().subtract(10,'m').format('YYYY-MM-DD HH:mm:ss'),
          endTime:moment().format('YYYY-MM-DD HH:mm:ss')
        }
      },
      created(){

      },
      mounted(){
        this.drawLine1();
        this.drawLine2();
      },
      components:{
        leftNav,
        logout
      },
      methods: {
        drawLine1(){
          let postdata = new FormData();
          postdata.append("region","cn-huaian");
          postdata.append("id","i-0g6rj2ddjm42s");
          postdata.append("startTime",this.startTime);
          postdata.append("endTime",this.endTime);
          this.$http.post("pmp/instanceDiskUsedMonitor",postdata).then((res)=>{
            let myChart = echarts.init(document.getElementById('HDLine'));
            let result = res.data.Data[0].Data;
            let lineOption = {
              title: {
                text: '宿主机磁盘使用率(%)'
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
                data:Time
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: Sdata,
                type: 'line',
                areaStyle: {}
              }]
            };

            for(var i =1;i<result.length;i++){
              Time.push(result[i][0]);
              Sdata.push(result[i][1]);
            }
            myChart.setOption(lineOption);
            console.log("get执行完成")
          }).catch((err)=>{
            console.log(err)
          });
          console.log("draw执行完成")
        },
        drawLine2(){
          let postdata = new FormData();
          postdata.append("region","cn-huaian");
          postdata.append("id","i-0g6rj2ddjm42s");
          postdata.append("startTime",this.startTime);
          postdata.append("endTime",this.endTime);
          this.$http.post("pmp/instanceIoReadMonitor",postdata).then((res)=>{
            let result = res.data.Data[0].Data;
            for(var i =1;i<result.length;i++){
              TimeIO.push(result[i][0]);
              SdataIO1.push(result[i][1]);
            }
            console.log("get执行完成")
          }).catch((err)=>{
            console.log(err)
          });
          this.$http.post("pmp/instanceIoWriteMonitor",postdata).then((res)=>{
            let result = res.data.Data[0].Data;
            for(var i =1;i<result.length;i++){
              SdataIO2.push(result[i][1]);
            }
            console.log("get执行完成")
          }).catch((err)=>{
            console.log(err)
          });


          this.$http.post("pmp/instanceIopsReadMonitor",postdata).then((res)=>{
            let result = res.data.Data[0].Data;
            for(var i =1;i<result.length;i++){
              SdataRIOPS.push(result[i][1]);
            }
            console.log("get执行完成")
          }).catch((err)=>{
            console.log(err)
          });
          this.$http.post("pmp/instanceIopsWriteMonitor",postdata).then((res)=>{
            let myChart = echarts.init(document.getElementById('IOLine'));
            let result = res.data.Data[0].Data;
            // console.log(result)
            let lineOption = {
              title: {
                text: '宿主机磁盘IO速率(Bytes/s)'
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
                  name:'IO读取速率',
                  type:'line',
                  stack: '速率',
                  areaStyle: {},
                  data:SdataIO1
                },
                {
                  name:'IO写入速率',
                  type:'line',
                  stack: '速率',
                  areaStyle: {},
                  data:SdataIO2
                },
                {
                  name:'读取IOPS速率',
                  type:'line',
                  stack: '速率',
                  areaStyle: {},
                  data:SdataRIOPS
                },
                {
                  name:'写入IOPS速率',
                  type:'line',
                  stack: '速率',
                  areaStyle: {},
                  data:SdataWIOPS
                }]
            };
            for(var i =1;i<result.length;i++){
              SdataWIOPS.push(result[i][1]);
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
    height:380px;
    margin-top: 20px;
  }
  .card img{
    width:50%;
    height:55%;
  }
  #HDLine,#IOLine{
    width: 100%;
    height:380px;
  }
  .table{
    text-align: center;
  }
  p{
    font-size: 15px;
    margin-top:10px;
    margin-bottom: 10px;
  }
</style>
