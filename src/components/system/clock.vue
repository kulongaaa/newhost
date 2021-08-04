<template>
    <div class="box">
        <h2>系统时间</h2>
        <div class="items">
            <div>
                <span> 系统时间
<!--                    <span v-if="value == 0">{{ this.date0 }}</span>-->
<!--                    <span >{{ this.date1 }}</span>-->
                        <input type="text" v-model="this.date1" style="width:40%;height: 30px" disabled="" class="txt1">
                </span>
<!--                <button class="btn1">重启服务</button>-->
            </div>
            <div>系统同步服务IP<input  v-model='ip' class="txt" type="text"/></div>
            <div>
<!--                <span>自动同步系统时间</span>-->
               <div class="on">
<!--                   <el-tooltip :content="'Switch value: ' + value" placement="top" @click.native="log">-->
<!--                       <el-switch-->
<!--                               v-model="value"-->
<!--                               active-color="#13ce66"-->
<!--                               inactive-color="#ff4949"-->
<!--                               active-value="100"-->
<!--                               inactive-value="0">-->
<!--                       </el-switch>-->
<!--                   </el-tooltip>-->
               </div>
            </div>
            <div>
<!--                <span>系统管理IP:{{IP}}</span>-->
            </div>
            <div>
<!--                <button class="btn2" @click="exchange">保存</button>-->
                <el-button
                        class="btn"
                        plain
                        @click="open1">
                        同步
                </el-button>
                <el-button
                        class="btn"
                        plain
                        @click="open2">
                    连通性测试
                </el-button>
<!--                <button class="btn2" @click="exchange">连通性测试</button>-->
<!--                <span v-show='this.a==0' class="success"></span>-->
<!--                <span v-show='this.a==1' class="success">{{isSuccess}}</span>-->
            </div>
            <div class="clock"><clock size="300px"></clock></div>
<!--            <div ref="myChart" :style="{width: '300px', height: '300px'}"></div>-->
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {getClock} from "../../api/network";
    import Clock from 'vue-clock2';
    export default {
        name: "time",
        components:{
            Clock
        },
        data(){
            return{
                date0:new Date(),
                date1:new Date(),
                value: '0',
                ip:'',
                isSuccess:'已成功保存!!!',
                a:'0',
                chartInstance: null,
                option: {},
                time:new Date()
            }
        },
        async created() {
            // this.open1();
            // this.open2();
            const {data} = await getClock();
            this.IP = data.data.defaultIpv4;
            console.log( data.data.defaultIpv4)

            const this_ = this; //声明一个变量代表this，保证this的指向正确
            const setTime = setInterval(function() {  //使用定时器，每一秒执行一次
                this_.nowTime = //将获取的时间戳转换成日常的时间格式
                    new Date().getFullYear() + "-" +
                    this_.appendZero((new Date().getMonth() + 1)) + "-" +
                    this_.appendZero(new Date().getDate()) + " " +
                    this_.appendZero(new Date().getHours()) + ":" +
                    this_.appendZero(new Date().getMinutes()) + ": " +
                    this_.appendZero(new Date().getSeconds());
            }, 1000);
            return setTime;
        },
        mounted() {
            let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(() => {
                _this.date1 = new Date(); // 修改数据date
            }, 1000)
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
            }
        },
        methods:{
            // 将小于10的在前面加0
            appendZero(time){
                if (time < 10) {
                    return "0" + time;
                }else {
                    return time;
                }
            },
            // log(){
            //     console.log('a');
            // }
            // exchange(){
            //     this.a = 1;
            // }
            open1() {
                this.$notify({
                    title: '同步',
                    message: '已同步！！！',
                    type: 'success'
                });
                axios.post('http://39.106.116.109:9095/api/conf/setAutoTime',{
                    params:{
                        ip:this.ip
                    }
                }).then(res =>{
                    console.log(res);
                })
            },
            open2() {
                this.$notify({
                    title: '连通性测试',
                    message: '连通测试成功！！！',
                    type: 'success'
                });
                axios.get('http://39.106.116.109:9095/api/conf/testPing',{
                    
                })
            },
        }
    }
</script>

<style scoped>
    body{

    }
    .box{
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
       
        /*position: fixed;*/
        /*margin-top: -20px;*/
        font-size: 16px;
        /*background: url("../../assets/c.png") no-repeat center;*/
        color: black;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
        padding: 20px;
        /*background-color: white;*/
        background-color: #ece9e9;
    }
    .items>div{
        margin: 35px;
    }
    h2{
        margin-left: 40px;
    }
    .btn1{
        margin-left: 20px;
        width: 60px;
        height: 60px;
        border-radius: 60px;
        background-color:#13ce66;
    }
    .btn{
        margin-left: 150px;
        width: 120px;
        height: 50px;
        border: 1px solid gray;
        border-radius: 10px;
        background-color: white;
    }
    .items{
        position: absolute;
        width: 80%;
        height: 45%;
        margin-left: 90px;
        /*left: 50%; top: 50%;*/
        /*transform: translate(-50%,-50%);*/
        /*background-color: white;*/
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        background-color: white;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
        /*border-radius: 5px;*/
        /*color: #00FFFF;*/
        /*border:8px solid green;*/
        /*border-radius: 10px;*/
        /*-moz-box-shadow:0 0 10px #06c;*/
        /*-webkit-box-shadow:0 0 10px #06c;*/
        /*box-shadow:0 0 20px green;*/
    }
    .on{
        /*margin-left: 10px;*/
    }
    .success{
        margin-left: 50px;
        font-size: 30px;
    }
    .txt{
        margin-top: 30px;
        width: 40%;
        height: 30px;
        margin-left: 40px;
    }
    .txt1{
        margin-left: 80px;
    }
    .txt,.txt1{
        border-radius: 10px;
    }
    .clock{
        margin-left: 850px;
        margin-top: -280px;
    }
</style>