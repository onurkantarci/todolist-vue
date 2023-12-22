<template>
  <form @submit.prevent="postTodo">
    <label>Add Todo: </label>
    <input placeholder="Type a new todo..." type="text" v-model="newTodo" />
    <button type="submit">Add</button>
  </form>
  <TodoToast ref="todoToast" />
</template>

<script>
import TodoToast from "./TodoToast.vue";
export default {
  name: "AddTodo",
  props: ["fetchData", "loading"],
  components: {
    TodoToast,
  },
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    async postTodo() {
      this.$emit("loading", true);
      try {
        const response = await fetch(
          "https://calm-plum-jaguar-tutu.cyclic.app/todos",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              todoName: this.newTodo,
              isComplete: false,
            }),
          }
        );
        const data = await response.json();
        this.todos = data.data;
        this.$emit("loading", false);
        this.fetchData();
        this.showToast("New todo added successfully", "success");
      } catch (error) {
        this.showToast(`An error occured: ${error.message}`, "error");
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
form {
  margin: 20px;
}
form input,
button {
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  background: white;
  border: 1px solid grey;
  transition: background 0.2s;
}
form button {
  cursor: pointer;
}
form button:hover {
  background: #68d89b;
}
</style>
