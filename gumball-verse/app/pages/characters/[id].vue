<script setup>
const route = useRoute();
const { id } = route.params;
</script>

<template>
    <h1>Página do personagem de ID {{ id }}</h1>
</template>
