<template>
  <div :class="['toast', toastType]" v-if="show">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      toastType: "success",
    };
  },
  methods: {
    showToast(message, type) {
      this.message = message;
      this.toastType = type;
      this.show = true;

      setTimeout(() => {
        this.show = false;
      }, 4000);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: #fff;
}

.success {
  background-color: #68d89b;
}

.error {
  background-color: #f44336;
}
</style>
