<template>
    <div class="net">
        <!--           <nav></nav>-->
        <h2>网卡信息</h2>
        <div class="card">
            <card_message/>
        </div>
        <h2>抓包信息</h2>
        <div class="package">
            <package_message/>
        </div>
    </div>
</template>

<script>
    //导航栏
    // import nav from '../views/nav'
    //网卡信息
    import card_message from './views/card_message'
    //抓包信息
    import package_message from "./views/package_message";
    export default {
        name:'network',
        components:{
            // nav,
            card_message,
            package_message
        },
        // async created(){
        //     const res = await get();
        //     console.log(res);
        // }
    }
</script>

<style>
    .package,.card{
        /*margin:10px;*/
    }
    h2{
        float: left;
    }
    .net{
        text-align: center;
        /*background-color: white;*/
        width: 100%;
        height: 100%;
        /*position: fixed;*/
        background: url("../../assets/c.png") no-repeat center;
        color: #00FFFF;
    }

</style>