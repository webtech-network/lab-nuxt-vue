<script setup>
const props = defineProps({
    eyebrow: String,
    lead: String,
    seeAllUrl: String,
});
</script>

<template>
    <header class="section-header">
        <div>
            <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
            <h2 class="section-header__title">
                <slot />
            </h2>
            <p v-if="lead" class="section-header__lead">{{ lead }}</p>
        </div>

        <NuxtLink v-if="seeAllUrl" :to="seeAllUrl" class="btn btn--dark">Ver todos</NuxtLink>
    </header>
</template>

<style scoped>
.section-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: clamp(32px, 5vw, 52px);
}

.section-header__title {
    max-width: 640px;
    font-size: clamp(2rem, 4.4vw, 3.2rem);
}

.section-header__title :slotted(em) {
    padding: 0 0.08em;
    font-style: normal;
    color: var(--color-orange);
    background: linear-gradient(transparent 62%, rgba(255, 210, 63, 0.7) 62% 92%, transparent 92%);
}

.section-header__lead {
    max-width: 560px;
    margin-top: 14px;
    font-size: 1.06rem;
    color: var(--color-ink-soft);
}

@media (max-width: 680px) {
    .section-header {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media (max-width: 560px) {
    .section-header .btn {
        width: 100%;
    }
}
</style>
