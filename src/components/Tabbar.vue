<script setup lang="ts">
import {computed, ref} from "vue";
import BaseIcon from "@/components/base/BaseIcon.vue";
import { useRoute } from 'vue-router'


const route = useRoute();


const tabs = computed(() => {
  return [
    {
      title: 'Tasks',
      icon: 'tasks',
      activeIcon: 'tasks-active',
      route: 'tasks',
    },
    {
      title: 'Аirdrop',
      icon: 'airdrop',
      activeIcon: 'airdrop-active',
      route: 'airdrop'
    },
    {
      title: 'Аcademy',
      icon: 'academy',
      activeIcon: 'academy-active',
      route: 'academy'
    },
    {
      title: 'Farm',
      icon: 'farm',
      activeIcon: 'farm-active',
      route: 'farm'
    }
  ]
})
const isActiveCurrentTab = (tab: any) => {
  const [_, sub] = route.path.split('/');
  return sub === tab.route;
};
</script>

<template>
  <nav>
    <van-tabbar
        id="tab-bar"
        class=""
        style="--van-tabbar-height: var(--van-tabbar-height, 75px) !important"
        route
        :border="false"
    >
      <router-link
          v-for="(tab, index) in tabs"
          :key="index + tab.title + isActiveCurrentTab(tab)"
          active-class="active"
          :title="tab.title"
          :to="{ path: `/${tab.route}`}"
      >
        <div class="tab-item">
          <BaseIcon :name="isActiveCurrentTab(tab) ? tab.activeIcon : tab.icon"/>
          <span class="tab-text" :class="{'active': isActiveCurrentTab(tab)}">
            {{ tab.title }}
          </span>
        </div>
      </router-link>
    </van-tabbar>
  </nav>
</template>

<style scoped>
#tab-bar {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  height: 75px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 75px;
    &.active {
      background: #FFFFFF;
      border-radius: 8px;
    }
  }
}
:deep(.van-tabbar--fixed) {
  bottom: 12px;
  left: 12px;
  right: 12px;
  background-color:#000000;
  border-radius: 15px;
  border: 1px solid #76ADFF;
}

:deep(.van-tabbar) {
  width: auto;
}
.tab-text {
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  color: #FFFFFF;
  &.active {
    color: #000113;
  }
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>