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
    <DetailCard>
        <template #media>
            <div class="location-details__visual">
                <img :src="image" :alt="name" width="640" height="400" />
            </div>
        </template>

        <DetailHeading :title="name" :description="description">
            <template #badges>
                <Badge variant="solid">{{ type }}</Badge>
            </template>
        </DetailHeading>

        <InfoGrid>
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
.location-details__visual {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 420px;
    padding: 40px 32px;
    border-right: 3px solid var(--color-ink);
    background:
        radial-gradient(rgba(28, 36, 51, 0.1) 1.6px, transparent 1.8px) 0 0 / 20px 20px,
        linear-gradient(
            160deg,
            color-mix(in srgb, var(--color-yellow) 30%, white),
            color-mix(in srgb, var(--color-yellow) 65%, white)
        );
}

.location-details__visual img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border: 3px solid var(--color-ink);
    border-radius: var(--radius-md);
    background-color: var(--color-paper);
    box-shadow: var(--shadow-md);
    animation: pop-in 0.7s var(--ease-bounce) both;
}

@keyframes pop-in {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.94);
    }
}

@media (max-width: 900px) {
    .location-details__visual {
        min-height: 0;
        border-right: 0;
        border-bottom: 3px solid var(--color-ink);
    }
}

@media (max-width: 560px) {
    .location-details__visual {
        padding: 24px 16px;
    }
}
</style>
