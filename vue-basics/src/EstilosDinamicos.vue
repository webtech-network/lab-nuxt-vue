<script setup>
const isActive = ref(true);
const color = '#ff7a1a';
</script>

<template>
    <button class="chip" :class="{ 'is-active': isActive }">Todos</button>
    <div :style="{ backgroundColor: color }">Laranja</div>
</template>