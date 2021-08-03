<template>
  <div class="hello">
    <div class="hello1">
      <div class="hello3">
        <h1>主机监控系统登录</h1>
      </div>
      <el-form>
        <el-form-item>
          <el-input
            placeholder="请输入用户名"
            suffix-icon="el-icon-user-solid"
            name="username"
            v-model="uName"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="请输入密码"
            v-model="uPasswd"
            show-password
            name="password"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入验证码" v-model="utryCode" name="code">
          </el-input>
        </el-form-item>
        <img :src="base" @click="refresh" />
        <span style="font-size:14px;color:white;">看不清请点击图片刷新</span>
      </el-form>
      <div class="hello2">
        <br/>
        <el-button type="primary" @click="throttledMethod()">登录</el-button>
        <el-button type="primary"><router-link to="/register">注册</router-link></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { postUser1Info } from "../../api/index.js";
import { getImgBase64 } from "../../api/index.js";
import _ from 'lodash'

export default {
  name: "hello",
  data() {
    return {
      msg: "",
      una: "",
      pwd: "",
      una1: "",
      pwd1: "",
      uName: "",
      uPasswd: "",
      utryCode: "",
      base: "",
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      getImgBase64("http://39.106.116.109:9099/api/user/getPW").then((v) => {
        this.base = v;
      });
    },
    throttledMethod:_.throttle(async function(){
      // async login(){
      const { data } =await postUser1Info({
        user: {
          uName: this.uName,
          uPasswd: this.uPasswd,
        },
        tryCode: this.utryCode,
      });

      console.log(data);
      if (data.code === 200) {
        this.$notify({
          title: "info",
          message: "登陆成功!",
          type: "success",
        });
        // localStorage.setItem('kulong-m-user',data.res.data.token)
        this.$store.commit("updateUser", data.data.token);
        sessionStorage.setItem("userInfo", this.uName);
        this.$router.push({
          path: "ku",
          query: {
            username: this.uName,
            password: this.uPasswd,
          },
        });
      } else {
        this.$message({
          showClose: true,
          message:data.msg,
          type: "error",
        });
      }
      
    },2000),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  background: url("../../assets/22.jpg") no-repeat center;
  position: fixed;
  height: 100%;
  width: 100%;
  background-size: cover;
}
.hello1 {
  margin-top: 250px;
  margin-left: 600px;
}
.hello2 {
  margin-left: 100px;
}
.hello3 {
  color: rgb(255, 255, 255);
  margin-left: 50px;
}

.el-input {
  width: 350px;
}
</style>
