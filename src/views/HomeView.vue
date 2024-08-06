<template>
  <div>
    <h1>Welcome, {{ userName }}!</h1>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
}

export default {
  name: 'App',
  setup() {
    const userName = ref<string>('');

    const getUserNameFromTelegram = (): void => {
      const telegramWebApp = window.Telegram.WebApp;
      if (telegramWebApp.initDataUnsafe && telegramWebApp.initDataUnsafe.user) {
        const { first_name, last_name } = telegramWebApp.initDataUnsafe.user as TelegramUser;
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
