<script setup>
const props = defineProps({
    name: String,
    fullName: String,
    image: String,
    description: String,
    role: String,
    status: String,
    species: String,
    gender: String,
    age: String,
    occupation: String,
    animationStyle: String,
    firstAppearanceCode: String,
    firstAppearanceTitle: String,
    aliases: Array,
    voiceActors: Array,
    colors: Array,
    color: String,
});
</script>

<template>
    <DetailCard class="character-details" :style="{ '--detail-color': color }">
        <template #media>
            <div class="character-details__visual">
                <div class="character-details__halo" aria-hidden="true"></div>
                <img :src="image" :alt="name" width="400" height="400" />
            </div>
        </template>

        <DetailHeading :title="name" :subtitle="fullName" :description="description">
            <template #badges>
                <Badge variant="solid">{{ role }}</Badge>
                <Badge variant="outline">{{ status }}</Badge>
            </template>
        </DetailHeading>

        <InfoGrid>
            <InfoItem label="Espécie">{{ species }}</InfoItem>
            <InfoItem label="Gênero">{{ gender }}</InfoItem>
            <InfoItem label="Idade">{{ age }}</InfoItem>
            <InfoItem label="Ocupação">{{ occupation }}</InfoItem>
            <InfoItem label="Animação">{{ animationStyle }}</InfoItem>
            <InfoItem label="Primeira aparição">
                <EpisodeTag :code="firstAppearanceCode" :title="firstAppearanceTitle" />
            </InfoItem>
        </InfoGrid>

        <DetailBlock v-if="aliases?.length" title="Também conhecido como">
            <TagList :items="aliases" />
        </DetailBlock>

        <DetailBlock v-if="voiceActors?.length" title="Vozes originais">
            <template #icon>
                <IconsMicrophone />
            </template>
            <TagList :items="voiceActors" soft />
        </DetailBlock>

        <DetailBlock v-if="colors?.length" title="Paleta de cores">
            <ColorPalette :colors="colors" />
        </DetailBlock>
    </DetailCard>
</template>

<style scoped>
.character-details__visual {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 420px;
    overflow: hidden;
    padding: 40px 32px 0;
    border-right: 3px solid var(--color-ink);
    background:
        radial-gradient(rgba(28, 36, 51, 0.1) 1.6px, transparent 1.8px) 0 0 / 20px 20px,
        linear-gradient(
            160deg,
            color-mix(in srgb, var(--detail-color) 30%, white),
            color-mix(in srgb, var(--detail-color) 65%, white)
        );
}

.character-details__halo {
    position: absolute;
    bottom: -18%;
    left: 50%;
    width: 115%;
    aspect-ratio: 1;
    border: 3px solid var(--color-ink);
    border-radius: 50%;
    background-color: color-mix(in srgb, var(--detail-color) 85%, white);
    transform: translateX(-50%);
}

.character-details__visual img {
    position: relative;
    width: auto;
    max-height: 560px;
    object-fit: contain;
    filter: drop-shadow(6px 8px 0 rgba(28, 36, 51, 0.85));
    animation: pop-in 0.7s var(--ease-bounce) both;
}

@keyframes pop-in {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.94);
    }
}

@media (max-width: 900px) {
    .character-details__visual {
        height: 380px;
        min-height: 0;
        border-right: 0;
        border-bottom: 3px solid var(--color-ink);
    }

    .character-details__visual img {
        max-height: 100%;
    }
}

@media (max-width: 560px) {
    .character-details__visual {
        height: 320px;
        padding: 24px 16px 0;
    }
}
</style>
