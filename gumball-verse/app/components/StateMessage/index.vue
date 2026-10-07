<template>
    <p class="state-message">
        <slot />
    </p>
</template>

<style scoped>
.state-message {
    padding: 56px 24px;
    text-align: center;
    color: var(--color-ink-soft);
    background-color: var(--color-paper);
    border: 2.5px dashed rgba(28, 36, 51, 0.3);
    border-radius: var(--radius-md);
}
</style>
