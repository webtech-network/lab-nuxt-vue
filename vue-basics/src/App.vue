<script setup>
import Greeting from './components/Greeting.vue';
import Hello from './components/Hello/index.vue';

const name = 'Gumball';
const age = 12;
</script>

<template>
    <Hello />
    <Greeting />
    <p>{{ name }} tem {{ age }} anos.</p>
</template>