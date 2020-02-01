// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App2 from './App2.vue'

Vue.config.productionTip = false

// 定义全局组件
Vue.component('todo-item', {
  props: ['item', 'index'],
  template: `
  <li>
    <input type="checkbox" v-model="item.isFinished">
    {{index}}  --  {{item.thing}}
    <input type="button" value="删除" @click="del(index)">
  </li>
  `,
  methods: {
    del() {
      this.$emit('delete', this.index);
    }
  }
})


/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // components: { App },
  // template: '<App/>'

  el: '#app2',
  components: { App2 },
  template: '<App2/>'
})
