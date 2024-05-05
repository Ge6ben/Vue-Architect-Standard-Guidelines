<template>
  <v-app>
    <v-main>
      <h1 class="text-center">Special Layout</h1>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
//
// import ApiService from '@/services/apiService';
//
// const apiService = new ApiService();
//
// // Example usage:
// apiService
//   .get('/olympic-winners.json')
//   .then(users => {
//     console.log(users);
//   })
//   .catch(error => {
//     console.error('Failed to fetch users:', error);
//   });
</script>
