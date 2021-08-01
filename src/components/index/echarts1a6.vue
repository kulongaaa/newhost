<template>
<div class="aaa1">
    <div class="aa1">
    <div>系统名称：{{b.aa1}}</div>
    <div>供应商：{{b.aa2}}</div>
    <div>版本：{{b.aa3}}</div>
    <div>处理器型号：{{b.aa4}}</div>
    <div>总内存：{{b.aa5}}</div>
    <div>主机名：{{b.aa6}}</div>
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

</style>