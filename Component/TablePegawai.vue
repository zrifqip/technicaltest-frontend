<script setup lang="ts">
import {getPaginationRowModel} from "@tanstack/vue-table";
import type {TableColumn} from "@nuxt/ui";
import { fetchPegawai } from '@/composables/fetchPegawai'
import type { Pegawai } from '~/types/Pegawai'
import Downloadbutton from "~/Component/Downloadbutton.vue";
const { pegawai, pagination, pending, paginationInfo } = fetchPegawai()
const table = useTemplateRef('table')
watchEffect(() => {
  console.log('Fetched Pegawai:', pegawai.value) // Log the actual data
})
const columns: TableColumn<Pegawai>[] = [
  {
    accessorKey: 'NIP',
    header: 'NIP'
  },
  {
    accessorKey: 'Nama',
    header: 'Nama',
    cell: ({ row }) => row.original.Nama
  },
  {
    accessorKey: 'Alamat',
    header: 'Alamat',
    cell: ({ row }) => row.original.Alamat
  },
  {
    accessorKey: 'Tgl Lahir',
    header: 'Tgl Lahir',
    cell: ({ row }) => new Date(row.original['Tgl Lahir']).toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  },
  {
    accessorKey: 'Jenis Kelamin',
    header: 'Jenis Kelamin',
    cell: ({ row }) => row.original['Jenis Kelamin']
  },
  {
    accessorKey: 'Gol',
    header: 'Gol',
    cell: ({ row }) => row.original['Gol']
  },
  {
    accessorKey: 'Eselon',
    header: 'Eselon',
    cell: ({ row }) => row.original.Eselon
  },
  {
    accessorKey: 'Jabatan',
    header: 'Jabatan',
    cell: ({ row }) => row.original['Jabatan']
  },
  {
    accessorKey: 'Tempat Tugas',
    header: 'Tempat Tugas',
    cell: ({ row }) => row.original['Tempat Tugas']
  },
  {
    accessorKey: 'Agama',
    header: 'Agama',
    cell: ({ row }) => row.original['Agama']
  },
  {
    accessorKey: 'Unit Kerja',
    header: 'Unit Kerja',
    cell: ({ row }) => row.original['Unit Kerja']
  },
  {
    accessorKey: 'No. HP',
    header: 'No. HP',
    cell: ({ row }) => row.original['No. HP']
  },
  {
    accessorKey: 'NPWP',
    header: 'NPWP',
    cell: ({ row }) => row.original.NPWP
  },
]
</script>

<template>
  <div class="mx-auto px-8 pt-6">
    <UContainer>

      <div class="flex justify-end pb-4">
        <Downloadbutton/>
        <UButton icon="i-lucide-circle-plus" size="md" color="primary" variant="solid">
          Tambah Pegawai
        </UButton>
      </div>
      <div class="py-4">
        <UContainer class="border rounded py-8">
          <div class="w-full">
            <div v-if="pending" class="flex justify-center items-center min-h-[200px]">
              <UProgress size="xl" />
            </div>
            <template v-else>
              <UTable
                  ref="table"
                  v-model:pagination="pagination"
                  :data="pegawai"
                  :columns="columns"
                  :loading="pending"
                  :pagination-options="{
                    getPaginationRowModel: getPaginationRowModel()
                  }"
                  class="flex-1"
              />
              <div class="flex justify-center border-t border-default pt-4">
                <UPagination
                    v-if="paginationInfo"
                    :default-page="paginationInfo.currentPage"
                    :items-per-page="paginationInfo.perPage"
                    :total="paginationInfo.total"
                    @update:page="(p) => pagination.pageIndex = p - 1"
                />
              </div>
            </template>
          </div>
        </UContainer>
      </div>
    </UContainer>
  </div>
</template>

