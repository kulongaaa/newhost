
<template>
  <div>
	<div style="text-align:center;padding:5px;font-size:20px;" >网络流量(/min)</div>
    <div  id="weilitizhuzhuangtu" style="height:240px;width:690px"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        charts: '',
        down:[0,0,0,0,0],
        up:[0,0,0,0,0],
        timea:[0,0,0,0,0],
      }
    },
    mounted() {
      this.init("weilitizhuzhuangtu")
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
                    let url ='39.106.116.109:9095/api/netflow'; 
                    // const WebSocket=require('ws') 
                    let ws = new WebSocket(`ws://${url}`);
                    // 连接成功
                    ws.onopen = function () {
                        // Web Socket 已连接上，使用 send() 方法发送数据
                        ws.send("这是发送的测试数据");
                        console.log('1连接成功');
                    };
                    // 接收数据处理
                    ws.onmessage = function (evt) {
                        const msg = JSON.parse(evt.data);

                        msg.data.reverse().forEach((v,index) => {
                          that.down[index] = v.download
                          that.up[index] = v.up
                          that.timea[index] =v.date
                        });   
                      //  that.down.push(msg.data[0].download)
                         that.init("weilitizhuzhuangtu")
                        
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
      init(id) {
        this.charts = this.$echarts.init(document.getElementById(id))

        
        this.option = {
    color: ['#80FFA5', '#00DDFF'],
    title: {
        text: '渐变堆叠面积图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: this.timea
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '下载量',
            type: 'line',
            stack: '下载量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(128, 255, 165)'
                }, {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: this.down
        },
        {
            name: '上传量',
            type: 'line',
            stack: '上传量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 221, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(77, 119, 255)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: this.up
        }
        
           
           
    ]
};


        // 使用刚指定的配置项和数据显示图表。
        this.charts.setOption(this.option);
      }
    },

  }
</script>
<style scoped>

</style>
