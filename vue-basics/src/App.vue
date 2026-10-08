<script setup>
import Card from './components/Card/index.vue';
import CharacterCard from './components/CharacterCard/index.vue';
import Greeting from './components/Greeting.vue';
import Hello from './components/Hello/index.vue';

const name = 'Gumball';
const age = 12;
</script>

<template>
    <Hello />
    <Greeting />
    <p>{{ name }} tem {{ age }} anos.</p>

    <CharacterCard name="Gumball" :age="12" is-main />
    <CharacterCard name="Darwin" :age="10" />

    <Card>
        <h3>Gumball</h3>
        <p>Um gato azul de 12 anos.</p>
    </Card>
</template>