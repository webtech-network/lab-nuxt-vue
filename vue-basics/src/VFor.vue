<script setup>
const characters = ['Gumball', 'Darwin', 'Anais'];
</script>

<template>
    <ul>
        <li v-for="character in characters" :key="character">{{ character }}</li>
    </ul>
</template>