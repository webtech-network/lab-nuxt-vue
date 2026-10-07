<script setup>
const props = defineProps({
    icon: String,
    title: String,
    description: String,
    color: {
        type: String,
        default: 'blue',
    },
});
</script>

<template>
    <li class="feature" :style="{ '--feature-color': `var(--color-${color})` }">
        <span class="feature__icon" aria-hidden="true">{{ icon }}</span>
        <div>
            <h3 class="feature__title">{{ title }}</h3>
            <p class="feature__description">{{ description }}</p>
        </div>
    </li>
</template>

<style scoped>
.feature {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background-color: var(--color-paper);
    border: var(--border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition:
        transform 0.3s var(--ease-bounce),
        box-shadow 0.3s ease;
}

.feature:hover {
    transform: translate(-2px, -3px) rotate(-0.6deg);
    box-shadow: 7px 7px 0 var(--color-ink);
}

.feature__icon {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border: 2px solid var(--color-ink);
    border-radius: var(--radius-sm);
    background-color: var(--feature-color);
    font-size: 1.4rem;
}

.feature__title {
    margin-bottom: 4px;
    font-size: 1.15rem;
}

.feature__description {
    font-size: 0.92rem;
    color: var(--color-ink-soft);
}
</style>
