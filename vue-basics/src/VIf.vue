<script setup>
const status = 'alive';
</script>

<template>
    <p v-if="status === 'alive'">Vivo</p>
    <p v-else-if="status === 'deceased'">Morto</p>
    <p v-else>Desconhecido</p>
</template>
