<script setup lang="ts">
import type {RadioGroupItem, FormError, FormSubmitEvent } from '@nuxt/ui'
import type {Pegawai, PegawaiDB} from '~/types/Pegawai'
import type {kotaMap} from '~/types/Wilayah'
const { kota, pending: loadingKota } =fetchKota()
const state = reactive<PegawaiDB>({
  NIP: '',
  Nama: '',
  Alamat: '',
  Tanggal_Lahir: '',
  kota_lahir_id: 0,
  jenis_kelamin: '',
  Gol: '',
  jabatan_id: '',
  agama: '',
  No_Handphone: '',
  NPWP: '',
})

const selectedTempatLahirID = computed<kotaMap | undefined>({
  get() {
    return kota.value.find(i => i.value === state.kota_lahir_id)
  },
  set(item) {
    state.kota_lahir_id = item?.value ?? 0
  }
})


const genderOptions = ref<RadioGroupItem[]>([
  { label: 'Laki-laki', value: 'L' },
  { label: 'Perempuan', value: 'P' }
])
const agamaOptions = ref([
  'Islam',
  'Kristen',
  'Katolik',
  'Hindu',
  'Buddha',
  'Konghucu'
])
const validate = (state: Pegawai): FormError[] => {
  const errors: FormError[] = []

  if (!state.NIP) errors.push({ name: 'NIP', message: 'NIP is required' })
  if (!state.Nama) errors.push({ name: 'Nama', message: 'Nama is required' })
  if (!state['Tgl Lahir']) errors.push({ name: 'Tgl Lahir', message: 'Tanggal Lahir is required' })

  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}

</script>


<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UForm label="Data Pribadi" class="space-y-4">
      <UFormField label="NIP" name="NIP">
        <UInput v-model="state.NIP" placeholder="Masukkan NIP" />
      </UFormField>
      <UFormField label="Nama" name="Nama">
        <UInput v-model="state.Nama" placeholder="Masukkan nama lengkap" />
      </UFormField>
      <UForm label="Tempat Tanggal Lahir" attach class="flex gap-2">
        <UFormField label="Tanggal Lahir" name="Tgl Lahir">
          <UInput v-model="state.Tanggal_Lahir" type="date" />
        </UFormField>
        <UFormField label="Kota Lahir" name="kota_lahir_id">
          <USelectMenu
              v-model="selectedTempatLahirID"
              :items="kota"
              :loading="loadingKota"
          />

        </UFormField>
      </UForm>
      <UFormField label="Jenis Kelamin" name="Jenis Kelamin">
        <URadioGroup v-model="state.jenis_kelamin" orientation="horizontal" variant="list" default-value="System" :items="genderOptions" />
      </UFormField>

      <UFormField label="Alamat" name="Alamat">
        <UTextarea v-model="state.Alamat" placeholder="Masukkan alamat lengkap" />
      </UFormField>

      <UFormField label="Agama" name="Agama">
        <USelect v-model=state.agama :items="agamaOptions" class="w-48" />
      </UFormField>
    </UForm>
    <UForm label="Data Lainnya" class = "space-y-4">
      <UFormField label="No. HP" name="No. HP">
        <UInput v-model="state.No_Handphone" type="tel" placeholder="Masukkan nomor HP" />
      </UFormField>

      <UFormField label="NPWP" name="NPWP">
        <UInput v-model="state.NPWP" placeholder="Masukkan NPWP" />
      </UFormField>
    </UForm>
    <UButton type="submit" color="primary" size="lg">
      Submit
    </UButton>

  </UForm>
</template>
