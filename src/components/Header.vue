<template>
  <div class="navbar">
    <div></div>
    <div>
      <p class="navbar--title">
        <img src="https://dacxi.com/assets/icons/logo.png" />
      </p>
    </div>
    <q-btn style="color: white; margin-right: 20px" @click="openModal" icon="menu" round dense flat class="q-mr-md"></q-btn>
  </div>
</template>
<script>
export default {
  methods: {
    openModal () {
      console.log('open')
      this.$emit('open')
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #222655;

  div {
    display: flex;
    justify-content: space-between;
  }

  &--title {
    font-size: 30px;
    // padding: 40px;
    color: var(--bs-light);
  }
}
</style>
