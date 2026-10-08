<script setup>
definePageMeta({
    scrollToTop: true,
});

const route = useRoute();
const router = useRouter();

const page = computed(() => Number(route.query.page) || 1);
const role = computed(() => route.query.role);
const search = computed(() => route.query.search);

const { data, error } = await useFetch('https://gumball-api-server.vercel.app/characters', {
    query: { page, role, search, limit: 20, sort: 'id' },
});

const totalItems = computed(() => data.value?.meta.totalItems ?? 0);

let searchTimeout;

function handleSearch(value) {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        router.replace({ query: { role: role.value, search: value || undefined } });
    }, 400);
}

useHead({
    title: 'Personagens | Gumball Verse',
});
</script>

<template>
    <div>
        <PageHero
            eyebrow="Elenco completo"
            title="Todos os personagens"
            lead="Explore cada morador de Elmore, dos protagonistas às participações de um episódio só."
        />

        <section class="section section--list">
            <div class="container">
                <ListToolbar
                    placeholder="Buscar personagem pelo nome…"
                    :count="`${totalItems} ${totalItems === 1 ? 'personagem' : 'personagens'}`"
                    :search="search"
                    @search="handleSearch"
                />

                <FilterChips>
                    <FilterChip :to="{ query: { search } }" :active="!role">Todos</FilterChip>
                    <FilterChip :to="{ query: { search, role: 'main' } }" :active="role === 'main'">
                        Principais
                    </FilterChip>
                    <FilterChip
                        :to="{ query: { search, role: 'supporting' } }"
                        :active="role === 'supporting'"
                    >
                        Coadjuvantes
                    </FilterChip>
                    <FilterChip
                        :to="{ query: { search, role: 'minor' } }"
                        :active="role === 'minor'"
                    >
                        Secundários
                    </FilterChip>
                </FilterChips>

                <StateMessage v-if="error">
                    Não foi possível carregar os personagens. Tente novamente mais tarde.
                </StateMessage>

                <StateMessage v-else-if="!data?.data.length">
                    Nenhum personagem encontrado. Tente outro termo de busca ou remova os filtros.
                </StateMessage>

                <CharactersGrid v-else :characters="data.data" />

                <Pagination
                    v-if="data?.meta.totalPages > 1"
                    :page="page"
                    :total-pages="data.meta.totalPages"
                />
            </div>
        </section>
    </div>
</template>
