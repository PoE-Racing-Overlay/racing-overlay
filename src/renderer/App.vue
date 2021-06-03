<template>
  <div class="">
    <nav id="nav" class="">
      <router-link class="" to="/">Home</router-link>
    </nav>
    <main class="">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  created() {
    let hash = window.location.hash.replace('#', '');
    if (hash) {
      this.$router.replace(hash);
    } else {
      this.$router.replace('/');
    }
  },
};
</script>

<style></style>
