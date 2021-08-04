<template>
  <div>
    <div style="text-align: center; padding: 10px; font-size: 20px">
      速率
    </div>
    <div ref="echarts1a5" style="width:710px;height:240px"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: false,
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      chartInstance: null,
      option: {},
      xiadata:[0,0,0,0,0,0,0],
      shangdata:[0,0,0,0,0,0,0]
     
    };
  },
  
  mounted() {
     
    this.initChart();
    this.updateChart();
     this.getTheWeather();
    window.addEventListener("resize", this.handleResize);
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
                    let url ='39.106.116.109:9095/api/netspeed'; 
                    // const WebSocket=require('ws') 
                    let ws = new WebSocket(`ws://${url}`);
                    // 连接成功
                    ws.onopen = function () {
                        // Web Socket 已连接上，使用 send() 方法发送数据
                        ws.send("这是发送的测试数据");
                        console.log('速率连接成功');
                    };
                    // 接收数据处理
                    ws.onmessage = function (evt) {
                        const msg = JSON.parse(evt.data);
                        // that.xia=msg.data[0];
                       that.xiadata.shift()
                       that.xiadata.push(msg.data[0])
                       that.shangdata.shift()
                       that.shangdata.push(msg.data[1])
                      //  console.log(that.xiadata)
                        that.updateChart()
                        
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
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.echarts1a5);
    },
    updateChart() {
      this.option = {
        title: {
          text: "堆叠区域图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#00ffff"
            },
          },
        },
        legend: {
          data: ["下载速度", "上传速度"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["2s", "4s", "6s", "8s", "10s", "12s", "14s"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "下载速度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data:this.xiadata,
          },
          {
            name: "上传速度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data:this.shangdata,
          },
        ],
      };

      this.chartInstance.setOption(this.option);
    },

    // 当浏览器大小发生变化会调用该方法，完成屏幕适配
    handleResize() {
      this.chartInstance && this.chartInstance.resize();
    },
    beforeDestroy() {
      this.chartInstance && this.chartInstance.dispose();
      this.chartInstance = null;
      window.removeEventListener("resize", this.handleResize);
    },
  },
};
</script>
<style scoped>
</style>
