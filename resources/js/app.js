import './bootstrap';
import '../css/app.css';

import i18n from '@/Core/i18n';
import mixin from '@/Core/mixin';
import Icons from '@/Shared/Icons.vue';
import Boolean from '@/Shared/Boolean.vue';
import Loading from '@/Shared/Loading.vue';

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'WIMS';

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
    return createApp({
      render: () => h(app, props),
      mounted: () => {
        document.getElementById('app-loading').style.display = 'none';
      },
    })
      .use(plugin)
      .use(i18n)
      .mixin(mixin)
      .use(ZiggyVue, Ziggy)
      .component('Head', Head)
      .component('Link', Link)
      .component('Icons', Icons)
      .component('Boolean', Boolean)
      .component('Loading', Loading)
      .mount(el);
  },
});

InertiaProgress.init({ color: '#2563EB', showSpinner: true });
