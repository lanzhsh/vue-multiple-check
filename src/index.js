import multipleCheck from './vue-multiple-check.vue';
export default multipleCheck;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('multipleCheck', multipleCheck);
}
