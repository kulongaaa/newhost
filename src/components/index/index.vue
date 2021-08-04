<template>
  <div class="b">
    <div class="b-left">
          <img :src="imga.src"  class="bb"/>
        </div>
    <div class="b-center">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#262a2e"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1"
          ><router-link to="/ku">首页</router-link></el-menu-item
        >
          <el-menu-item index="2">
          <router-link to="/network">网络监控</router-link>
        </el-menu-item>
        <el-submenu index="3">
           <template slot="title">系统管理</template>
          <el-menu-item index="3-1"><router-link to="/clock" >时间同步</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link to="/preserve">系统维护</router-link></el-menu-item>
          <el-menu-item index="3-3"><router-link to="/echarts3a1">告警推送</router-link></el-menu-item>
          <el-menu-item index="3-4"><router-link to="/storage">存储管理</router-link></el-menu-item>
        </el-submenu>
        <!-- <el-submenu index="2">
          <template slot="title">网络</template>
          <el-menu-item index="2-1">eth0</el-menu-item>
          <el-menu-item index="2-2">eth1</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
           <template slot="title">系统管理</template>
          <el-menu-item index="3-1">时间同步</el-menu-item>
          <el-menu-item index="3-2">系统维护</el-menu-item>
          <el-menu-item index="3-3"><router-link to="/echarts3a1">告警推送</router-link></el-menu-item>
        </el-submenu> -->
        <el-menu-item index="4"><router-link to="/echarts4a">计划任务</router-link></el-menu-item
        >
      </el-menu>
    </div>
    <div class="b-right">
      你好，欢迎回来{{un}}||<span  style="cursor: pointer;" @click="clickfunc()">退出登录</span>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      un: "",
      imga: {
        src: require("../../assets/llo.png"),
      },
    }
  },
  methods:{
       clickfunc(){
        this.$store.commit('clearUser')
        this.$router.push({
              path:'login'
        })
       }
  },
  created() {
    this.un = sessionStorage.getItem('userInfo') 
  }
  

};
</script>
<style>
.b {
      display: flex;
      height: 60px
    }

    .b-left {
      order: 0;
      background-color: #262a2e;
    }
    .bb{
    height: 53px;
    padding: 1px 1px;
    }

    .b-center {
      order: 1;
      flex: 1;
      background: #545c64;
    }

    .b-right {
      padding: 20px;
      color:#ffd04b;
      order: 2;
      width: 300px;
      background: #262a2e;
    }
    .router-link-active {
      font-size: 14px;
  color: #fff;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
    padding-top: 1px;
}
</style>