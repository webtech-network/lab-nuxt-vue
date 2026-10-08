<script setup>
const props = defineProps({
    name: String,
    age: Number,
    isMain: Boolean,
});
</script>

<template>
    <article>
        <h3>{{ name }}</h3>
        <p>{{ age }} anos</p>
        <span v-if="isMain">Principal</span>
    </article>
</template>
