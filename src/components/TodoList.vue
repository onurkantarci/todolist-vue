<template>
  <div v-for="todo in todos" :key="todo._id" class="todo-list">
    <h2>{{ todo.todoName }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://calm-plum-jaguar-tutu.cyclic.app/todos"
        );
        const data = await response.json()
        this.todos = data.data;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>

<style>
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
}
.todo-list h2 {
  border: 1px solid grey;
  padding: 10px;
  border-radius: 5px;
}
</style>
