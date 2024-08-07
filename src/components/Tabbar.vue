<script setup lang="ts">
import {computed, ref} from "vue";
import BaseIcon from "@/components/base/BaseIcon.vue";


const tabs = computed(() => {
  return [
    {
      title: 'Tasks',
      icon: 'tasks'
    },
    {
      title: 'Аirdrop',
      icon: 'airdrop'
    },
    {
      title: 'Аcademy',
      icon: 'academy'
    },
    {
      title: 'Farm',
      icon: 'farm'
    },
    {
      title: 'Influencers',
      icon: 'influencers'
    },
    {
      title: 'Freelance',
      icon: 'freelance'
    }
  ]
})
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
          :key="index"
          :title="tab.title"
          :to="`/${tab.icon}`"
      >
        <div class="tab-item">
          <BaseIcon :name="tab.icon" />
          <span class="tab-text">
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
  grid-template-columns: repeat(6, minmax(0, 1fr));
  height: 75px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 75px;
  }
}
:deep(.van-tabbar--fixed) {
  bottom: 12px;
  left: 12px;
  background-color:#000000;
  border-radius: 15px;
  border: 1px solid #76ADFF;
}
.tab-text {
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  color: #FFFFFF;
}
.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>