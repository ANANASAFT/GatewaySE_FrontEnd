import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
import ViewUI from 'view-design'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'view-design/dist/styles/iview.css';


import App from './App.vue'

Vue.config.productionTip = false
// Vue.use(BootstrapVue)
Vue.use(ViewUI)



new Vue({
  render: h => h(App),
}).$mount('#app')
