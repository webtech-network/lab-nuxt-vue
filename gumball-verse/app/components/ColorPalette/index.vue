<script setup>
const props = defineProps({
    colors: Array,
});
</script>

<template>
    <ul class="palette">
        <li v-for="color in colors" :key="color" class="swatch">
            <span class="swatch__dot" :style="{ background: color }"></span>
            <code>{{ color }}</code>
        </li>
    </ul>
</template>

<style scoped>
.palette {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.swatch {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 12px 5px 5px;
    border: 2px solid rgba(28, 36, 51, 0.15);
    border-radius: var(--radius-pill);
}

.swatch__dot {
    width: 26px;
    height: 26px;
    border: 2px solid var(--color-ink);
    border-radius: 50%;
}

.swatch code {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--color-ink-soft);
}
</style>
