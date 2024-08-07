<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Tasks',
  setup() {
    const title = ref('Tasks');
    return {
      title,
    };
  },
};
</script>
