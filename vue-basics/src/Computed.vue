<script setup>
import { computed, ref } from 'vue';

const price = ref(10);
const quantity = ref(3);

const total = computed(() => price.value * quantity.value);
</script>

<template>
    <p>Total: R$ {{ total }}</p>
</template>
