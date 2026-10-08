<script setup>
const image = 'https://exemplo.com/gumball.png';
const name = 'Gumball';
</script>

<template>
    <img v-bind:src="image" v-bind:alt="name" />
    <img :src="image" :alt="name" />
</template>