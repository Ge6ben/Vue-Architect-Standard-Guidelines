<script setup lang="ts">
import router from '@/router';
import { alertService } from '@/services/alertServices';

const name = ref('');
const snackbar = alertService; // Directly using the snackbar state from the service

function sayHi() {
  snackbar.success(`Hi, ${name.value}!`);
  router.push('/homepage');
}
function warning() {
  snackbar.success(`How dare you refuse me, ${name.value}.`);
}
definePage({
  meta: {
    icon: 'mdi-home',
    title: 'Welcome !',
    drawerIndex: 0,
    layout: 'SpecialLayout',
  },
});
</script>

<template>
  <div class="wrapper">
    <p>Opinionated Starter Template</p>
    <v-responsive max-width="300" class="mx-auto">
      <v-text-field
        v-model="name"
        color="primary"
        placeholder="Hello World"
        label="What's your name?"
        class="mx-auto mt-8"
      />
    </v-responsive>
    <v-btn :disabled="!name" class="mr-2" color="primary" @click="sayHi">
      Confirm
    </v-btn>
    <v-btn :disabled="!name" @click="warning">Cancel</v-btn>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  top: max(50vh - 300px, 0px);
  text-align: center;
}
</style>
