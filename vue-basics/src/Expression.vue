<script setup>
const firstName = 'Gumball';
const lastName = 'Watterson';
const age = 12;
</script>

<template>
    <p>{{ firstName + ' ' + lastName }}</p>
    <p>{{ `${firstName} ${lastName}` }}</p>
    <p>{{ name.toUpperCase() }}</p>
    <p>Daqui a 5 anos terá {{ age + 5 }} anos.</p>
    <p>{{ age >= 18 ? 'Adulto' : 'Criança' }}</p>
</template>
