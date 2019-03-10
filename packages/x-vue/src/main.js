import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import { store } from '@project/x-redux';
import { connect } from 'redux-vuex';

console.log(store.getState());
connect({
  Vue,
  store,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
