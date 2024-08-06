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
        route
    >
      <router-link
          v-for="(tab, index) in tabs"
          :key="index"
          :title="tab.title"
          :to="`/${tab.icon}`"
      >
        <BaseIcon :name="tab.icon" />
      </router-link>
    </van-tabbar>
  </nav>
</template>

<style scoped>

</style>