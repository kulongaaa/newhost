<template>
<div class="a4">
  <div class="a41">
<el-form ref="form" :model="form">
  <el-form-item label="任务类型" >
    <br/>
   <el-select v-model="form.rwlx" placeholder="请选择" style="width:100%" >
      <el-option label="Shell脚本" value="Shell脚本"></el-option>
      <el-option label="备份网站" value="备份网站"></el-option>
    </el-select>
    <p>*任务类型包括以下部分：Shell脚本，备份网站</p>
  </el-form-item>
  <el-form-item label="任务名称" style="width:400px">
     <el-input v-model="form.rwmc"></el-input>
  </el-form-item>
  <el-form-item label="执行周期"  style="width:100%">
    <br/>


     <div class="block">
  <el-cascader
  style="width:100%"
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
      </div>


  </el-form-item>
  <el-form-item label="脚本内容"  style="width:400px">
     <el-input v-model="form.jbnr"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit" style="margin-left:100px">添加任务</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
<div class="a42">
  <el-table
    :data="tabledata"
    style="width: 100%">
    <el-table-column
      label="任务名称"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.mn }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
  >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.zt }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="执行周期"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.zq }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="保存数量"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sl }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="备份到"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.bf }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<script>
// import {cron} from 'vue-cron'
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
      },
      // js部分
	onChangeCron(v) {
       this.formData.triggerCron = v
    },

    }
  }
</script>

<style scoped>
.a4{

}
.a41{
  display: flex;
  align-items: center;
  justify-content: center;
   background-color: #ffffff;
    box-shadow: 2px 4px 20px 2px rgb(197 197 197);
    margin: 10px;
    padding: 20px;
    
}
.a42{
   background-color: #ffffff;
    box-shadow: 2px 4px 20px 2px rgb(197 197 197);
    margin: 10px;
    padding: 20px;

}
</style>