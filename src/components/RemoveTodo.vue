<template>
  <button @click="deleteTodo">X</button>
  <TodoToast ref="todoToast" />
</template>

<script>
import TodoToast from "./TodoToast.vue";
export default {
  name: "RemoveTodo",
  components: {
    TodoToast,
  },
  props: ["fetchData", "todoId", "loading"],
  methods: {
    async deleteTodo() {
      this.$emit("loading", true);
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
        this.$emit("loading", false);
        this.showToast("Removed todo successfully", "success");
      } catch (error) {
        this.showToast(`An error occured: ${error.message}`, "error");
        console.error("Error fetching data", error.message);
      }
    },
    showToast(message, type) {
      this.$refs.todoToast.showToast(message, type);
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
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
  background: #fe5d26;
  color: white;
  border-bottom: 3px solid grey;
  border-left: 3px solid grey;
}
</style>
