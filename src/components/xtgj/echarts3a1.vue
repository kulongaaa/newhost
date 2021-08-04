<template>
  <div class="a3">
    <h2>告警推送</h2>
    <div class="a31">
      <table>
        <tr>
          <td>
            <h3>告警值设置</h3>
          </td>
          <td width="500px"></td>
        </tr>
        <tr>
          <td>CPU:</td>
          <td>
            <div class="block">
              <el-slider v-model="cpua" show-input> </el-slider>
            </div>
          </td>
        </tr>
        <tr>
          <td>内存:</td>
          <td>
            <div class="block">
              <el-slider v-model="mema" show-input> </el-slider>
            </div>
          </td>
        </tr>
        <tr>
          <td>磁盘:</td>
          <td>
            <div class="block">
              <el-slider v-model="diska" show-input> </el-slider>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <!-- <el-button>修改</el-button> -->
          </td>
          <td style="padding-left: 140px">
            <el-button @click="eedit()">修改</el-button>
          </td>
        </tr>
      </table>
    </div>

    <div class="a32">
      <h3>预警推送邮箱</h3>
      <el-table :data="adata">
        <el-table-column  label="收件人邮箱">
          <template slot-scope="scope">
            <el-input v-model="scope.row.email" v-if="scope.row.seen"> </el-input>
            <span style="margin-left: 10px" v-else>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="CPU警告是否发送">
          <template slot-scope="scope">
            <el-checkbox
              v-model="scope.row.cpu"
              style="padding-left: 50px"
              v-if="scope.row.seen"
            >
            </el-checkbox>
            <el-checkbox
              style="padding-left: 50px"
              v-model="scope.row.cpu"
              v-else
            ></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column  label="内存警告是否发送">
          <template slot-scope="scope">
            <el-checkbox
              v-model="scope.row.mem"
              v-if="scope.row.seen"
              style="padding-left: 50px"
            ></el-checkbox>
            <el-checkbox
              v-model="scope.row.mem"
              style="padding-left: 50px"
              v-else
            ></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column  label="磁盘警告是否发送">
          <template slot-scope="scope">
            <el-checkbox
              v-model="scope.row.disk"
              style="padding-left: 50px"
              v-if="scope.row.seen"
            >
            </el-checkbox>
            <el-checkbox
              v-model="scope.row.disk"
              style="padding-left: 50px"
              v-else
            ></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="{ row, $index }">
            <el-button
              type="button"
              size="mini"
              @click="handlePass(row, $index)"
              >{{ row.compile }}</el-button
            >
            <el-button type="button" size="mini" @click="del(row.email)">{{
              row.iDelete
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button style="margin-left: 650px" @click="dialogFormVisible = true"
        >新建</el-button
      >

      <el-dialog title="新建" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="收件人邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.xjname" ></el-input>
          </el-form-item>
          <el-form-item label="CPU警告是否发送" :label-width="formLabelWidth">
            <el-checkbox
              style="padding-left: 50px"
              v-model="form.xjcpu"
            ></el-checkbox>
          </el-form-item>
          <el-form-item label="内存警告是否发送" :label-width="formLabelWidth">
            <el-checkbox
              style="padding-left: 50px"
              v-model="form.xjmem"
            ></el-checkbox>
          </el-form-item>
          <el-form-item label="磁盘警告是否发送" :label-width="formLabelWidth">
            <el-checkbox
              style="padding-left: 50px"
              v-model="form.xjdisk"
            ></el-checkbox>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="
              dialogFormVisible = false;
              xj();
            "
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {getgjInfo} from '../../api/index.js'
import {postgjInfo} from '../../api/index.js'
import { getyxInfo} from '../../api/index.js'
import { postxjInfo} from '../../api/index.js'
import {getscInfo} from '../../api/index.js'

export default {
  data() {
    return {
      dialogFormVisible: false,
        form: {
          xjname: '',
         xjcpu:false,
         xjmem:false,
         xjdisk:false
        },
        formLabelWidth: '150px',
      cpua:'',
      mema:'',
      diska:'',
      isRow: '', 
    adata:  
        [{compile:'',cpu:false,disk:false,email:'',iDelete:'',mem:false,seen:false}]
    };
  },
   async created(){
     this.handleGetgjInfo()
     this.init()
     },
  methods: {
    async init() {
      const {data} =await getyxInfo();
      this.adata=data.data
      console.log(data.data);
    },
    async xj(){
      try {
        await postxjInfo({
        email:{
          email:this.form.xjname,
           cpu:this.form.xjcpu,
           mem:this.form.xjmem,
           disk:this.form.xjdisk
          }
        })
        this.init()
        this.$notify({
          title: "info",
          message: "新建成功!",
          type: "success",
        });
      } catch (error) {
        this.init()
        this.$notify({
          title: "info",
          message: "新建失败!",
          type: "error",
        });
      }
      // await postxjInfo(
      //   {
      //   email:{
      //     email:this.form.xjname,
      //      cpu:this.form.xjcpu,
      //      mem:this.form.xjmem,
      //      disk:this.form.xjdisk
      //   }
      // }).then(async ()=>{
      //   // this.handleGetgjInfo()
      //   const {data} = await getyxInfo();
      //   this.adata = data.data})
      //   this.$notify({
      //     title: "info",
      //     message: "新建成功!",
      //     type: "success",
      //   });
    },
    async handleGetgjInfo() {
      const { data } = await getgjInfo();
     this.cpua = parseInt(data.data.cpu),
      this.mema =parseInt(data.data.memory),
       this.diska = parseInt(data.data.disk)
    },
    async eedit(){
      await postgjInfo({
       cpu:this.cpua,
        memory:this.mema,
         disk:this.diska,
      });
        this.$notify({
          title: "info",
          message: "修改成功!",
          type: "success",
        });
    },
    async handlePass(row) {
      row.seen = !row.seen
      if (row.seen) {
        row.compile = '保存'
        row.seen = true
      } else {
        row.compile = '编辑'
        row.seen = false
        await postxjInfo(
        {email: row});  
      }

    },
    del(email) {
      getscInfo({email}).then(async ()=>{
        // this.handleGetgjInfo()
        const {data} = await getyxInfo();
        this.adata = data.data
      })
      this.$notify({
          title: "info",
          message: "删除成功!",
          type: "success",
        });
      
     
    },
  },
};
</script>

<style scoped>
.a31 {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ece9e9;
  margin: 20px;
  padding: 5px;
}
.a32 {
  border: 2px solid #ece9e9;
  margin: 20px;
  padding: 5px;
}
.el-input {
  width: 15vw;
}
.a3 {
  background-color: #ffffff;
  box-shadow: 2px 4px 20px 2px rgb(197 197 197);
  margin: 20px;
  padding: 10px;

  /* position: fixed; */
}
/*  */
</style>