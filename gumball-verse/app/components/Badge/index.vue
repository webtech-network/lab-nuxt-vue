<script setup>
const props = defineProps({
    variant: {
        type: String,
        default: 'default',
    },
});
</script>

<template>
    <span class="badge" :class="`badge--${variant}`">
        <slot />
    </span>
</template>

<style scoped>
.badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border: 2px solid var(--color-ink);
    border-radius: var(--radius-pill);
    background-color: var(--color-paper);
    font-family: var(--font-display);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    white-space: nowrap;
}

.badge--solid {
    background-color: var(--color-ink);
    color: #fff;
}

.badge--outline {
    background-color: transparent;
}
</style>
