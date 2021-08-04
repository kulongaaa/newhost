<template>
  <div class="hello">
    <div class="hello1">
        <div class="hello3">
      <h1>主机监控系统注册</h1></div>
      <el-form>
        <el-form-item>
          <el-input
            placeholder="请输入用户名"
            suffix-icon="el-icon-user-solid"
            name="username"
            v-model="username">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="密码（由大小写字母，数字以及特殊字符组成）"
            v-model="password"
            show-password
            name="password">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="请再次确认密码"
            v-model="nextpd"
            show-password
            name="nextpd">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="请输入邮箱"
            v-model="email"
            name="email">
          </el-input>
        </el-form-item>
      </el-form>
      <div class="hello2"> 
          <el-button type="primary"><router-link to="/login">返回登录</router-link></el-button>
        <el-button type="primary" @click="select">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>

// import { postUser1Info } from '../../api/index.js'
import { postUser2Info } from '../../api/index.js'

  export default {
    name: 'hello',
    data () {
      return {
        nextpd:'',
       username:'',
       password:'',
       email:'',
        
      }
    },  
    methods: {
   async select(){
     const { data } = await postUser2Info({username:this.username,password:this.password,email:this.email});
         console.log(data)
         if(data.code===200)
            {
                 this.$notify({
              title: 'info',
              message: '注册成功!',
              type: 'success'
            });
            }else{
                this.$message({
              showClose: true,
              message: data.msg,
              type: 'error'
            });
            }

   }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello{
    background:url("../../assets/22.jpg") no-repeat center;
    position: fixed;
    height: 100%;
    width: 100%;
    background-size: cover;
    display: flex;
  justify-content: center;
  align-items: center;

  }
.hello1{

}
.hello2{
   margin-left: 100px;
}
.hello3{
    color: darkgrey;
    margin-left: 50px;
}

  .el-input{
  width: 350px;
}
</style>
