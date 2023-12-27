<template>
  <div>
    <h1>Current available todo count: {{ todos.length }}</h1>
    <h3 v-if="loading">Loading...</h3>
  </div>
</template>

<script>
export default {
  name: "TodoCount",
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  created() {
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
        this.loading = false;
        this.todos = data.data;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>
