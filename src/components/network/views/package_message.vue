<template>
    <div>
<!--        <div>{{this.tableData}}</div>-->
<!--            <div>{{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`}}</div>-->
<!--                <div>{{this.data}}</div>-->
<!--                <div>{{this.message}}</div>-->
       <div class="form">
           <el-table
                   :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                   style="width: 1672px">
               <el-table-column
                       label="文件名称"
                       prop="data">
               </el-table-column>
               <el-table-column
                       label="抓包时间"
                       prop="time">
               </el-table-column>
               <el-table-column
                       align="right">
                   <template slot="header" slot-scope="{}">
                   </template>
                   <template slot-scope="scope" >
                       <el-button
                               size="mini"
                               type="danger"
                               @click="handleDelete(scope.row)">查看数据</el-button>
                       <el-dialog title="抓包信息" :visible.sync="dialogTableVisible">
<!--                           <el-table :data="gridData">-->
<!--                               <el-table-column property="date" label="日期" width="150"></el-table-column>-->
<!--                               <el-table-column property="name" label="姓名" width="200"></el-table-column>-->
<!--                               <el-table-column property="address" label="地址"></el-table-column>-->
<!--                           </el-table>-->
                                <el-div ><pre style="width: 1px; ">{{message}}</pre></el-div>
<!--                           <el-input v-model="message" placeholder="请输入内容"></el-input>-->
                       </el-dialog>
                   </template>
               </el-table-column>
           </el-table>
       </div>
<!--        <div><pack1/></div>-->
<!--        <div><pack2/></div>-->
    </div>
</template>

<script>
    // import pack1 from './pack1'
    // import pack2 from "./pack2";
    // import {getEnd} from "../../../api/network";
    import axios from 'axios'
    import {getStart} from "../../../api/network";
    import {getName} from "../../../api/network";
    // import JsonViewer from 'vue-json-viewer'
    export default {
        name: "package",
        components:{
            // JsonViewer
            // pack1,
            // pack2
        },
        // props: {
        //     pgkData
        // },
        data() {
            return {
                tableData: [{
                    data:'2021-8-3/1627971411.8583562.pcap',
                    // data:'',
                    time:'2021-8-3'
                }, {
                    data:'2021-8-3/1627975950.0583127.pcap',
                    // data:'',
                    time:'2021-8-3'
                },{
                    data:'2021-8-4/1628046316.3956172.pcap',
                    // data:'',
                    time:'2021-8-4'
                },{
                    data:'2021-8-4/1628046367.6266155.pcap',
                    // data:'',
                    time:'2021-8-4'
                },
                ],
                // gridData: [{
                //     date: '2016-05-02',
                //     name: '王小虎',
                //     address: '上海市普陀区金沙江路 1518 弄'
                // }],
                message:'',
                dialogTableVisible: false,
            }
        },
        methods: {
            handleDelete(row) {
                console.log(row.data);
                this.dialogTableVisible = true;
                axios.get('http://39.106.116.109:9099/api/package/getParsePcap',{
                    params:{
                        pacp_path:row.data
                    }
                }).then(res =>{
                    this.message = res.data.data;
                })
            }
        },
        async created(){
            //filename
            const {data} = await getStart();
            this.tableData.data = data.data.filename;
            console.log(this.tableData.data)
            //包的名称展示
            const res = await getName();
            // let result = [];
            // let resultName = '';
            // let resultTime = '';
            // let datas = res.data.data;
            this.tableData = res.data;
            console.log(res.data.data)
            // for (var index in datas) {
                // for (var key in datas[index]) {
                    // for (var pcapIndex in datas[index][key]) {
                        // var date = new Date(parseFloat(datas[index][key][pcapIndex].split(".")[0]) * 1000)
                        // console.log(datas[index])
                        // this.tableData = datas[index];
                        // console.log(this.data);
                        // console.log(datas[index])
                        // this.time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}'
                        // result.push({
                        //     name: datas[index][key][pcapIndex],
                        //     time: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
                        // })
                        // this.data = datas[index][key][pcapIndex];
                        // this.status = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
                        // console.log(datas[index][key][pcapIndex])
                        // this.data = datas[index][key][pcapIndex];
                        // console.log(this.data);
                        // // console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`)
                        // this.time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
                        // resultName = datas[index][key][pcapIndex];
                        // resultTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
                    // }
                // }
            // }
            // this.data = resultName;
            // this.time = resultTime;
            // this.data = resultTime;
            // // console.log(this.data())
            // // this.data = resultTime;
            // console.log(resultName);
            // console.log(resultTime);
            // console.log(result);
            // console.log(result)

            //查看数据
            // const {data} = await getEnd();
            // this.message = data.data;
            // this.tableData = data.data;
            // console.log(this.tableData)
            // console.log(data.data)
        }
    }
</script>

<style scoped>
    *{
        font-size: 14px;
    }
    .form{
        /*height: 100%;*/
        /*border:1px solid gray;*/
        /*border-radius: 5px;*/
        /*box-shadow:0 0 5px green;*/
        /*background-color: #262a2e;*/
    }
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
    /*.form ::v-deep .el-table td {*/
    /*    border-bottom: 2px solid #dfe6ec !important;*/
    /*}*/

    /*.form ::v-deep .el-table--fit {*/
    /*    padding: 0px;*/
    /*}*/
    /*.form ::v-deep .el-table,*/
    /*.el-table__expanded-cell {*/
    /*    background-color: transparent;*/
    /*}*/

    /*.form ::v-deep .el-table tr {*/
    /*    !* background-color: transparent !important; *!*/
    /*    background-color: #262a2e;*/
    /*    color: aqua;*/
    /*}*/
    /*.form ::v-deep .el-table--enable-row-transition .el-table__body td,*/
    /*.el-table .cell {*/
    /*    background-color: transparent;*/
    /*}*/

</style>