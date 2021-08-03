<template>
    <div class="net">
        <!--           <nav></nav>-->
      <div class="bor">
          <h2 class='btn1'>网卡信息</h2>
          <div class="card">
              <card_message @updateData="handleUpdateData"/>
          </div>
          <h2 class="btn">抓包信息</h2>
          <div class="package">
              <package_message :pgkData="pgkData"/>
          </div>
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
        data(){
            return{
                // pgkData: '杭州'
            }
        },
        methods:{
            // handleUpdateData(data) {
            //     this.pgkData = data.city;
            //     console.log(this.pgkData);
            // },
        }
        // async created(){
        //     const res = await get();
        //     console.log(res);
        // }
    }
</script>

<style scoped>
    .package,.card{
        width: 95%;
        /*margin:10px;*/
        margin-top: 20px;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
        /*margin-left: 20px;*/
        /*width: 85%;*/
        /*height: 85%;*/
    }
    h2{
        float: left;
    }
    .bor{
        margin-left: 60px;
    }
    .net{
        text-align: center;
        /*background-color: white;*/
        width: 90%;
        height: 90%;
        margin-left:90px;
        background-color: white;
        /*position: fixed;*/
        /*background: url("../../assets/c.png") no-repeat center;*/
        color: black;
        margin-top: 5px;
        /*border: 1px solid gray;*/
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        box-shadow: 2px 4px 20px 2px rgb(197 197 197);
    }
    .btn{
        /*margin-top: -2px;*/
        padding-left: 20px;
        padding-top: 20px;
    }
    .btn1{
        padding-left: 20px;
    }
</style>