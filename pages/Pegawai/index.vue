<script setup lang="ts">
import type {NavigationMenuItem} from '@nuxt/ui'
import TablePegawai from "~/Component/TablePegawai.vue";
const items = ref<NavigationMenuItem[][]>([
  [
  ],
  [
    {
      label: 'User',
      icon: 'i-lucide-circle-user-round',
      target: '_blank',
      children:
      [
        {
          label: 'Logout',
          icon: 'i-lucide-log-out',
          description: 'Kembali ke Halaman Login',
          to: '/Login'
        },
      ]
    }
  ]
])
</script>
<template>
  <div class="w-full px-8 pt-6">
  <UContainer>

    <UNavigationMenu
        color="neutral"
        :items="items"
        class="w-full justify-right"
        :ui="{
            childList: 'w-1/2',
        }"
    />
    <TablePegawai />
  </UContainer>
  </div>



</template>
