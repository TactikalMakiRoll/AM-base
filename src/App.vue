<template>
  <div>
	  <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";

export default {
	name: "App",
	components: {
		HeaderBar,
	},
};
</script>

<style>
</style>