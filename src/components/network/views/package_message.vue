<template>
    <div>
       <div class="form">
           <el-table
                   :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                   style="width: 1672px">
               <el-table-column
                       label="文件名称"
                       prop="name">
               </el-table-column>
               <el-table-column
                       label="时间"
                       prop="time">
               </el-table-column>
               <el-table-column
                       label="协议"
                       prop="protocol">
               </el-table-column>
               <el-table-column
                       label="源地址"
                       prop="address">
               </el-table-column>
               <el-table-column
                       label="目的地址"
                       prop="destination">
               </el-table-column>
               <el-table-column
                       align="right">
                   <template slot="header" slot-scope="{}">

                   </template>
                   <template slot-scope="scope" >
                       <el-button
                               size="mini"
                               @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                       <el-button
                               size="mini"
                               type="danger"
                               @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                   </template>
               </el-table-column>
           </el-table>
       </div>
        <div><pack1/></div>
        <div><pack2/></div>
    </div>
</template>

<script>
    import pack1 from './pack1'
    import pack2 from "./pack2";
    export default {
        name: "package",
        components:{
            pack1,
            pack2
        },
        data() {
            return {
                tableData: [{
                    name:'A',
                    time:'哈哈哈',
                    protocol:'C',
                    address:'D',
                    destination:'E'
                },{
                    name:'A',
                    time:'B',
                    protocol:'C',
                    address:'D',
                    destination:'E'
                },{
                    name:'A',
                    time:'B',
                    protocol:'C',
                    address:'D',
                    destination:'E'
                },{
                    name:'A',
                    time:'B',
                    protocol:'C',
                    address:'D',
                    destination:'E'
                },{
                    name:'A',
                    time:'B',
                    protocol:'C',
                    address:'D',
                    destination:'E'
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
    }
</script>

<style scoped>
    *{
        font-size: 14px;
    }
    .form{
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
    .form ::v-deep .el-table td {
        border-bottom: 2px solid #dfe6ec !important;
    }

    .form ::v-deep .el-table--fit {
        padding: 0px;
    }
    .form ::v-deep .el-table,
    .el-table__expanded-cell {
        background-color: transparent;
    }

    .form ::v-deep .el-table tr {
        /* background-color: transparent !important; */
        background-color: #262a2e;
        color: aqua;
    }
    .form ::v-deep .el-table--enable-row-transition .el-table__body td,
    .el-table .cell {
        background-color: transparent;
    }

</style>