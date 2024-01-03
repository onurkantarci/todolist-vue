<template>
  <input
    type="checkbox"
    :checked="checkstate"
    @change="updateTodo"
    class="checkbox-input"
  />
  <TodoToast ref="todoToast" />
</template>

<script>
import TodoToast from "./TodoToast.vue";
import { updateData } from "../api";
export default {
  name: "UpdateTodo",
  props: ["todoId", "fetchData", "isComplete", "loading"],
  components: {
    TodoToast,
  },
  data() {
    return {
      checkstate: this.isComplete,
    };
  },
  methods: {
    async updateTodo() {
      this.$emit("loading", true);
      try {
        await updateData(this.todoId, { isComplete: !this.isComplete });
        this.fetchData();
        this.$emit("loading", false);
        this.showToast("Updated todo successfully", "success");
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
