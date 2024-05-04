import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { en, zhHans } from 'vuetify/locale';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { useDark } from '@vueuse/core';
import { md3 } from 'vuetify/blueprints';
import type { VDataTable } from 'vuetify/lib/components/index.mjs';

export type DataTableHeaders = InstanceType<
  typeof VDataTable
>['$props']['headers'];

const theme = {
  primary: localStorage.getItem('theme-primary') || '#1697f6',
};

export default createVuetify({
  blueprint: md3,
  locale: {
    locale: 'zhHans',
    fallback: 'en',
    messages: { zhHans, en },
  },
  defaults: {
    VSwitch: {
      color: 'primary',
    },
    VDataTable: {
      fixedHeader: true,
      hover: true,
    },
    VCard: {
      flat: true,
      border: true,
    },
    VBtn: { color: undefined },
    VNavigationDrawer: {
      VList: {
        nav: true,
        VListItem: {
          rounded: 'xl',
        },
      },
    },
    VChip: { rounded: 'lg' },
  },
  theme: {
    defaultTheme: useDark().value ? 'dark' : 'light',
    themes: {
      light: {
        colors: theme,
      },
      dark: {
        colors: theme,
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  display: {
    mobileBreakpoint: 'sm',
  },
});
