<template>
    <div class="box">
        <h2>存储管理</h2>
        <h4>磁盘清理</h4>
        <div class="big">
            <div class="left">
              <div class="limit">
                  上限: <input type="text" v-model="mesA"/>
                  下限: <input type="text" v-model="mesB"/>
              </div>
                自动清理<el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
            </el-switch>
            </div>
            <div class="right">
                清理的数据记录:
                <button>清空</button>
                <button>刷新</button>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "storage",
        data(){
            return{
                mesA:'',
                mesB:'',
                value:'',
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
        }
    }
</script>

<style scoped>
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
    .right ::v-deep .el-table td {
        border-bottom: 2px solid #dfe6ec !important;
    }

    .right ::v-deep .el-table--fit {
        padding: 0px;
    }
    .right ::v-deep .el-table,
    .el-table__expanded-cell {
        background-color: transparent;
    }

    .right ::v-deep .el-table tr {
        /* background-color: transparent !important; */
        background-color: #262a2e;
        color: aqua;
    }
    .right ::v-deep .el-table--enable-row-transition .el-table__body td,
    .el-table .cell {
        background-color: transparent;
    }
    .box{
        width: 100%;
        height: 100%;
        position: fixed;
        font-size: 16px;
        background: url("../../assets/c.png") no-repeat center;
        /*margin-top: 0px;*/
        color: #00FFFF;
    }
    .big{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 75px;
    }
    .right{
        width: 800px;
        height: 300px;
    }
    .limit{
        width: 100px;
        padding-top: 30px;
    }
    .left{
        width: 200px;
        height: 300px;
        display: flex;
        flex-direction: column;
    }
    .left,.right{
        border:5px solid green;
        border-radius: 5px;
        box-shadow:0 0 5px green;
        background-color: #262a2e;
        margin: 20px;
    }
    button{
        background-color: green;
        margin-right: 10px;
    }
</style>