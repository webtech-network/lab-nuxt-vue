<template>
    <article class="card">
        <slot />
    </article>
</template>

<style scoped>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--color-paper);
    border: var(--border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    transition:
        transform 0.3s var(--ease-bounce),
        box-shadow 0.3s ease;
}

.card:hover {
    transform: translate(-3px, -5px) rotate(-0.4deg);
    box-shadow: 10px 11px 0 var(--color-ink);
}
</style>
