<template>
<div class="a4">
  <div class="a41">
    <div class="a44">
<el-form ref="form" :model="form">
  <el-form-item label="任务类型" >
    <br/>
   <el-select v-model="form.rwlx" placeholder="请选择" style="width:150px" >
      <el-option label="Shell脚本" value="Shell脚本"></el-option>
      <el-option label="备份网站" value="备份网站"></el-option>
    </el-select>
    <p>*任务类型包括以下部分：Shell脚本，备份网站，同步时间</p>
  </el-form-item>
  <el-form-item label="任务名称">
     <el-input v-model="form.rwmc"></el-input>
  </el-form-item>
  <el-form-item label="执行周期">
    <br/>
      <!-- <div class="inputLine">
    <el-select name="" v-model="countryName" @change="selectCountry">
      <el-option :value="item" v-for="(item, index) in area" :key="index">
        {{ item.country }}
      </el-option>
    </el-select>
    <el-select name="" v-model="cityName">
      <el-option :value="item" v-for="(item, index) in countryName.city" :key="index">
        {{ item }}
      </el-option>
    </el-select>
  </div> -->
     <!-- <el-input v-model="form.zxzq"></el-input> -->
     <div class="block">
  <el-cascader
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
      </div>


  </el-form-item>
  <el-form-item label="脚本内容">
     <el-input v-model="form.jbnr"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit" style="margin-left:100px">添加任务</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
        options: [{
          value: '每小时',
          label: '每小时',
          children: [{
            value: '15分钟',
            label: '15分钟',
          }, {
            value: '30分钟',
            label: '30分钟',
          },{
            value: '45分钟',
            label: '45分钟', 
        }]},{
          value: '每天',
          label: '每天',
          children: [
            {
            value: '0时',
            label: '0时',
          },
          {
            value: '8时',
            label: '8时',
          },
          {
            value: '16时',
            label: '16时',
          }]
        },{
           value: '每周',
            label: '每周',
            children:[
              {
                 value: '星期一',
            label: '星期一',
              },
              {
                 value: '星期二',
            label: '星期二',
              },
              {
                 value: '星期三',
            label: '星期三',
              },
              {
                 value: '星期四',
            label: '星期四',
              },
              {
                 value: '星期五',
            label: '星期五',
              },
              {
                 value: '星期六',
            label: '星期六',
              },
              {
                 value: '星期日',
            label: '星期日',
              }
            ]
        }
      ],
      //      list: [
      //   {
      //     text: "这是第1条数据",
      //   },
      // ],

      // countryName: {},
      // cityName: "请选择",
      // area: [
      //   {
      //     country: "每小时",
      //     city: ["15分钟","30分钟","45分钟"],
      //   },
      //   {
      //     country: "每天",
      //     city: ["0时", "6时", "12时", "18时"],
      //   },
      //   {
      //     country: "每周",
      //     city: ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],
      //   },
      //   {
      //     country: "每月",
      //     city: ["1日","2日","3日","4日","5日","6日","7日","8日","9日","10日","11日","12日","13日","14日","15日","16日","17日","18日","19日","20日","21日","22日","23日","24日","25日","26日","27日","28日","29日","30日"],
      //   },
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
         selectCountry() {
      this.cityName = this.countryName.city[0];
    },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
.a4{
   width: 100%;
   height:100%;
   position: fixed;
   background:url("../../assets/c.png") no-repeat center;
    
}
.a44{
    /* padding-top: 100px; */
   
    margin-left: 50px;
    width: 400px;
}
.a41{
  width: 500px;
  margin-left: 450px;
  margin-top: 60px;
  padding-top: 35px;
  padding-bottom: 10px;
  background-color: #262a2e;
  color:darkturquoise;
  border:8px solid green;
  border-radius:10px;
   /* -moz-box-shadow:0 0 20px yellow;
     -webkit-box-shadow:0 0 20px yellow; */
     /* box-shadow:0 0 20px green; */
box-shadow: 4px 4px 4px 4px rgb(95, 107, 107);
}
</style>