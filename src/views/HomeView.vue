<template>
  <div>
    <h1>Welcome, {{ userName }}!</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    const userName = ref('');

    const getUserNameFromTelegram = () => {
      if (window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
        const { first_name, last_name } = window.Telegram.WebApp.initDataUnsafe.user;
        userName.value = `${first_name} ${last_name}`;
      }
    };

    onMounted(() => {
      getUserNameFromTelegram();
    });

    return {
      userName
    };
  }
}
</script>

<style scoped>
/* Your styles here */
</style>
