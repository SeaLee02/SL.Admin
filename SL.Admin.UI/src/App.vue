<template>
  <!--框架内显示-->
  <transition v-if="!$route.meta.NoNeedHome" name="fade" mode="out-in">
    <div>
      <div>带标题的组件</div>
      <router-view></router-view>
    </div>
  </transition>
  <!--不在框架中显示-->
  <transition v-else name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default ({
  setup() {
    const router = useRouter();
    console.log("项目开始");
    // router.push('/login');
  },
});
</script>
