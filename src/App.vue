<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

  * {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: grey;
    background-image: url('@/assets/background_weather.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
</style>
