<script setup>
function sayHello() {
    alert('Olá!');
}
</script>

<template>
    <button v-on:click="sayHello">Clique</button>
    <button @click="sayHello">Clique</button>
</template>