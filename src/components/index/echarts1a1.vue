<doc>
  npm install echarts-liquidfill
</doc>
<template>
  <div>
    <div id="shuiwen1" style="width: 300px;height:300px;padding:10px;" @mouseenter="enter" @mouseleave="leave"></div>
    <div class="edittool"  v-show="seen">
      <div>CPU进程占用:{{cpu}}</div>
      <div>CPU进程名称:{{name}}</div>
      <div>CPU进程占用内存:{{mem}}</div>
      <div>CPU进程状态:{{status}}</div>
      <div>触发该进程的操作用户:{{user}}</div>
      <div>CPU进程ID:{{pid}}</div>

    </div>
  </div>
</template>
<script>
  import "echarts-liquidfill";
  import { getUsercInfo } from '../../api/index.js'
  export default {
    data() {
      return {
        ws:null,
        edata1:'',
        cpu:'',
        name:'',
        mem:'',
        status:'',
        user:'',
        pid:'',
        seen:false,
        charts: '',
      }
    },
  //   watch:{
  //  edata1:
  //  {
  //    handler:function (nVal,oVal) {
  //         if(nVal){
  //         this.charts.setOption(nVal)
  //         }else{
  //          this.charts.setOption(oVal)
  //         }
  //       else{
  //         this.init('shuiwen1');
  //       }
  //    },
  //     deep:true
  //  } 
  //   },
    async created(){
     const { data } =await getUsercInfo();
     this.cpu = data.data[0].cpu,
     this.name = data.data[0].name,
     this.mem = data.data[0].mem,
     this.status = data.data[0].status,
     this.user=data.data[0].user,
     this.pid=data.data[0].pid
     },
      mounted(){
        this.init('shuiwen1')
         this.getTheWeather();
      },
      beforeDestroy(){
        this.ws.onclose()
      },
    methods: {
    getTheWeather() {
                    this.connectWebSocket();
            },
            connectWebSocket (){
              let that = this
                if ("WebSocket" in window) {
                    console.log("浏览器支持 WebSocket!");
                    // 打开一个 webSocket
                    let url ='39.106.116.109:9095/api/sysInfo'; 
                    // const WebSocket=require('ws') 
                    this.ws = new WebSocket(`ws://${url}`);
                    // 连接成功
                    that.ws.onopen = function () {
                        // Web Socket 已连接上，使用 send() 方法发送数据
                        that.ws.send("这是发送的测试数据");
                        console.log('1连接成功');
                    };
                    // 接收数据处理
                    that.ws.onmessage = function (evt) {
                        const msg = JSON.parse(evt.data);
                        that.edata1=msg.data.cpu.usage;
                        that.init()
                        
                    };
                    // 连接报错
                    that.ws.onerror = function () {
                        console.log('连接报错...');
                    }
                    // 连接关闭
                    that.ws.onclose = function () {
                        // 关闭 websocket
                        console.log("连接已关闭...");
                    }
                } else {
                    // 浏览器不支持 WebSocket
                    console.log("您的浏览器不支持 WebSocket!");
                }
            },
      init() {
        
        this.charts = this.$echarts.init(document.getElementById('shuiwen1'))
        let value =this.edata1;
        console.log(value)
        let data = [value, value, value];
        let option = {
          backgroundColor: new this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#ffffff'
          }, {
            offset: 1,
            color: '#ffffff'
          }]),
          title: {
            text: (value * 100).toFixed(0) + '{a|%}',
            textStyle: {
              fontSize: 50,
              fontFamily: 'Microsoft Yahei',
              fontWeight: 'normal',
              // color: '#bcb8fb',
              color:'blue',
              rich: {
                a: {
                  fontSize: 28,
                }
              }
            },
            x: 'center',
            y: '35%'
          },
          graphic: [{
            type: 'group',
            left: 'center',
            top: '60%',
            children: [{
              type: 'text',
              z: 100,
              left: '10',
              top: 'middle',
              style: {
                fill: 'blue',
                text: 'CPU',
                font: '20px Microsoft YaHei'
              }
            }]
          }],
          series: [{
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            //  shape: 'roundRect',
            data: data,
            backgroundStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(68, 145, 253, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(68, 145, 253, .25)'
                }, {
                  offset: 0,
                  color: 'rgba(68, 145, 253, 1)'
                }],
                globalCoord: false
              },
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 20,
                borderColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(69, 73, 240, 0)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(69, 73, 240, .25)'
                  }, {
                    offset: 1,
                    color: 'rgba(69, 73, 240, 1)'
                  }],
                  globalCoord: false
                },
                shadowBlur: 10,
                shadowColor: '#000',
              }
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 1,
                  color: 'rgba(58, 71, 212, 0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(31, 222, 225, .2)'
                }, {
                  offset: 0,
                  color: 'rgba(31, 222, 225, 1)'
                }],
                globalCoord: false
              },
            },
            label: {
              normal: {
                formatter: '',
              }
            }
          },]
        };
        // 使用刚指定的配置项和数据显示图表。
        this.charts.setOption(option);
      },
      enter() {
    this.seen = true;
  },
  leave() {
    this.seen = false;
  },
  }
  }
</script>
<style scoped>
.edittool{
   z-index:12;
  position: absolute;
  left: 180px;
  top: 260px;
  font-size: 16px;

  padding: 12px;
    border-radius: 6px;
    backdrop-filter: blur(40px);
    background-color: rgba(246,246,246,.4);
    color:#2b528e;
}
</style>
