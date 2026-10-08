<script setup>
import { ref } from 'vue';

const search = ref('');
</script>

<template>
    <input v-model="search" placeholder="Buscar…" />
    <p>Você digitou: {{ search }}</p>
</template>