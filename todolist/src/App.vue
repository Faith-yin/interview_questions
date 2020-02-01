<template>
  <div id="app">
    <div class="title">
      <h2>{{msg}}</h2>
      <!-- 或者是 @keyup.enter="add()"     @keyup.13="add()" -->
      <input type="text" v-model="thing" @keyup="add($event)" />
    </div>
    <div>
      <h4>未完成事项：</h4>
      <ul>
        <!-- v-for和v-if同时使用时，有一个先后运行的优先级，v-for比v-if的优先级更高，
          这就说明在v-for的每次循环运行中每一次都会调用v-if的判断，所以不推荐v-if和v-for在同一个标签内同时使用
          解决方案：将v-for放在外面新建的template标签内
        -->
        <template v-for="(item, index) in list">
          <li :key="index" v-if="!item.isFinished">
            <input type="checkbox" v-model="item.isFinished" />
            {{index}} -- {{item.thing}}
            <input
              type="button"
              value="删除"
              @click="deleteItem(index)"
            />
          </li>
        </template>
      </ul>
    </div>
    <div>
      <h4>已完成事项：</h4>
      <template v-for="(item, index) in list">
        <li :key="index" v-if="item.isFinished">
          <input type="checkbox" v-model="item.isFinished" />
          {{index}} -- {{item.thing}}
          <input
            type="button"
            value="删除"
            @click="deleteItem(index)"
          />
        </li>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "This is my todoList !",
      thing: "",
      list: []
    };
  },
  methods: {
    add(e) {
      if (e.keyCode == 13) {
        if (this.thing != "" && this.thing != null) {
          this.list.push({
            thing: this.thing,
            isFinished: false
          });
          this.thing = "";
        } else {
          alert("添加事项不能为空!");
        }
      }
    },
    deleteItem(i) {
      this.list.splice(i, 1);
    }
  }
};
</script>


<style>
</style>
