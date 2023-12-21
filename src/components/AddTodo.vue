<template>
  <form @submit.prevent="postTodo">
    <label>Add Todo: </label>
    <input placeholder="Type a new todo..." type="text" v-model="newTodo" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  props: ["fetchData"],
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    async postTodo() {
      try {
        const response = await fetch(
          "https://calm-plum-jaguar-tutu.cyclic.app/todos",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                todoName: this.newTodo,
                isComplete: false,
            })
          }
        );
        const data = await response.json();
        this.todos = data.data;
        this.fetchData()
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 20px;
}
form input, button {
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    background: white;
    border: 1px solid grey;
    transition: background 0.2s;
}
form button:hover {
    background: #68D89B;
}
</style>
