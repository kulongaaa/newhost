<template>
    <div class="box">
        <h2>系统维护</h2>
        <div class="all">
<!--            <h4>设备操作</h4>-->
            <div class="big">
                <div class="a">
                    <h4>重启设备</h4>
                    重启设备，页面会在一段时间内消失
                    <div><button>重启</button></div>
                </div>
                <div class="a">
                    <h4>关机</h4>
                   关机设备,页面在几分钟后不可访问,电源关闭后再拔除电源！
                    <div><button>关机</button></div>
                </div>
                <div class="a">
                    <h4>重启服务</h4>
                    重启服务，页面会在一段时间内消失
                    <div><button>重启</button></div>
                </div>
                <div class="a">
                    <h4>SSH Service</h4>
                     开启和关闭本机的SSH服务
                    <div><button>开启</button></div>
                </div>
            </div>
            <div class="footer">
                <div class="left">
                    <h4>设备信息</h4>
                    设备名称:{{mesA}}
                </div>
                <div class="right">
                    <h4>信息收集</h4>
<!--                    <button class="btn">下载日志信息</button>-->
                    <el-button
                            class="btn"
                            plain
                            @click="open1">
                        下载日志
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getpre} from "../../api";

    export default {
        name: "preserve",
        data() {
            return {
                mesA: '主机监控系统123'
            }
        },
        methods: {
            open1() {
                this.$notify({
                    title: '成功',
                    message: '日志下载成功！！！',
                    type: 'success'
                });
            }
            },
            async created() {
                const {data} = await getpre();
                this.mesA = data.data.hostName;
            }
    }
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100%;
        /*display: flex;*/
        /*margin-top: -20px;*/
        position: fixed;
        font-size: 16px;
        background: url("../../assets/c.png") no-repeat center;
        color: #00FFFF;
    }
    button{
        background-color: green;
        margin:50px;
        width: 45px;
        height: 45px;
        border-radius: 45px;
    }
    .btn{
        margin:0;
        width: 100px;
        height: 50px;
        border-radius: 0;
        background-color: green;
        /*border: 1px solid gray;*/
        color: #00FFFF;
    }
    .a{
        border:5px solid green;
        border-radius: 5px;
        box-shadow:0 0 5px green;
        margin: 10px;
        width: 25%;
        height: 180px;
        text-align: center;
        margin-top: -150px;
        background-color: #262a2e;
    }
    .big{
        display: flex;
        flex-direction: row;
        margin-top: 251px;
        color: #00FFFF;
        font-size:12px;
        /*border:1px solid rgba(0,0,0,.2);*/
        /*align-items: center;*/
        /*justify-content: center;*/
    }
    .left,.right{
        width: 738px;
        border:5px solid green;
        border-radius: 5px;
        box-shadow:0 0 5px green;
        background-color: #262a2e;
    }
    .left{
        margin-left: 10px;
    }
    .right{
        margin-left: 20px;
    }
    h4{
        /*text-align: center;*/
    }
    .footer{
        display: flex;
        flex-direction: row;
        text-align: center;
    }


</style>