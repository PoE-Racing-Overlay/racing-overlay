<template>
  <h1>Settings</h1>
</template>

<script>
export default {
  data() {
    return {};
  },
  async mounted() {},
  methods: {
    save(key) {
      this.$ipc.invoke('store::set', this[key]);
    },
  },
};
</script>

<style></style>
