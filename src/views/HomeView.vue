<template>
  <div>
    <span>Welcome, {{ userName }}!</span>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'App',
  setup() {
    const userName = ref('');

    const getUserNameFromTelegram = () => {
      const telegramWebApp = window.Telegram.WebApp;
      if (telegramWebApp.initDataUnsafe && telegramWebApp.initDataUnsafe.user) {
        const { first_name, last_name } = telegramWebApp.initDataUnsafe.user;
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
