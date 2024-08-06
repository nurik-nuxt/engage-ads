<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface Props {
  name: string;
  filled?: boolean;
}

const props = withDefaults(defineProps<Props>(), { filled: false });

const icons = Object.fromEntries(
    Object.entries(import.meta.glob('/src/assets/icons/*.svg', { as: 'raw' })).map(
        ([key, value]) => {
          const filename = key.split('/').pop()?.split('.').shift();
          return [filename, value];
        },
    ),
);

const icon = ref<string | null>(null);

onMounted(async () => {
  if (props.name && icons[props.name]) {
    icon.value = await icons[props.name]();
  }
});
</script>

<template>
  <div class="icon">
    <span v-if="icon" class="icon" v-html="icon"></span>
    <van-skeleton
        v-else
        style="--van-skeleton-avatar-size: 24px !important; --van-padding-md: 0px"
        class="icon icon-loading !p-0 !m-0"
        avatar
        title
        size="16"
    />
  </div>
</template>

<style scoped>
.icon {
  min-height: 16px;
  min-width: 16px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-loading {
  padding: 0;
  margin: 0;
}

.icon-loading .van-skeleton-avatar {
  padding: 0;
  margin: 0;
}
</style>
