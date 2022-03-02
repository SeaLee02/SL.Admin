<template>
  <!--框架内显示-->
  <transition v-if="!$route.meta.NoNeedHome" name="fade" mode="out-in">
    <el-container style="border: 1px solid red; height: 100%">
      <el-aside width="200px" style="border: 1px solid">菜单</el-aside>
      <el-container>
        <el-header style="height: 5%; border: 1px solid">
          <el-row>
              <el-button type="primary"   @click.prevent="layout">退出操作</el-button>
          </el-row>
        </el-header>
        <el-main style="height: 90%; border: 1px solid"
          ><router-view></router-view
        ></el-main>
        <el-footer style="height: 5%; border: 1px solid">页脚</el-footer>
      </el-container>
    </el-container>
  </transition>
  <!--不在框架中显示-->
  <transition v-else name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script setup>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from "@element-plus/icons-vue";
import { useStore } from "vuex";
import {  useRouter } from "vue-router";
const router = useRouter();
const $store = useStore();
const layout = () => {
  console.log('退出操作');
  $store.commit("saveToken", '');
  $store.commit("saveTokenExpire", '');
  
};
</script>
