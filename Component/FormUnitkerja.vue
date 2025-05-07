<script setup lang="ts">
import type {RadioGroupItem, FormError, FormSubmitEvent } from '@nuxt/ui'
import type {Pegawai, PegawaiDB} from '~/types/Pegawai'
</script>

<template>
  <UForm label="Data Kepegawaian" attach class="flex gap-2">
    <UFormField label="Unit Kerja" name="Unit Kerja">
      <UInput v-model= placeholder="Masukkan unit kerja" />
    </UFormField>
    <UFormField label="Kota Tempat Tugas" name="Tempat Tugas">


    </UFormField>
  </UForm>

  <UFormField label="Jabatan" name="Jabatan">
    <UInput v-model="state.Jabatan" placeholder="Masukkan jabatan" />
  </UFormField>


</template>

<style scoped>

</style>