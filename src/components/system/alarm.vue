<template>
    <div class="a3">
        <div class="a31">
            <h2>告警值设置</h2>
            <table>
                <tr>
                    <td>CPU:</td>
                    <td>
                        <el-input placeholder="请输入CPU" v-model="cpu" clearable>
                        </el-input>
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>内存:</td>
                    <td>
                        <el-input placeholder="请输入内存" v-model="nei" clearable>
                        </el-input>
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>磁盘:</td>
                    <td>
                        <el-input placeholder="请输入磁盘" v-model="ci" clearable>
                        </el-input>
                    </td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        <el-button
                                size="mini" style="margin:2px"
                                @click="handleEdit(scope.$index, scope.row)"
                        >确定</el-button
                        >
                        <el-button
                                size="mini"
                                type="danger" style="margin:2px"
                                @click="handleDelete(scope.$index, scope.row)"
                        >取消</el-button
                        >
                    </td>
                </tr>
            </table>
        </div>

        <div class="a32">
            <h2>告警推送邮箱</h2>
            <template>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="用户名" width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="邮箱地址" width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="CPU" width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="内存" width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="磁盘" width="180">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)"
                            >编辑</el-button
                            >
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)"
                            >删除</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cpu:"",
                ci:"",
                nei:"",
                tableData: [
                    {
                        date: "2016-05-02",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1518 弄",
                    },
                    {
                        date: "2016-05-04",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1517 弄",
                    },
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1519 弄",
                    },
                    {
                        date: "2016-05-03",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1516 弄",
                    },
                ],
            };
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
        },
    };
</script>

<style scoped>
    .a31 {
        /* text-align: center; */
        padding: 100px;

    }
    .a32{

    }
    .a3 {
        text-align: center;
        display: flex;
        width: 100%;
        height:100%;
        position: fixed;
        color: aqua;
        background:url("../../assets/c.png") no-repeat center;
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
    .a32 ::v-deep .el-table td {
        border-bottom: 2px solid #dfe6ec !important;
    }

    .a32 ::v-deep .el-table--fit {
        padding: 0px;
    }
    .a32 ::v-deep .el-table,
    .el-table__expanded-cell {
        background-color: transparent;
    }

    .a32 ::v-deep .el-table tr {
        /* background-color: transparent !important; */
        background-color: #262a2e;
        color: aqua;
    }
    .a32 ::v-deep .el-table--enable-row-transition .el-table__body td,
    .el-table .cell {
        background-color: transparent;
    }
</style>