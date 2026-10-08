<script setup>
const characters = [
    { id: 1, name: 'Gumball', species: 'Gato' },
    { id: 2, name: 'Darwin', species: 'Peixe' },
];
</script>

<template>
    <p v-for="(character, index) in characters" :key="character.id">
        {{ index + 1 }}. {{ character.name }} ({{ character.species }})
    </p>
</template>
