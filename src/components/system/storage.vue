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
                        <div>上限:<input type="text" v-model="max"/>%</div>
                        <div>下限:<input type="text" v-model="min"/>%</div>
                    </div>
                    <p class="pbtn">自动清理</p>
                    <el-switch
                            v-model="valueSwitch"
                            class="btn">
                    </el-switch>
                </div>
            </div>
            <div class="right">
                <h4 id="clear">日志清除信息</h4>
                <span class="a">
                    <button @click="del">清空</button>
                    <button><i class="el-icon-refresh-left"></i></button>
                </span>
                <!--                <el-table @click.native="add"-->
                <!--                          style="width: 1483px;color: black"-->
                <!--                          :data="tableData"-->
                <!--                          stripe>-->
                <!--                    <el-table-column-->
                <!--                            prop="name"-->
                <!--                            label="名称">-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                            prop="state"-->
                <!--                            label="状态"-->
                <!--                    >-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                            prop="describe"-->
                <!--                            label="状态描述"-->
                <!--                    >-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                            prop="rate"-->
                <!--                            label="速率"-->
                <!--                    >-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                            prop="type"-->
                <!--                            label="传输模式"-->
                <!--                    >-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                            prop="IP"-->
                <!--                            label="IPv4"-->
                <!--                    >-->
                <!--                    </el-table-column>-->
                <!--                    <el-table-column-->
                <!--                            prop="sonNet"-->
                <!--                            label="子网"-->
                <!--                    >-->
                <!--                    </el-table-column>-->
                <!--                    &lt;!&ndash;                <el-table-column&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        prop="change"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        label="修改"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                >&ndash;&gt;-->
                <!--                    &lt;!&ndash;                </el-table-column>&ndash;&gt;-->

                <!--                </el-table-->
                <!--                >-->
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
              if(newValue){
                axios.post('http://39.106.116.109:9099/file/clean',{
                    params:{
                        max:this.max,
                        min:this.min,
                    }
                }).then(res =>{
                    console.log(res);
                })
              }
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
                axios.post('http://39.106.116.109:9099/file/delete').then(res=>{
                    console.log(res);
                })
            }
        },
        async created() {
            const res = await getTxt();
            // this.tableData.date = res;
            console.log(res.data.data);
            this.tableData = res.data.data;
            this.del();
            // const res1 = await getTest()
            // console.log(res1);
        }
    }
</script>

<style scoped>
    /*.table-wrapper ::v-deep .el-table {*/
    /*    !* 表格字体颜色 *!*/

    /*    !* 表格边框颜色 *!*/
    /*    border: 0px solid #ffffff;*/
    /*    height: 80%;*/
    /*}*/

    /*.el-button+.el-button {*/
    /*    margin-left: 0px;*/
    /*}*/

    /*!* 删除表格下横线 *!*/
    /*.table-wrapper ::v-deep .el-table::before {*/
    /*    left: 0;*/
    /*    bottom: 0;*/
    /*    width: 100%;*/
    /*    height: 0px;*/
    /*}*/
    /*!* 删除单元格底部横线 *!*/
    /*.right ::v-deep .el-table td {*/
    /*    border-bottom: 2px solid #dfe6ec !important;*/
    /*}*/

    /*.right ::v-deep .el-table--fit {*/
    /*    padding: 0px;*/
    /*}*/
    /*.right ::v-deep .el-table,*/
    /*.el-table__expanded-cell {*/
    /*    background-color: transparent;*/
    /*}*/

    /*.right ::v-deep .el-table tr {*/
    /*    !* background-color: transparent !important; *!*/
    /*    background-color: #262a2e;*/
    /*    color: aqua;*/
    /*}*/
    /*.right ::v-deep .el-table--enable-row-transition .el-table__body td,*/
    /*.el-table .cell {*/
    /*    background-color: transparent;*/
    /*}*/
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
        margin-bottom: 70px;
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