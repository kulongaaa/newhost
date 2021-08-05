<template>
    <div class="box">
        <h2>存储管理</h2>
        <!--        <h4>磁盘清理</h4>-->
        <div class="big">
            <div class="left">
                <div class="limit">
                    <h4 >磁盘清理管理</h4>
                    <p>磁盘清理</p>
                    <div class="updown">
                        <div>上限:<input type="text" v-model="max"  placeholder="请输入0到100的数字"/>%</div>
                        <div>下限:<input type="text" v-model="min" placeholder="请输入0到100的数字"/>%</div>
                    </div>
<!--                    <button class="btn" @click="clear">自动清理</button>-->
                    <p class="pbtn">自动清理</p>
                    <el-switch
                            @change="clear"
                            v-model="valueSwitch"
                            class="btn">
                    </el-switch>
                </div>
            </div>
            <div class="right">
                <h4 id="clear">日志清除信息</h4>
                <span class="a">
                    <button @click="del">清空</button>
                    <button @click="fresh"><i class="el-icon-refresh-left"></i></button>
                </span>

                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="content"
                            label="数据条"
                            width="390"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="时间"
                            width="390"
                    >
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {getTxt} from "../../api/network";
    // import {getTest} from "../../api/network";
    export default {
        name: "storage",
        watch:{
          valueSwitch: (newValue, oldValue)=>{
              console.log(newValue)
              console.log(oldValue)
          }
        },
        data() {
            return {
                max: '',
                min: '',
                valueSwitch: false,
                tableData: [{
                    content:'',
                    time:'',
                }
                ]
                // tableData: [{
                //     name:'A',
                //     state:'B',
                //     describe:"C",
                //     rate:"D",
                //     type:'E',
                //     IP:"F",
                //     sonNet:"G",
                //     // change:"H"
                // }]
            }
        },
        methods: {
            del(){
                axios.post('http://39.106.116.109:9095/file/delete').then(res=>{
                    console.log(res);
                })
            },
            clear(){
                if(this.max === '' || this.min === ''){
                    this.valueSwitch = false;
                    alert('必须输入！！！');
                }else {
                    // if(typeof (this.max && this.min) === "number"){
                        this.$notify({
                            title: '清理',
                            message: '开始自动清理！！！',
                            type: 'success'
                        });
                        axios.post('http://39.106.116.109:9095/file/clean',{
                            params:{
                                max:this.max,
                                min:this.min,
                            }
                        }).then(res =>{
                            console.log(res);
                        })
                    // }else {
                    //     alert('请输入0到100的数字');
                    // }

                }
                // else {
                //     if(typeof (this.max && this.min)=== 'number'){
                //         // if(0<this.max<100){
                //         //     this.$notify({
                //         //         title: '清理',
                //         //         message: '开始清理！！！',
                //         //         type: 'success'
                //         //     });
                //         // }
                //     }else {
                //         alert('请输入0到100的数字')
                //     }
                //
                //
            },
            fresh(){
                axios.get('http://39.106.116.109:9095/file/queryAll').then(res=>{
                    console.log(res.data.data);
                    this.tableData = res.data.data;
                })
            }
        },
        async created() {
            const res = await getTxt();
            // this.tableData.date = res;
            // console.log(res.data.data);
            this.tableData = res.data.data;
            // this.del();
            // const res1 = await getTest()
            // console.log(res1);
        }
    }
</script>

<style scoped>
    .box {
        width: 90%;
        height: 90%;
        position: fixed;
        font-size: 16px;
        /*border: 1px solid gray;*/
        margin-left: 90px;
        margin-top: 10px;
        /*background: url("../../assets/c.png") no-repeat center;*/
        /*margin-top: 0px;*/
        color: black;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 10px;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
        background-color: white;
    }
    .btn{
        /*width: 90px;*/
        /*height: 40px;*/
        /*margin-left: 150px;*/
    }
    .big {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /*padding-top: 75px;*/
        width: 90%;
        height: 80%;
        /*border: 1px solid gray;*/
        margin-left: 100px;
        border-radius: 10px;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
        background-color: white;
    }

    .right {
        width: 780px;
        height: 300px;
    }

    .limit {
        margin-top: 20px;
        /*width: 100px;*/
        /*padding-top: 30px;*/
    }

    .left {
        width: 30%;
        display: flex;
        flex-direction: column;
    }

    .left, .right {
        border-radius: 10px;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
        background-color: white;
        /*border:1px solid gray;*/
        /*border-radius: 5px;*/
        /*box-shadow:0 0 5px green;*/
        /*background-color: #262a2e;*/
        margin: 20px;
        height: 90%;
    }

    /*button{*/
    /*    background-color: green;*/
    /*    margin-right: 10px;*/
    /*}*/
    #clear {
        display: inline-block;
    }

    .date {
        /*background-color: gray;*/
        /*padding-left: 20px;*/
    }

    p {
        margin-left: 30px;
        margin-top: 40px;
    }

    .updown {
        margin-top: 50px;
        margin-left: 100px;
        /*padding: 20px;*/
    }

    .updown > div {
        margin-bottom: 40px;
    }

    .updown > div > input {
        width: 200px;
        height: 30px;
    }

    .btn {
        margin-left: 150px;
        /*margin-bottom: 65px;*/
        /*color:black;*/
        /*border: 1px solid rgba(0,0,0,.2);*/
    }

    .pbtn {
        margin-bottom: -20px;
    }

    button {
        color: deepskyblue;
        width: 50px;
        height: 40px;
        border-radius: 10px;
        margin-right: 20px;
    }

    .a {
        margin-left: 520px;
    }

    .limit > h4 {
        margin-top: 5px;
    }

    .onoff {
        /*position: fixed;*/
        /*background-color: white;*/
        /*border: 1px solid rgba(0,0,0,0);*/
        /*background-color: red;*/
    }
</style>