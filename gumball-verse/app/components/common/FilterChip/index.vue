<script setup>
const props = defineProps({
    to: Object,
    active: Boolean,
});
</script>

<template>
    <NuxtLink :to="to" class="chip" :class="{ 'is-active': active }" :aria-current="active">
        <slot />
    </NuxtLink>
</template>

<style scoped>
.chip {
    flex-shrink: 0;
    padding: 7px 16px;
    border: 2px solid var(--color-ink);
    border-radius: var(--radius-pill);
    background: transparent;
    font-size: 0.9rem;
    font-weight: 700;
    transition:
        background-color 0.2s ease,
        transform 0.2s var(--ease-bounce);
}

.chip:hover {
    background-color: var(--color-paper);
    transform: translateY(-2px);
}

.chip.is-active {
    background-color: var(--color-ink);
    color: #fff;
}
</style>
