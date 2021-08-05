<template>
<div class="a4">
  <div class="a41">
<el-form ref="form" :model="form" :rules="rules" class="demo-ruleForm">
  <el-form-item label="任务类型" prop="name" >
    <br/>
   <el-select v-model="form.rwlx" placeholder="请选择" style="width:100%"  >
      <el-option label="Shell" name="Shell" value=1></el-option>
      <el-option label="Python" name="Python" value=2></el-option>
    </el-select>
    <p>*任务类型包括以下部分：Shell，Python</p>
  </el-form-item>
  <el-form-item label="任务名称" style="width:400px" prop="rwmc">
     <el-input v-model="form.rwmc"></el-input>
  </el-form-item>
  <el-form-item label="执行周期"  style="width:100%">
    <br/>


     <div class="block">
  <el-cascader
  style="width:100%"
    v-model="form.zxzq"
    :options="options"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
      </div>


  </el-form-item>
  <el-form-item label="脚本内容"  style="width:400px" prop="jbnr">
     <el-input type="textarea"
  :rows="3" v-model="form.jbnr"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit" style="margin-left:100px">添加任务</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
<div class="a42">
  <el-table
    :data="rdata"
    style="width: 100%">
    <el-table-column
      label="任务名称"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
  >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.status==1?"运行中":"未启动" }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="执行周期"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.cronExpress }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">

<el-popover
  placement="top"
  width="160"
  v-model="visible">
  <p>这是一段内容这是一段内容确定删除吗？</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
    <el-button type="primary" size="mini" @click="visible = false,handleDelete(scope.row.id)">确定</el-button>
  </div>
  <el-button size="mini"
          type="danger" slot="reference">删除</el-button>
</el-popover>
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<script>
// import {cron} from 'vue-cron'
import {getrwInfo} from '../../api/index.js'
import {postrwInfo} from '../../api/index.js'
import {delrwInfo} from '../../api/index.js'
  export default {
    data() {
      return {
         rules: {
         jbnr: [
            { required: true, message: '请输入脚本内容', trigger: 'blur' }
          ],
          rwmc: [
            { required: true, message: '请输入任务名称', trigger: 'blur' }
          ],
          },
        rdata:[{
          name:'',
          status:'',
          cronExpress:''

        }],
        form:{
          rwlx:'',
          rwmc:'',
          zxzq:'',
          jbnr:''
        },
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
      }
    },
     async created(){
        const {data} =await getrwInfo();
        this.rdata=data.data.list,
      console.log(this.rdata);
     },
    methods: {
        
      async onSubmit() {
        if(this.form.rwmc!=""&&this.form.jbnr!="")
        {
      await postrwInfo(
        {
           task:{
          typeId:this.form.rwlx,
           name:this.form.rwmc,
           cronExpress:this.form.zxzq,
           content:this.form.jbnr
        }
      }).then(async ()=>{
         const {data} =await getrwInfo();
        this.rdata=data.data.list})
        this.$notify({
          title: "info",
          message: "添加成功!!!",
          type: "success",
        });
        }else{
          this.$notify({
          title: "info",
          message: "添加失败!",
          type: "error",
        });
        }
    },
     handleDelete(id) {
      delrwInfo({id}).then(async ()=>{
        const {data} = await getrwInfo();
         this.rdata=data.data.list
      })
      this.$notify({
          title: "info",
          message: "删除成功!",
          type: "success",
        });
      
     
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