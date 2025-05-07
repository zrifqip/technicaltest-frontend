<script setup lang="ts">
import Joi from 'joi'
import {getVisitorId} from '~/utils/fingerprint'
import {loginAdmin, loginGuest} from '~/composables/fetchAuth'
import {reactive} from 'vue'


const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

const state = reactive({
  username: '',
  password: ''
})

async function onSubmitAdmin() {
    schema.validate(state)
    try {
      await loginAdmin(state.username, state.password)
    }
    catch (err) {
      console.log(err)
    }
    finally {
      await navigateTo('/pegawai')
    }
}
async function onSubmitGuest() {
    state.username = await getVisitorId()
    try {
      await loginGuest(state.username)
    }
    finally {
      await navigateTo('/pegawai')
    }
}
</script>

<template>
  <div class="w-full md:w-1/2 ps-8 pt-24">
    <div class = "ps-8">
      <p class="text-2xl font-sans pb-4">Login Admin</p>
      <UForm :schema="schema" :state="state" class="space-y-4">
        <UFormField label="Username" name="username">
          <UInput v-model="state.username"/>
        </UFormField>
        <UFormField label="Password" name="password">
          <UInput v-model="state.password" type="password"/>
        </UFormField>
        <UButton type="submit" @click="onSubmitAdmin">
          Submit
        </UButton>
      </UForm>
    </div>
    <USeparator color = "primary" label = "or"/>
    <div class="flex items-center justify-center py-4">
      <UButton trailing-icon="i-lucide-arrow-right " size="xl" class="text-lg" type="submit" @click= "onSubmitGuest">Sign In as Guest</UButton>
    </div>
  </div>
</template>

<style scoped>

</style>