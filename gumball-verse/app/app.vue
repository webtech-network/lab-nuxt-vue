<script setup lang="ts">
const { data } = await useFetch('https://gumball-api-server.vercel.app/characters/random');
</script>

<template>
    <h1>{{ data[0].name }}</h1>
    <p>{{ data[0].description }}</p>
    <p>{{ data[0].species }}</p>
    <p>{{ data[0].gender }}</p>
</template>