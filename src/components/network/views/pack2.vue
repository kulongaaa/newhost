<template>
    <div class="footer">
        <div class="a">0000:{{a}}</div>
        <div class="a">0010:</div>
        <div class="a">0020:</div>
        <div class="a">0030:</div>
    </div>
</template>

<script>
    export default {
        name: "pack2",
        data(){
            return{
                a:''
            }
        }
    }
</script>

<style scoped>
.footer{
    /*padding:10px;*/
    /*float: left;*/
    text-align: left;
    /*border: 1px solid rgba(0,0,0,.1);*/
    width: 1509px;
    border:5px solid green;
    border-radius: 5px;
    box-shadow:0 0 5px green;
    background-color: #262a2e;
}
    .a{
        margin: 10px;
    }
</style>