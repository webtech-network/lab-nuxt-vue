<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
    count.value++;
}
</script>

<template>
    <p>Cliques: {{ count }}</p>
    <button @click="increment">Clicar</button>
</template>
