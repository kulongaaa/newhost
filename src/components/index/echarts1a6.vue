<template>
<div class="aaa1">
    <div class="aa1">
        <table>
            <tr>
                <td width=80px>系统名称：</td>
                <td>{{b.aa1}}</td>
            </tr>
            <tr>
                <td>供应商：</td>
                <td>{{b.aa2}}</td>
            </tr>
            <tr>
                <td>版本：</td>
                <td>{{b.aa3}}</td>
            </tr>
            <tr>
                <td>处理器:</td>
                <td>{{b.aa4}}</td>
            </tr>
            <tr>
                <td>总内存：</td>
                <td>{{b.aa5}}</td>
            </tr>
            <tr>
                <td>主机名：</td>
                <td>{{b.aa6}}</td>
            </tr>
        </table>
    </div>
</div>
</template>
<script>
import { getUserInfo } from '../../api/index.js'
export default {
    data(){
        return{
            b:{
            aa1:"",
            aa2:"",
            aa3:"",
            aa4:"",
            aa5:"",
            aa6:"",
            }
    }
},
async created(){
     const { data } =await getUserInfo();
     this.b.aa1 = data.data.osName,
     this.b.aa2 = data.data.manufacturer,
     this.b.aa3 = data.data.osVersion,
     this.b.aa4 = data.data.cpuType,
     this.b.aa5 = data.data.memStore,
     this.b.aa6 = data.data.hostName
     },
}
</script>
<style scoped>
.aaa1{
        display: flex;
        height: 100%;
    align-items: center;
    justify-content: center;
}
.aa1{
     /* box-shadow: 2px 4px 20px 2px rgb(197 197 197); */
    font-size: 16px;
    padding: 100px;
    background-color: #fffbfb;
}
table {
    border-spacing: 0px;
}

</style>