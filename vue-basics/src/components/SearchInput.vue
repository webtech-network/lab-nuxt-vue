<script setup>
const emit = defineEmits(['search']);
</script>

<template>
    <input @input="emit('search', $event.target.value)" placeholder="Buscar…" />
</template>
