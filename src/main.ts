/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import '@/assets/styles/index.css';

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

const app = createApp(App);
// Immediately Invoked Function Expression (IIFE)
(() => {
  console.log(
    'This code is running before the app is fully loaded and mounted to the DOM! 🚀',
  );
  registerPlugins(app);

  app.mount('#app');
})();
