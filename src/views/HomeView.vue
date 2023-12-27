<template>
  <div class="home">
    <TodoCount />
  </div>
</template>

<script>
import TodoCount from "@/components/TodoCount.vue";

export default {
  name: "TodoListView",
  components: {
    TodoCount,
  },
};
</script>
