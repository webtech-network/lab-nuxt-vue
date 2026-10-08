<script setup>
import Greeting from './components/Greeting.vue';
import Hello from './components/Hello/index.vue';
import CharacterCard from './components/CharacterCard/index.vue';

const name = 'Gumball';
const age = 12;
</script>

<template>
    <Hello />
    <Greeting />
    <p>{{ name }} tem {{ age }} anos.</p>

    <CharacterCard name="Gumball" :age="12" is-main />
    <CharacterCard name="Darwin" :age="10" />
</template>