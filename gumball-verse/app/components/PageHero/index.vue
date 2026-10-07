<script setup>
const props = defineProps({
    eyebrow: String,
    title: String,
    lead: String,
    color: {
        type: String,
        default: 'blue',
    },
});
</script>

<template>
    <section class="page-hero" :class="`page-hero--${color}`">
        <div class="container page-hero__content">
            <NuxtLink to="/" class="page-hero__back">
                <IconsArrowLeft />
                Voltar ao início
            </NuxtLink>

            <span class="eyebrow page-hero__eyebrow">{{ eyebrow }}</span>
            <h1 class="page-hero__title">{{ title }}</h1>
            <p class="page-hero__lead">{{ lead }}</p>
        </div>
    </section>
</template>

<style scoped>
.page-hero {
    position: relative;
    overflow: hidden;
    padding: clamp(36px, 6vw, 70px) 0 clamp(48px, 7vw, 84px);
    border-bottom: 3px solid var(--color-ink);
    color: var(--color-ink);
}

.page-hero::after {
    content: '';
    position: absolute;
    right: -60px;
    bottom: -120px;
    width: 340px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.22);
    box-shadow: -220px -60px 0 -120px rgba(255, 255, 255, 0.2);
}

.page-hero--blue {
    background-color: var(--color-blue);
}

.page-hero--yellow {
    background-color: var(--color-yellow);
}

.page-hero--pink {
    background-color: var(--color-pink);
}

.page-hero__content {
    position: relative;
    z-index: 1;
}

.page-hero__back {
    display: flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    margin-bottom: 22px;
    font-size: 0.95rem;
    font-weight: 800;
    transition: gap 0.2s ease;
}

.page-hero__back:hover {
    gap: 10px;
}

.page-hero__eyebrow {
    display: block;
    color: var(--color-ink);
}

.page-hero__title {
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 700;
    color: #fff;
    -webkit-text-stroke: 2.5px var(--color-ink);
    paint-order: stroke fill;
    text-shadow: 5px 5px 0 var(--color-ink);
}

.page-hero__lead {
    max-width: 560px;
    margin-top: 16px;
    font-size: 1.1rem;
    font-weight: 600;
}
</style>
