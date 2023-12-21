<template>
  <AddTodo :loading="loading" :fetchData="fetchData" />
  <h3 v-if="loading">Loading...</h3>
  <div v-for="todo in todos" :key="todo._id" class="todo-list">
    <UpdateTodo
      :loading="loading"
      :todoId="todo._id"
      :fetchData="fetchData"
      :isComplete="todo.isComplete"
    />
    <h2>{{ todo.todoName }}</h2>
    <RemoveTodo :loading="loading" :todoId="todo._id" :fetchData="fetchData" />
  </div>
</template>

<script>
import AddTodo from "./AddTodo.vue";
import RemoveTodo from "./RemoveTodo.vue";
import UpdateTodo from "./UpdateTodo.vue";
export default {
  name: "App",
  components: {
    AddTodo,
    RemoveTodo,
    UpdateTodo,
  },
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await fetch(
          "https://calm-plum-jaguar-tutu.cyclic.app/todos"
        );
        const data = await response.json();
        this.todos = data.data;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching data", error);
      }
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
  margin-top: 60px;
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
</style>
