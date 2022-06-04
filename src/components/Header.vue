<template>
  <div class="navbar">
    <p class="navbar--title">
      <img src="https://dacxi.com/assets/icons/logo.png" />
    </p>
  </div>
</template>

<script setup>
</script>
<style lang="scss" scoped>
* {
  margin: 0
}
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #222655;

  &--title {
    font-size: 30px;
    // padding: 40px;
    color: var(--bs-light);
  }
}
</style>
