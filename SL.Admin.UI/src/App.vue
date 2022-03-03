<template>
  <!--框架内显示-->
  <transition v-if="!$route.meta.NoNeedHome" name="fade" mode="out-in">
    <el-container style="border: 1px solid red; height: 100%">
      <el-aside width="200px" style="border: 1px solid">
        <el-menu        router="true"
          class="el-menu-vertical-demo"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>基础管理</span>
            </template>
            <el-menu-item index="/user" >菜单管理</el-menu-item>
            <el-menu-item index="/layout" >租户管理</el-menu-item>
            <el-menu-item index="1-3" >角色管理</el-menu-item>
            <el-menu-item index="1-4" >账号管理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="height: 5%; border: 1px solid">
          <el-row>
            <el-radio-group v-model="isCollapse" style="margin-right: 40px">
              <el-radio-button :label="false">expand</el-radio-button>
              <el-radio-button :label="true">collapse</el-radio-button>
            </el-radio-group>

            <el-button type="primary" @click.prevent="layout"
              >退出操作</el-button
            >
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
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
const router = useRouter();
const $store = useStore();

const isCollapse = ref(true);
const layout = () => {
  console.log("退出操作");
  $store.commit("saveToken", "");
  $store.commit("saveTokenExpire", "");
  router.push("/login");
};
</script>
