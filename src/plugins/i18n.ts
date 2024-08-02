import { createI18n } from 'vue-i18n';
import en from '@/lang/en.json';
import ar from '@/lang/ar.json';

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,

    ar,
  },
});
