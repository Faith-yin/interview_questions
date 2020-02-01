<template>
  <div id="app2">
    <h2 class="title">{{msg}}</h2>
    <div class="input">
      <input type="text" v-model="thing" @keyup.enter="add()">
    </div>
    <div class="noFinished">
      <h4>未完成：</h4>
      <ul>
        <template v-for="(item, index) in list">
          <todo-item :key="index" v-if="!item.isFinished"
            :item="item" :index="index" @delete="handleDelete">
          </todo-item>
        </template>
      </ul>
    </div>
    <div class="isFinished">
      <h4>已完成：</h4>
      <ul>
        <template v-for="(item, index) in list">
          <todo-item :key="index" v-if="item.isFinished"
            :item="item" :index="index" @delete="handleDelete">
          </todo-item>
        </template>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "App2",
  data() {
    return {
      msg: '这是我的 todolist ！',
      thing: '',
      list: []
    }
  },
  methods: {
    add() {
      if(this.thing != '' && this.thing != null) {
        this.list.push({
          thing: this.thing,
          isFinished: false
        })
        this.thing = "";
      }else {
        alert("添加事项不能为空！");
      }
    },
    handleDelete(i) {
      this.list.splice(i, 1);
    }
  }
}
</script>


<style>
  
</style>