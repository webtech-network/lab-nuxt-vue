<script setup>
definePageMeta({
    scrollToTop: true,
});

const route = useRoute();
const router = useRouter();

const page = computed(() => Number(route.query.page) || 1);
const type = computed(() => route.query.type);
const search = computed(() => route.query.search);

const { data, error } = await useFetch('https://gumball-api-server.vercel.app/locations', {
    query: { page, type, search, limit: 12, sort: 'id' },
});

const totalItems = computed(() => data.value?.meta.totalItems ?? 0);

const types = [
    { value: 'town', label: 'Cidade' },
    { value: 'residence', label: 'Residência' },
    { value: 'school', label: 'Escola' },
    { value: 'school-facility', label: 'Espaço escolar' },
    { value: 'shop', label: 'Loja' },
    { value: 'restaurant', label: 'Restaurante' },
    { value: 'business', label: 'Comércio' },
    { value: 'public-service', label: 'Serviço público' },
    { value: 'leisure', label: 'Lazer' },
    { value: 'transport', label: 'Transporte' },
    { value: 'nature', label: 'Natureza' },
    { value: 'other-realm', label: 'Outra dimensão' },
];

let searchTimeout;

function handleSearch(value) {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        router.replace({ query: { type: type.value, search: value || undefined } });
    }, 400);
}

useHead({
    title: 'Lugares | Gumball Verse',
});
</script>

<template>
    <div>
        <PageHero
            color="yellow"
            eyebrow="Mapa de Elmore"
            title="Todos os lugares"
            lead="Da casa dos Watterson às dimensões mais bizarras: todos os cantos do universo Gumball."
        />

        <section class="section section--list">
            <div class="container">
                <ListToolbar
                    placeholder="Buscar lugar pelo nome…"
                    :count="`${totalItems} ${totalItems === 1 ? 'lugar' : 'lugares'}`"
                    :search="search"
                    @search="handleSearch"
                />

                <FilterChips>
                    <FilterChip :to="{ query: { search } }" :active="!type">Todos</FilterChip>
                    <FilterChip
                        v-for="currentType in types"
                        :key="currentType.value"
                        :to="{ query: { search, type: currentType.value } }"
                        :active="type === currentType.value"
                    >
                        {{ currentType.label }}
                    </FilterChip>
                </FilterChips>

                <StateMessage v-if="error">
                    Não foi possível carregar os lugares. Tente novamente mais tarde.
                </StateMessage>

                <StateMessage v-else-if="!data?.data.length">
                    Nenhum lugar encontrado. Tente outro termo de busca ou remova os filtros.
                </StateMessage>

                <LocationsGrid v-else :locations="data.data" />

                <Pagination
                    v-if="data?.meta.totalPages > 1"
                    :page="page"
                    :total-pages="data.meta.totalPages"
                />
            </div>
        </section>
    </div>
</template>
