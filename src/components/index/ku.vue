<template>
<div>
  <div class="ku3">
     <div><echarts1a1 /></div>
     <div><echarts1a2 :edata2="edata2"/></div>
     <div><echarts1a3 :edata3="edata3"/></div>
     <div style="flex-grow:1;"><echarts1a6 /></div>
  </div>
  <div class="ku1">
    <div class="ku2"><echarts1a4 :data="data"/></div>
    <div class="ku2"><echarts1a5 :data="data"/></div>
  </div>
</div>
</template>

<script>
import echarts1a1 from '@/components/index/echarts1a1.vue'
import echarts1a2 from '@/components/index/echarts1a2.vue'
import echarts1a3 from '@/components/index/echarts1a3.vue'
import echarts1a5 from '@/components/index/echarts1a5.vue'
import echarts1a6 from '@/components/index/echarts1a6.vue'
import echarts1a4 from '@/components/index/echarts1a4.vue'
// import { getUserInfo } from '../../api/index.js'
export default {
  name: 'ku',
  components: {
    echarts1a1,
    echarts1a2,
    echarts1a3,
    echarts1a4,
    echarts1a5,
    echarts1a6,
  },
  data() {
    return {
      data: [],
      edata1:[],
      edata2:[],
      edata3:[]
    }
  },
 mounted(){
    //  const { data } =await getUserInfo();
    // this.edata1 = data.data.cpu.usage,
    //  this.edata2 = data.data.memory.usage,
    //  this.edata3 = data.data.disk.usage,
    //  console.log(data)
    
      // document.getElementById('kuku2').style("width=((wid/2)-20)px;")
    // document.getElementById('kuku1')   
    //    var wid = document.body.clientWidth
    //  console.log(wid)
    //  document.getElementById('weilitizhuzhuangtu').style.width= ((wid/2)-60) + "px"
     
      // document.getElementById('echarts1a5').style.width= ((wid/2)-60) + "px"
        
 },

}
</script>
<style scoped>
h1{
    margin: 0;
    padding: 0;
}
.ku1{
  display:flex;
   
    /* background-color: #545c64;
    margin: 10px; */
}
.ku2{
      background-color: #ffffff;
    box-shadow: 2px 4px 20px 2px rgb(197 197 197);
    margin: 10px;
    padding: 20px;
}
.ku3{
  display:flex;
  
    background-color:  #ffffff;
   
    margin: 10px;
}

</style>
