<template>
  <div></div>
</template>

<script>
export default {
  created() {
    let hash = window.location.hash.replace('#', '');
    console.log(hash);
    if (hash) {
      this.$router.replace(hash);
    } else {
      this.$router.replace('/');
    }
    window.onkeyup = this.keyup;
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    /**
     * @param {Electron.KeyboardEvent} event
     */
    keyup(event) {
      console.log(event);
      this.show = true;
      this.$ipc.invoke('keyboard-event::keyup', event);
    },
  },
};
</script>

<style></style>
