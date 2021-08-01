<template>
    <div class="box">
        <h2>系统时间</h2>
        <div class="items">
            <div>
                <span> 系统时间:
                    <span v-if="value == 0">{{ this.date0 }}</span>
                    <span v-if="value == 100">{{ this.date1 }}</span>
                </span>
                <button class="btn1">重启服务</button>
            </div>
            <div>
                <span>自动同步系统时间</span>
               <div class="on">
                   <el-tooltip :content="'Switch value: ' + value" placement="top" @click.native="log">
                       <el-switch
                               v-model="value"
                               active-color="#13ce66"
                               inactive-color="#ff4949"
                               active-value="100"
                               inactive-value="0">
                       </el-switch>
                   </el-tooltip>
               </div>
            </div>
            <div>
                <span>系统管理IP:{{IP}}</span>
            </div>
            <div>
                <button class="btn2" @click="exchange">保存</button>
                <span v-show='this.a==0' class="success"></span>
                <span v-show='this.a==1' class="success">{{isSuccess}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {getClock} from "../../api";
    export default {
        name: "time",
        data(){
            return{
                date0:new Date(),
                date1:new Date(),
                value: '0',
                IP:'',
                isSuccess:'已成功保存!!!',
                a:'0'
            }
        },
        async created() {
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
            exchange(){
                this.a = 1;
            }
        }
    }
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100%;
        position: fixed;
        /*margin-top: -20px;*/
        font-size: 16px;
        background: url("../../assets/c.png") no-repeat center;
        color: #00FFFF;
    }
    .items>div{
        margin: 35px;
    }
    .btn1{
        margin-left: 20px;
        width: 60px;
        height: 60px;
        border-radius: 60px;
        background-color:#13ce66;
    }
    .btn2{
        width: 100px;
        height: 50px;
        border-radius: 10px;
        background-color: green;
    }
    .items{
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%,-50%);
        background-color: #262a2e;
        color: #00FFFF;
        border:8px solid green;
        border-radius: 10px;
        /*-moz-box-shadow:0 0 10px #06c;*/
        /*-webkit-box-shadow:0 0 10px #06c;*/
        box-shadow:0 0 20px green;
    }
    .on{
        /*margin-left: 10px;*/
    }
    .success{
        margin-left: 50px;
        font-size: 30px;
    }
</style>