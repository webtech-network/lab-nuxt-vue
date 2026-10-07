<script setup>
const props = defineProps({
    label: String,
});
</script>

<template>
    <div class="info">
        <span class="info__label">{{ label }}</span>
        <span class="info__value">
            <slot />
        </span>
    </div>
</template>

<style scoped>
.info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    padding: 14px 16px;
    background-color: var(--color-cream);
    border: 2px solid rgba(28, 36, 51, 0.12);
    border-radius: var(--radius-sm);
}

.info__label {
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-muted);
}

.info__value {
    font-family: var(--font-display);
    font-size: 1.08rem;
    font-weight: 600;
    overflow-wrap: anywhere;
}
</style>
