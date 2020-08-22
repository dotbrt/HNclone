<template>
  <div id="app">
    <navbar></navbar>
    <homepage></homepage>
    <router-view />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Homepage from "@/components/Homepage"; 
  export default {
    name: "App",
    components: {
      Navbar,
      Homepage
    }
  };
</script>

<style></style>