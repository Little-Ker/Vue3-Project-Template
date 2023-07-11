<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <i class="gg-youtube"></i>
      <div>
        <p>Raised</p>
        <VarButton class="md-raised" disabled>Disabled</VarButton>
        <var-button
          color="linear-gradient(to right, #69dbaa, #3a7afe)"
          text-color="#fff"
        >
          使用渐变
        </var-button>
        <var-button @click="handleClick">说你好</var-button>
      </div>
    </nav>
    <router-view />
    <Button @click="handleClick">Test</Button>
  </div>
</template>

<script>
import { Snackbar } from "@varlet/ui";
import "@varlet/ui/es/snackbar/style/index";

export default {
  name: "App",
  methods: {
    handleClick() {
      Snackbar("你好!");
      window.$(".view").addClass("test");
    },
  },
};
</script>

<style lang="sass">
#app
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background: $blue
  +desktop
    background: #aaa
    +set-flex(center, center)

nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
