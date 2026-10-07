<script setup>
const props = defineProps({
    id: Number,
    name: String,
    image: String,
    species: String,
    occupation: String,
    role: String,
    color: String,
});
</script>

<template>
    <Card class="character-card" :style="{ '--character-color': color }">
        <div class="character-card__media">
            <Badge class="character-card__badge">{{ role }}</Badge>
            <img
                :src="image"
                :alt="name"
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
            />
        </div>

        <div class="character-card__body">
            <h3 class="character-card__title">{{ name }}</h3>
            <p class="character-card__meta">
                {{ species }}
                <template v-if="occupation"> · {{ occupation }}</template>
            </p>

            <SeeDetailsButton :to="`/characters/${id}`" />
        </div>
    </Card>
</template>

<style scoped>
.character-card__media {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-bottom: var(--border);
    background:
        radial-gradient(
            circle at 50% 115%,
            color-mix(in srgb, var(--character-color) 70%, white) 0 45%,
            transparent 46%
        ),
        color-mix(in srgb, var(--character-color) 28%, white);
}

.character-card__media::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(28, 36, 51, 0.09) 1.4px, transparent 1.6px);
    background-size: 16px 16px;
}

.character-card__media img {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 18px 18px 0;
    object-fit: contain;
    object-position: center bottom;
    transition: transform 0.45s var(--ease-bounce);
}

.character-card:hover .character-card__media img {
    transform: scale(1.07) translateY(-4px);
}

.character-card__badge {
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 2;
}

.character-card__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 6px;
    padding: 18px 20px 20px;
}

.character-card__title {
    font-size: 1.32rem;
}

.character-card__meta {
    margin-bottom: 12px;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--color-muted);
}

.character-card__body .btn {
    align-self: flex-start;
    margin-top: auto;
}

@media (max-width: 680px) {
    .character-card__body {
        padding: 14px 14px 16px;
    }

    .character-card__media img {
        padding: 12px 12px 0;
    }

    .character-card__title {
        font-size: 1.12rem;
    }

    .character-card__meta {
        font-size: 0.84rem;
    }

    .character-card__badge {
        top: 10px;
        left: 10px;
        padding: 3px 9px;
        font-size: 0.7rem;
    }
}

@media (max-width: 560px) {
    .character-card__body .btn {
        align-self: stretch;
    }
}
</style>
