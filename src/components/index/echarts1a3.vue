<doc>
  npm install echarts-liquidfill
</doc>
<template>
  <div>
    <div id="shuiwen3" style="width: 300px;height:300px;padding:10px;" @mouseenter="enter" @mouseleave="leave"></div>
    <div class="edittool"  v-show="seen">
      磁盘总量(GB):{{dtotal}}<br/>
      空闲磁盘(GB):{{dfree}}
    </div>
  </div>
</template>
<script>
  import "echarts-liquidfill";
  import { getUserInfo } from '../../api/index.js'
  export default {


    data() {
      return {
        edata3:'',
        dtotal:'583.95',
        dfree:'409.41',
        seen:false,
        charts: '',
      }
    },
     async created(){
     const { data } =await getUserInfo();
     this.dtotal=data.data.disk.total,
     this.dfree=data.data.disk.free,
     console.log(data)
     },
    // mounted() {
    //   this.init("shuiwen3")
    // },
    mounted(){
        this.init('shuiwen3')
         this.getTheWeather();
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
                    let ws = new WebSocket(`ws://${url}`);
                    // 连接成功
                    ws.onopen = function () {
                        // Web Socket 已连接上，使用 send() 方法发送数据
                        ws.send("这是发送的测试数据");
                        console.log('3连接成功');
                    };
                    // 接收数据处理
                    ws.onmessage = function (evt) {
                        const msg = JSON.parse(evt.data);
                        that.edata3=msg.data.disk.usage;
                        that.init()
                        
                    };
                    // 连接报错
                    ws.onerror = function () {
                        console.log('连接报错...');
                    }
                    // 连接关闭
                    ws.onclose = function () {
                        // 关闭 websocket
                        console.log("连接已关闭...");
                    }
                } else {
                    // 浏览器不支持 WebSocket
                    console.log("您的浏览器不支持 WebSocket!");
                }
            },
      init() {
        this.charts = this.$echarts.init(document.getElementById('shuiwen3'))
        let value = this.edata3;
        let data = [value, value, value,];
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
              color: 'blue',
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
                text: '磁盘',
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
    },

  }
</script>
<style scoped>
.edittool{
   z-index:12;
  position: absolute;
  left: 820px;
  top: 260px;
  font-size: 16px;
  padding: 12px;
    border-radius: 6px;
    backdrop-filter: blur(40px);
    background-color: rgba(246,246,246,.4);
    color:#2b528e;
}
</style>
