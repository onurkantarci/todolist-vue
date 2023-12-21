<template>
  <input
    type="checkbox"
    v-model="checkstate"
    @change="updateTodo"
    class="checkbox-input"
  />
</template>

<script>
export default {
  name: "UpdateTodo",
  props: ["todoId", "fetchData", "isComplete", "loading"],
  data() {
    return {
      checkstate: this.isComplete,
    };
  },
  methods: {
    async updateTodo() {
      this.$emit("loading", true);
      try {
        const response = await fetch(
          "https://calm-plum-jaguar-tutu.cyclic.app/todos/" + this.todoId,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              isComplete: !this.isComplete,
            }),
          }
        );
        const data = await response.json();
        this.todos = data.data;
        this.fetchData();
        this.$emit("loading", false);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>

<style scoped>
.checkbox-input {
  cursor: pointer;
  margin: 20px;
  transform: scale(1.5);
  accent-color: #297373;
}
.checkbox-input:hover {
  accent-color: #3ca6a6;
}
</style>
