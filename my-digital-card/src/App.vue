<script setup lang="ts">

import myDigitalCard from './components/myDigitalCard.vue';
import digitalCard from './components/DigitalCard.vue';
import logo from './assets/logo.png';
const info = {
  hcn: "<p>4312</p> <p>122</p> <p>331</p>",
  name: "BABY NAME HERE",
  birth: new Date(),
  gender: "F",
  donor: "DONOR 2",
  effective: new Date(),
  expiry: new Date()
}

</script>

<template>

  <h1>Example 1</h1>
  <div class="container">
    <myDigitalCard />
  </div>
  <hr />
  <h1>Example 2</h1>
  <div class="container">
    <digitalCard :info="info" :logo="logo">

    </digitalCard>
  </div>


</template>

<style scoped>
.container {
  min-height: 50vh;
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
