<script setup>
const props = defineProps({
    title: String,
    subtitle: String,
    description: String,
});
</script>

<template>
    <header class="detail-heading">
        <div class="detail-heading__badges">
            <slot name="badges" />
        </div>

        <h1 class="detail-heading__title">{{ title }}</h1>
        <p v-if="subtitle" class="detail-heading__subtitle">{{ subtitle }}</p>
        <p class="detail-heading__description">{{ description }}</p>
    </header>
</template>

<style scoped>
.detail-heading {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.detail-heading__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 6px;
}

.detail-heading__title {
    font-size: clamp(2.3rem, 5vw, 3.8rem);
    font-weight: 700;
    letter-spacing: -0.01em;
}

.detail-heading__subtitle {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 500;
    color: var(--color-muted);
}

.detail-heading__description {
    max-width: 62ch;
    margin-top: 8px;
    font-size: 1.08rem;
    color: var(--color-ink-soft);
}
</style>
