<template>
    <article class="detail">
        <slot name="media" />

        <div class="detail__content">
            <slot />
        </div>
    </article>
</template>

<style scoped>
.detail {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    overflow: hidden;
    background-color: var(--color-paper);
    border: 3px solid var(--color-ink);
    border-radius: var(--radius-lg);
    box-shadow: 10px 10px 0 var(--color-ink);
}

.detail__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: clamp(28px, 4vw, 52px);
    animation: fade-up 0.6s ease 0.1s both;
}

@keyframes fade-up {
    from {
        opacity: 0;
        transform: translateY(14px);
    }
}

@media (max-width: 900px) {
    .detail {
        grid-template-columns: 1fr;
        box-shadow: 7px 7px 0 var(--color-ink);
    }
}

@media (max-width: 560px) {
    .detail {
        border-radius: 24px;
        box-shadow: 5px 5px 0 var(--color-ink);
    }
}
</style>
