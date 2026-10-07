<script setup>
const props = defineProps({
    username: String,
    limit: {
        type: Number,
        default: 6,
    },
});

const { data, error } = await useFetch(`https://api.github.com/users/${props.username}/repos`, {
    query: { sort: 'updated', per_page: 30 },
});

const repositories = computed(() =>
    (data.value ?? [])
        .filter((repository) => !repository.fork && !repository.archived)
        .slice(0, props.limit)
);
</script>

<template>
    <section class="section">
        <div class="container">
            <SectionHeader
                eyebrow="Código aberto"
                :see-all-url="`https://github.com/${username}?tab=repositories`"
            >
                Projetos recentes
            </SectionHeader>

            <StateMessage v-if="error">
                Não foi possível carregar os repositórios agora. Tente novamente em alguns minutos.
            </StateMessage>

            <StateMessage v-else-if="!repositories.length">
                Nenhum repositório público por aqui.
            </StateMessage>

            <div v-else class="grid grid--repositories">
                <RepositoryCard
                    v-for="repository of repositories"
                    :key="repository.id"
                    :name="repository.name"
                    :description="repository.description"
                    :language="repository.language"
                    :stars="repository.stargazers_count"
                    :url="repository.html_url"
                />
            </div>
        </div>
    </section>
</template>
