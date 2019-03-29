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
                  <div id="CPULine" >
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
                  <div id="STLine" >
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


  // var optionCpu1 = {
  //  backgroundColor: '#2c343c',
  //  title: {
  //    text: '宿主机(10.0.20.8)cpu使用率',
  //    left: 'center',
  //    textStyle: {
  //      color: '#ccc',
  //      fontSize:14
  //    }
  //  },
  //   tooltip : {
  //     formatter: "{a} <br/>{b} : {c}%"
  //   },
  //   toolbox: {
  //     feature: {
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'cpu使用率',
  //       type: 'gauge',
  //       detail: {formatter:'{value}%'},
  //       data: [{value: 20, name: 'cpu使用率'}]
  //     }
  //   ]
  // };
  // var optionHD1 = {
  //   backgroundColor: '#2c343c',
  //   title: {
  //     text: '宿主机(10.0.20.8)云硬盘使用率',
  //     left: 'center',
  //     textStyle: {
  //       color: '#ccc',
  //       fontSize:14
  //     }
  //   },
  //   tooltip : {
  //     formatter: "{a} <br/>{b} : {c}%"
  //   },
  //   toolbox: {
  //     feature: {
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   series: [
  //     {
  //       name: '云硬盘使用率',
  //       type: 'gauge',
  //       detail: {formatter:'{value}%'},
  //       data: [{value: 20, name: '云硬盘使用率'}]
  //     }
  //   ]
  // };
  // var optionSto1 = {
  //   backgroundColor: '#2c343c',
  //   title: {
  //     text: '宿主机(10.0.20.8)内存使用率',
  //     left: 'center',
  //     textStyle: {
  //       color: '#ccc',
  //       fontSize:14
  //     }
  //   },
  //   tooltip : {
  //     formatter: "{a} <br/>{b} : {c}%"
  //   },
  //   toolbox: {
  //     feature: {
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   series: [
  //     {
  //       name: '内存使用率',
  //       type: 'gauge',
  //       detail: {formatter:'{value}%'},
  //       data: [{value: 20, name: '内存使用率'}]
  //     }
  //   ]
  // };
  // var optionCpu2 = {
  //   backgroundColor: '#2c343c',
  //   title: {
  //     text: '宿主机(10.0.20.8)cpu使用率',
  //     left: 'center',
  //     textStyle: {
  //       color: '#ccc',
  //       fontSize:14
  //     }
  //   },
  //   tooltip : {
  //     formatter: "{a} <br/>{b} : {c}%"
  //   },
  //   toolbox: {
  //     feature: {
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'cpu使用率',
  //       type: 'gauge',
  //       detail: {formatter:'{value}%'},
  //       data: [{value: 20, name: 'cpu使用率'}]
  //     }
  //   ]
  // };
  // var optionHD2 = {
  //   backgroundColor: '#2c343c',
  //   title: {
  //     text: '宿主机(10.0.20.8)云硬盘使用率',
  //     left: 'center',
  //     textStyle: {
  //       color: '#ccc',
  //       fontSize:14
  //     }
  //   },
  //   tooltip : {
  //     formatter: "{a} <br/>{b} : {c}%"
  //   },
  //   toolbox: {
  //     feature: {
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   series: [
  //     {
  //       name: '云硬盘使用率',
  //       type: 'gauge',
  //       detail: {formatter:'{value}%'},
  //       data: [{value: 20, name: '云硬盘使用率'}]
  //     }
  //   ]
  // };
  // var optionSto2 = {
  //   backgroundColor: '#2c343c',
  //   title: {
  //     text: '宿主机(10.0.20.8)内存使用率',
  //     left: 'center',
  //     textStyle: {
  //       color: '#ccc',
  //       fontSize:14
  //     }
  //   },
  //   tooltip : {
  //     formatter: "{a} <br/>{b} : {c}%"
  //   },
  //   toolbox: {
  //     feature: {
  //       restore: {},
  //       saveAsImage: {}
  //     }
  //   },
  //   series: [
  //     {
  //       name: '内存使用率',
  //       type: 'gauge',
  //       detail: {formatter:'{value}%'},
  //       data: [{value: 20, name: '内存使用率'}]
  //     }
  //   ]
  // };

  var Sdata = [];
  var Time  = [];
  var Sdata2 = [];
  var Time2  = [];
  let moment = require("moment");
  export default {
        name: "pmMonHost",
        data(){
          return{
            // Sdata:[],
            startTime:moment().subtract(10,'m').format('YYYY-MM-DD HH:mm:ss'),
            endTime:moment().format('YYYY-MM-DD HH:mm:ss')
          }
        },
        created(){

        },
        mounted(){
          // this.getData().then(data =>{
          //   this.drawLine(data);
          // })
          this.drawLine1();
          this.drawLine2();
        },
        components:{
          leftNav,
          logout
        },
        methods: {
          // drawgaugeCpu1(){
          //   let myChart = echarts.init(document.getElementById('gaugeCpu1'));
          //   setInterval(function () {
          //     optionCpu1.series[0].data[0].value = (Math.random() * 50).toFixed(2) - 0;
          //     myChart.setOption(optionCpu1, true);
          //   },2000);
          // },
          // getData:function () {
          //   let postdata = new FormData();
          //   postdata.append("region","cn-huaian");
          //   postdata.append("id","i-0g6rj2ddjm42s");
          //   postdata.append("startTime",this.startTime);
          //   postdata.append("endTime",this.endTime);
          //   this.$http.post("pmp/instanceCpuMonitor",postdata).then((res)=>{
          //     let result = res.data.Data;
          //     // console.log(result);
          //     for(var i =1;i<result.length;i++){
          //       var data ={};
          //       data.name = result[i][0];
          //       data.value= result[i][1];
          //       // data.value = parseFloat(value);
          //       this.Sdata.push(data);
          //     }
          //     console.log("get执行完成")
          //   }).catch((err)=>{
          //     console.log(err)
          //   });
          //   console.log(this.Sdata);
          //   return Promise.resolve(this.Sdata);
          // },
          drawLine1(){
            let postdata = new FormData();
            postdata.append("region","cn-huaian");
            postdata.append("id","i-0g6rj2ddjm42s");
            postdata.append("startTime",this.startTime);
            postdata.append("endTime",this.endTime);
            this.$http.post("pmp/instanceCpuMonitor",postdata).then((res)=>{
              let myChart = echarts.init(document.getElementById('CPULine'));
              let result = res.data.Data;
              // console.log(result);
              // var _this = this;
              let lineOption = {
                title: {
                  text: '宿主机CPU使用率(%)'
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
            this.$http.post("pmp/instanceRamMonitor",postdata).then((res)=>{
              let myChart = echarts.init(document.getElementById('STLine'));
              let result = res.data.Data;
              // console.log(result);
              // var _this = this;
              let lineOption = {
                title: {
                  text: '宿主机内存使用率(%)'
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
                  data:Time2
                },
                yAxis: {
                  type: 'value'
                },
                series: [{
                  data: Sdata2,
                  type: 'line',
                  areaStyle: {}
                }]
              };

              for(var i =1;i<result.length;i++){
                Time2.push(result[i][0]);
                Sdata2.push(result[i][1]);
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
  #CPULine,#STLine{
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
  /*#tables{*/
    /*width:90%;*/
    /*margin-left: 5%;*/
  /*}*/
</style>
