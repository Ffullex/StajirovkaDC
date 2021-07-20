import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App.vue'
import router from '@/router'
import '@/styles/main.scss'
import IconTemplate from '@/components/IconTemplate'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
import store from '@/store'
import '@/permission'

Vue.use(ElementUI)
locale.use(lang)

Vue.config.productionTip = false

const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(require.context('@/assets/icons/', true, /\.svg$/))
Vue.component('icon-template', IconTemplate)

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
