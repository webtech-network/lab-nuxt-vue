<script setup>
const props = defineProps({
    name: String,
    description: String,
    language: String,
    stars: Number,
    url: String,
});
</script>

<template>
    <NuxtLink :to="url" target="_blank" class="repository">
        <Card class="repository__card">
            <div class="repository__top">
                <IconsBook />
                <h3>{{ name }}</h3>
            </div>

            <p class="repository__description">{{ description || 'Sem descrição.' }}</p>

            <div class="repository__footer">
                <span v-if="language">
                    <i
                        class="repository__language"
                        :style="{ background: getLanguageColor(language) }"
                    ></i>
                    {{ language }}
                </span>
                <span>
                    <IconsStar class="repository__star" />
                    {{ formatNumber(stars) }}
                </span>
                <IconsArrowRight class="repository__arrow" />
            </div>
        </Card>
    </NuxtLink>
</template>

<style scoped>
.repository {
    display: flex;
}

.repository__card {
    flex: 1;
    gap: 10px;
    min-height: 180px;
    padding: 22px;
}

.repository__top {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-blue-deep);
}

.repository__top h3 {
    font-size: 1.2rem;
    color: var(--color-ink);
    overflow-wrap: anywhere;
}

.repository__description {
    display: -webkit-box;
    flex: 1;
    overflow: hidden;
    font-size: 0.94rem;
    color: var(--color-ink-soft);
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.repository__footer {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--color-muted);
}

.repository__footer span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.repository__language {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1.5px solid var(--color-ink);
    border-radius: 50%;
}

.repository__star {
    color: var(--color-yellow);
    stroke: var(--color-ink);
    stroke-width: 1;
}

.repository__arrow {
    margin-left: auto;
    color: var(--color-ink);
    transition: transform 0.25s var(--ease-bounce);
}

.repository:hover .repository__arrow {
    transform: translateX(4px);
}
</style>
