<script setup lang="ts">
import Tabbar from "@/components/Tabbar.vue";
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <div id="app">
    <HomeView />
    <main>
      <router-view />
    </main>
    <div class="tab-bar-wrapper">
      <Tabbar />
    </div>
  </div>
</template>

<style>
/* Add your styles here */
</style>
