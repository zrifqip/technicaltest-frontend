<script setup lang="ts">
import LoginForm from "~/Component/LoginForm.vue";
</script>
<template>
  <UContainer class = "py-12">
    <div class="flex items-center justify-center py-2">
      <NuxtImg src="/logo.png" />
    </div>
    <UCard variant = "subtle" class="flex items-center justify-center">
      <div class="flex flex-col md:flex-row">
        <div class=" w-full md:w-1/2">
          <NuxtImg class="rounded-sm" src="/Civil_Worker.png" />
        </div>
        <LoginForm />
      </div>
    </UCard>
  </UContainer>
</template>