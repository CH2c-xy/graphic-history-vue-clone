<template>
  <div id="app">
    <full-page>
      <div class="section">
        <div
          class="flex flex-nowrap justify-around content-center text-center mt-48 items-center mx-24 font-special-elite font-normal"
        >
          <button class="nav-button">
            <p>about site</p>
          </button>
          <button class="nav-button">
            <p>creators</p>
          </button>
          <img
            class="flex-shrink mx-24"
            alt="Hooooo"
            src="/img/owl.svg"
            width="80px"
          >
          <button class="nav-button">
            <p>normal view</p>
          </button>
          <button class="nav-button">
            <p>split view</p>
          </button>
        </div>
      </div>
      <div class="section">
        <img
          alt="Vue logo"
          src="/img/owl.svg"
          width="100px"
          class="mx-auto"
        >
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </full-page>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
