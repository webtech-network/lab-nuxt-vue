<script setup>
const props = defineProps({
    name: String,
    image: String,
    description: String,
    type: String,
    parentId: Number,
    parentName: String,
    firstAppearanceCode: String,
    firstAppearanceTitle: String,
});
</script>

<template>
    <DetailCard layout="stacked">
        <template #media>
            <div class="location-details__banner">
                <img :src="image" :alt="name" width="1280" height="560" />
            </div>
        </template>

        <DetailHeading :title="name" :description="description">
            <template #badges>
                <Badge variant="solid">{{ type }}</Badge>
            </template>
        </DetailHeading>

        <InfoGrid :columns="3">
            <InfoItem label="Tipo">{{ type }}</InfoItem>
            <InfoItem label="Fica em">
                <NuxtLink v-if="parentId" class="inline-link" :to="`/locations/${parentId}`">
                    {{ parentName }}
                </NuxtLink>
                <template v-else>Nenhum, é um lugar principal</template>
            </InfoItem>
            <InfoItem label="Primeira aparição">
                <EpisodeTag :code="firstAppearanceCode" :title="firstAppearanceTitle" />
            </InfoItem>
        </InfoGrid>
    </DetailCard>
</template>

<style scoped>
.location-details__banner {
    aspect-ratio: 16 / 7;
    overflow: hidden;
    border-bottom: 3px solid var(--color-ink);
    background-color: color-mix(in srgb, var(--color-blue) 25%, white);
}

.location-details__banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: zoom-out 1.2s ease both;
}

@keyframes zoom-out {
    from {
        opacity: 0.4;
        transform: scale(1.08);
    }
}

@media (max-width: 680px) {
    .location-details__banner {
        aspect-ratio: 16 / 10;
    }
}
</style>
