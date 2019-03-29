# huayun
vue+elementUI+echarts+axios
参加国服的时候，用vue做的一个项目，前前后后也写了60多个页面，虽然页面比较简单，但是也收获了不少
ui组件用的是elementUI框架提供的，调接口用axios,echarts作图表
也碰到了一些坑，几个印象比较深的:
1,axios调数据，设置的东西还是不少的
 //main.js
import axios from 'axios';
axios.defaults.baseURL ="http://47.100.124.50:8080/";
axios.defaults.headers['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials=true;   //用于接收cookie,axios默认是不开启的
Vue.prototype.$http = axios;  
2，axios从接口调数据，存放到data里的对象或数组中，echarts再调用data里的数据，mounted()生命周期里再调用echarts的绘图方法
这里一定要留意: 
            let postdata = new FormData();
            postdata.append("region","cn-huaian");
            postdata.append("id","i-0g6rj2ddjm42s");
            postdata.append("startTime",this.startTime);
            postdata.append("endTime",this.endTime);
            this.$http.post("pmp/instanceCpuMonitor",postdata).then((res)=>{ }).catch((err)=>{ }) 
            这里是异步的！！！也就是说echarts的option配置数据一定要注意设置的位置和顺序，否则很可能mounted()调用完绘图方法了，axios还没有从接口中调取数据
3，moment.js用于前端的时间格式化挺好用的
       data(){
          return{
            startTime:moment().subtract(10,'m').format('YYYY-MM-DD HH:mm:ss'),
            endTime:moment().format('YYYY-MM-DD HH:mm:ss')
          }
        }
             
