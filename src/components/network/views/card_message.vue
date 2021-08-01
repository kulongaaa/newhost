<template>
    <div>
       <div class="card">
           <el-table @click.native="add"
                   style="width: 1483px;color: black"
                   :data="tableData"
                   stripe>
               <el-table-column
                       prop="InterName"
                       label="名称">
               </el-table-column>
               <el-table-column
                       prop="broadcast"
                       label="广播地址"
                     >
               </el-table-column>
               <el-table-column
                       prop="MAC"
                       label="MAC地址"
                       >
               </el-table-column>
               <el-table-column
                       prop="mtu"
                       label="速率"
                       >
               </el-table-column>
               <el-table-column
                       prop="douplex"
                       label="传输模式"
                      >
               </el-table-column>
               <el-table-column
                       prop="ip"
                       label="IPv4"
                     >
               </el-table-column>
               <el-table-column
                       prop="netmask"
                       label="子网"
                   >
               </el-table-column>
<!--               <el-table-column-->
<!--                       prop="change"-->
<!--                       label="修改"-->
<!--               >-->
<!--               </el-table-column>-->

           </el-table
           >
           <div>{{this.tableData}}</div>
       </div>
<!--        <div>{{this.tableData}}</div>-->
    </div>
</template>

<script>
    import {get} from "../../../api";

    export default {
        name: "card",
        data(){
            return {
                tableData: [{
                    InterName:'',
                    broadcast:'',
                    MAC:'',
                    mtu:'',
                    douplex:'',
                    ip:'',
                    netmask:'',
                    // change:'修改'
                }]
            }
        },
        methods:{
            // add(){
            //     console.log('dasdasdddddda');
            // }
        },
        async created(){
            const { data } = await get();
            this.tableData = data
            console.log(data.data);
        }

    }
</script>

<style scoped>
    .card{
       margin: 0 auto;
        border:5px solid green;
        border-radius: 5px;
        box-shadow:0 0 5px green;
        background-color: #262a2e;
    }
    .table-wrapper ::v-deep .el-table {
        /* 表格字体颜色 */

        /* 表格边框颜色 */
        border: 0px solid #ffffff;
        height: 80%;
    }

    .el-button+.el-button {
        margin-left: 0px;
    }

    /* 删除表格下横线 */
    .table-wrapper ::v-deep .el-table::before {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0px;
    }
    /* 删除单元格底部横线 */
    .card ::v-deep .el-table td {
        border-bottom: 2px solid #dfe6ec !important;
    }

    .card ::v-deep .el-table--fit {
        padding: 0px;
    }
    .card ::v-deep .el-table,
    .el-table__expanded-cell {
        background-color: transparent;
    }

    .card ::v-deep .el-table tr {
        /* background-color: transparent !important; */
        background-color: #262a2e;
        color: aqua;
    }
    .card ::v-deep .el-table--enable-row-transition .el-table__body td,
    .el-table .cell {
        background-color: transparent;
    }
</style>