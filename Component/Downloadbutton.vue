<script setup lang="ts">
import { fhFile } from '@/composables/fetchFile'
</script>

<template>
  <UButton
      icon="i-lucide-Download"
      size="md"
      color="primary"
      variant="solid"
      type="button"
      @click="fetchFile"
  >
    Download Document
  </UButton>
</template>


<style scoped>

</style>