<script setup>
const props = defineProps({
    id: Number,
    name: String,
    image: String,
    type: String,
    parent: String,
    description: String,
});
</script>

<template>
    <Card class="location-card">
        <div class="location-card__media">
            <img
                :src="image"
                :alt="name"
                width="640"
                height="400"
                loading="lazy"
                decoding="async"
            />
            <Badge class="location-card__badge">{{ type }}</Badge>
        </div>

        <div class="location-card__body">
            <h3 class="location-card__title">{{ name }}</h3>
            <p class="location-card__parent">
                <IconsMapPin />
                {{ parent }}
            </p>
            <p class="location-card__description">{{ description }}</p>

            <SeeDetailsButton :to="`/locations/${id}`" />
        </div>
    </Card>
</template>

<style scoped>
.location-card__media {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-bottom: var(--border);
    background-color: color-mix(in srgb, var(--color-blue) 25%, white);
}

.location-card__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.location-card:hover .location-card__media img {
    transform: scale(1.06);
}

.location-card__badge {
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 2;
}

.location-card__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;
    padding: 18px 20px 22px;
}

.location-card__title {
    font-size: 1.32rem;
}

.location-card__parent {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--color-blue-deep);
}

.location-card__description {
    display: -webkit-box;
    margin-bottom: 14px;
    overflow: hidden;
    font-size: 0.95rem;
    color: var(--color-ink-soft);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.location-card__body .btn {
    align-self: flex-start;
    margin-top: auto;
}

@media (max-width: 680px) {
    .location-card__title {
        font-size: 1.12rem;
    }
}
</style>
