<template>
  <div class="container">
    <img src="https://dacxi.com/assets/icons/logo.png" />
    <router-link to="/view">
      <q-btn class="button">Get Start</q-btn>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  background: var(--principal);
  // background-image: url('https://dacxi.com/assets/images/homepage/banner-bg.png') no-repeat !important;
background: url('https://dacxi.com/assets/images/about/safety-and-security/banner.png');

  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}
.button {
  background: var(--bs-white);
  margin-top: 50px;
  padding: 5px 50px;
  font-size: 18px;
}
</style>
