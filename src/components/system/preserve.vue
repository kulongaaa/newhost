<template>
    <div class="box">
        <h2>设备操作</h2>
        <div class="all">
<!--            <h4>设备操作</h4>-->
            <div class="big">
                <div class="picture1">
                    <img src="../../assets/restart.png">
                </div>
                <div class="picture2">
                    <img src="../../assets/off.png">
                </div>
                <div class="picture3">
                    <img src="../../assets/restart.png">
                </div>
                <div class="picture4">
                    <img src="../../assets/ssh.png">
                </div>
                <div class="a">
                    <h4 >重启设备</h4>
                    <div class="page">重启设备，页面会在一段时间内消失</div>
                    <div><button @click="restart1">重启</button></div>
                </div>
                <div class="b">
                    <h4 class="offA">关机</h4>
                   <div class="pageA">关机设备,页面会消失</div>
                    <div><button class="off">关机</button></div>
                </div>
                <div class="c">
                    <h4>重启服务</h4>
                  <div class="page">重启服务，页面会在一段时间内消失</div>
                    <div><button @click="restart2">重启</button></div>
                </div>
                <div class="d">
                    <h4 class="page">SSH Service</h4>
                   <div class="pageD">开启和关闭本机的SSH服务</div>
                    <el-switch
                            @change="change"
                            active-text="开"
                            inactive-text="关"
                            class="switch"
                            v-model="valueSwitch"
                            active-color="deepskyblue"
                            inactive-color="#ff4949">
                     </el-switch>

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
    // import {getpre} from "../../api";
    //  import { saveAs } from 'file-saver'

    import axios from 'axios'
    import {getPre} from "../../api/network";
    export default {
        name: "preserve",
        data() {
            return {
                mesA: '',
                valueSwitch:false,
            }
        },
        methods: {
            change(){
                // console.log('a');
               if(this.valueSwitch === true){
                   this.$notify({
                       message: 'SSH服务开启！！！',
                       type: 'success'
                   });
                   // console.log('a');
                   axios.post('http://39.106.116.109:9095/api/conf/setSSHService',{
                       params:{
                           ssh:this.valueSwitch
                       }
                   }).then(res=>[
                       console.log(res)
                   ])
               }else {
                   this.$notify({
                       message: 'SSH服务关闭！！！',
                       type: 'close'
                   });
               }
            },
            open1() {
                this.$notify({
                    title: '成功',
                    message: '日志下载成功！！！',
                    type: 'success'
                });
                window.open('http://39.106.116.109:9095/api/sys/downLoadLog')
                // axios({
                //     url: 'http://39.106.116.109:9099/api/sys/downLoadLog',
                //     method: 'get',s
                //     headers: {
                //         responseType: 'blob'
                //     }
                // }).then(res=>{
                //     console.log(res.headers)
                //     saveAs(new Blob([res.data]), 'logInfo.xls')
                // }
                //
                // )
                // axios.get('http://39.106.116.109:9099/api/sys/downLoadLog',  {responseType: 'blob'}).then(res=>{
                //    // saveAs(new Blob[res.data], 'txt.xls')
                //
                // })
            },
            restart1(){
                // axios.get('http://39.106.116.109:9095/api/conf/reboot')
                this.$notify({
                    title: '成功',
                    message: '重启成功！',
                    type: 'success'
                });
            },
            restart2(){
                // axios.get('http://39.106.116.109:9095/api/conf/restart').then(res =>{
                //     console.log(res);
                // })
                // console.log('a');
                this.$notify({
                    title: '成功',
                    message: '重启成功！',
                    type: 'success'
                });
            }
            },
            async created() {
                const res = await getPre();
                this.mesA = res.data.data.hostName;
                // console.log(res.data.data);
            }
    }
</script>

<style scoped>
    .box{
        width: 90%;
        height: 90%;
        /*display: flex;*/
        /*margin-top: -20px;*/
        position: fixed;
        font-size: 16px;
        /*border: 1px solid gray;*/
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
        margin-left:75px;
        margin-top: 10px;
        /*background: url("../../assets/c.png") no-repeat center;*/
        /*color: #00FFFF;*/
        background-color: white;
        color: black;
    }
    .all{
        /*border: 1px solid gray;*/
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
        width:1212px;
        height: 80%;
        margin-left:90px;
        background-color: white;
        /*font-size: 20px;*/
    }
    button{
        background-color: deepskyblue;
        margin:50px;
        width: 100px;
        height: 45px;
        /*border-radius: 45px;*/
    }
    .switch{
        margin:50px;
        width: 100px;
        height: 45px;
        margin-top: 65px;
    }
    .btn{
        margin:0;
        width: 100px;
        height: 50px;
        /*border-radius: 0;*/
        border: 1px solid black;
        background-color: white;
        /*border: 1px solid gray;*/
        color: black;
    }
    .a,.b,.c,.d{
        /*border: 1px solid gray;*/
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        box-shadow: 1px 2px 10px 1px rgb(197 197 197);
        margin: 10px;
        font-size: 12px;
        width: 25%;
        height: 180px;
        text-align: center;
        margin-top: -150px;
        /*background-color:white;*/
    }
    .big{
        display: flex;
        flex-direction: row;
        margin-top: 251px;
        color: black;
        font-size:12px;
        /*border:1px solid rgba(0,0,0,.2);*/
        /*align-items: center;*/
        /*justify-content: center;*/
    }
    .left,.right{
        width: 500px;
        /*border: 1px solid gray;*/
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        box-shadow: 1px 2px 10px 1px rgb(197 197 197);
        /*border:5px solid green;*/
        /*border-radius: 5px;*/
        /*box-shadow:0 0 5px green;*/
        /*background-color: white;*/
    }
    .left{
        margin-left: 80px;
    }
    .right{
        margin-left: 50px;
    }
    .b>h4{
        /*text-align: center;*/
        /*margin-left: 130px;*/
    }
    .footer{
        display: flex;
        flex-direction: row;
        text-align: center;
        margin-top: 60px;
    }
    .page{
        height: 30px;
    }
    .a{
        /*position: absolute;*/
    }
    .picture1,.picture2,.picture3,.picture4{
        /*position: relative;*/
        height: 50px;
        width: 50px;
        background-color: white;
        position: fixed;
        margin-top: -185px;
    }
    .picture1{
        margin-left: 127px;
    }
    .picture2{
        margin-left: 430px;
    }
    .picture3{
        margin-left: 732px;
    }
    .picture4{
        margin-left: 1035px;
    }
    img{
        width: 50px;
        height: 50px;
    }
    .off{
        position: fixed;
        margin-left: 92px;
        margin-top: 128px;
    }
    .offA{
        position: fixed;
        margin-left: 128px;
    }
    .pageA{
        position:fixed;
        margin-left: 90px;
        margin-top: 48px;
    }
    .pageD{
        position: fixed;
        margin-top: -15px;
        margin-left: 72px;
    }
</style>