<template>
  <button @click="deleteTodo">X</button>
</template>

<script>
export default {
  name: "RemoveTodo",
  props: ["fetchData", "todoId"],
  methods: {
    async deleteTodo() {
      try {
        const response = await fetch(
          "https://calm-plum-jaguar-tutu.cyclic.app/todos/" + this.todoId,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        this.todos = data.data;
        this.fetchData();
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  margin: 10px;
  transition: background, border 0.2s;
  border-radius: 5px;
  background: white;
  border: none;
  border-bottom: 4px solid grey;
  border-left: 4px solid grey;
  border-top: 1px solid grey;
  border-right: 1px solid grey;
}
button:hover {
  background: #FE5D26;
  color: white;
  border-bottom: 3px solid grey;
  border-left: 3px solid grey;
}
</style>
