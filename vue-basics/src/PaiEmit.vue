<script setup>
import SearchInput from './components/SearchInput.vue';

function handleSearch(value) {
    console.log('Buscando por:', value);
}
</script>

<template>
    <SearchInput @search="handleSearch" />
</template>
