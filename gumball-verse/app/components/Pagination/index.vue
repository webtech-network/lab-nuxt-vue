<script setup>
const props = defineProps({
    page: Number,
    totalPages: Number,
});

const route = useRoute();
</script>

<template>
    <nav class="pagination" aria-label="Paginação">
        <NuxtLink
            v-if="page > 1"
            :to="{ query: { ...route.query, page: page - 1 } }"
            class="page-btn"
            aria-label="Página anterior"
        >
            <IconsArrowLeft />
        </NuxtLink>

        <NuxtLink
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            :to="{ query: { ...route.query, page: pageNumber } }"
            class="page-btn"
            :class="{ 'is-active': pageNumber === page }"
            :aria-current="pageNumber === page ? 'page' : undefined"
        >
            {{ pageNumber }}
        </NuxtLink>

        <NuxtLink
            v-if="page < totalPages"
            :to="{ query: { ...route.query, page: page + 1 } }"
            class="page-btn"
            aria-label="Próxima página"
        >
            <IconsArrowRight />
        </NuxtLink>
    </nav>
</template>

<style scoped>
.pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 48px;
}

.page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 46px;
    height: 46px;
    padding: 0 12px;
    border: var(--border);
    border-radius: var(--radius-sm);
    background-color: var(--color-paper);
    font-family: var(--font-display);
    font-size: 1.02rem;
    font-weight: 600;
    box-shadow: 3px 3px 0 var(--color-ink);
    transition:
        transform 0.2s var(--ease-bounce),
        box-shadow 0.2s ease,
        background-color 0.2s ease;
}

.page-btn:hover {
    transform: translate(-2px, -2px);
    background-color: var(--color-yellow);
    box-shadow: 5px 5px 0 var(--color-ink);
}

.page-btn.is-active {
    background-color: var(--color-blue);
    color: #fff;
}

@media (max-width: 560px) {
    .page-btn {
        min-width: 40px;
        height: 40px;
    }
}
</style>
