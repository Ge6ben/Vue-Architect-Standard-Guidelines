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
  console.log('I am running before app loads! 🚀');
  registerPlugins(app);

  app.mount('#app');
})();
