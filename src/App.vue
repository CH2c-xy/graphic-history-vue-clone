<template>
  <div id="app">
    <full-page
      id="fullpage"
      ref="fullpage"
      :options="fullPageOptions"
    >
      <div class="section">
        <div class="flex flex-col">
          <nav-bar />
          <d3-bubble class="my-24" />
          <h1 class="text-center text-lg font-special-elite font-normal text-black">
            A brief history of graphic design, visualized
          </h1>
        </div>
      </div>
      <div class="section">
        <img
          alt="Vue logo"
          src="/img/owl.svg"
          width="100px"
          class="mx-auto"
        >
      </div>
    </full-page>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import D3Bubble from './components/D3Bubble.vue';

export default {
  name: "App",

  components: {
    NavBar,
    D3Bubble,
  },

  data () {
    return {
      fullPageOptions: {
        licenseKey: 'YOUR_KEY_HERE',
        scrollBar: false,
        navigation: true
      }
    }
  },

};
</script>

<style>

</style>
