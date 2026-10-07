<script setup>
const props = defineProps({
    items: Array,
    soft: Boolean,
});
</script>

<template>
    <ul class="tags" :class="{ 'tags--soft': soft }">
        <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
</template>

<style scoped>
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.tags li {
    padding: 5px 14px;
    border: 2px solid var(--color-ink);
    border-radius: var(--radius-pill);
    background-color: color-mix(in srgb, var(--detail-color, var(--color-yellow)) 22%, white);
    font-size: 0.9rem;
    font-weight: 700;
}

.tags--soft li {
    background-color: var(--color-paper);
    border-color: rgba(28, 36, 51, 0.25);
}
</style>
