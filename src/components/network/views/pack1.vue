<template>
    <div class="middle">
        <div class="a"><span>></span>Frame 1 :{{Frame}}</div>
        <div class="a"><span>></span>Ethernet ||，Src:{{ src }}</div>
        <div class="a"><span>></span>Address Resolution Protocol(request):{{ Address }}</div>
    </div>
</template>

<script>
    export default {
        name: "pack1",
        data() {
            return{
                Frame:'',
                src:'',
                Address:''
            }
        }
    }
</script>

<style scoped>
    .a{
        margin: 10px;
    }
    .middle{
        /*float: left;*/
        text-align: left;
        /*border: 1px solid rgba(0,0,0,.1);*/
        margin-top:10px;
        margin-bottom:10px;
        width: 1509px;
        border:5px solid green;
        border-radius: 5px;
        box-shadow:0 0 5px green;
        background-color: #262a2e;
    }

</style>