<template>
  <div id="app">
    <label>Search todo: </label>
    <input class="search-input" type="text" v-model="search" />
    <AddTodo :loading="loading" :fetchData="fetchData" />
    <h3 v-if="loading">Loading...</h3>
    <div v-for="todo in filteredTodos" :key="todo._id" class="todo-list">
      <UpdateTodo
        :loading="loading"
        :todoId="todo._id"
        :fetchData="fetchData"
        :isComplete="todo.isComplete"
      />
      <h2>{{ todo.todoName }}</h2>
      <RemoveTodo
        :loading="loading"
        :todoId="todo._id"
        :fetchData="fetchData"
      />
      <TodoToast ref="todoToast" />
    </div>
  </div>
</template>

<script>
import AddTodo from "./AddTodo.vue";
import RemoveTodo from "./RemoveTodo.vue";
import UpdateTodo from "./UpdateTodo.vue";
import TodoToast from "./TodoToast.vue";
import { fetchData } from "../api";

export default {
  name: "App",
  components: {
    AddTodo,
    RemoveTodo,
    UpdateTodo,
    TodoToast,
  },
  data() {
    return {
      todos: [],
      loading: true,
      search: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    filteredTodos() {
      return this.todos.filter((todo) => todo.todoName.match(this.search));
    },
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const data = await fetchData();
        this.todos = data.data;
        this.loading = false;
      } catch (error) {
        this.showToast("An error occured", "error");
        console.error("Error fetching data", error);
      }
    },
    showToast(message, type) {
      this.$refs.todoToast.showToast(message, type);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.todo-list {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 15px auto;
  border: 1px solid grey;
  padding: 10px;
  transition: background 0.2s;
  border-radius: 10px;
}
.todo-list h2 {
  width: 100%;
}
.todo-list:hover {
  background: #faedca;
}
.search-input {
  padding: 10px;
  border-radius: 5px;
  margin-right: 70px;
  background: white;
  border: 1px solid grey;
  transition: background 0.2s;
}
</style>
