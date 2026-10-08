<script setup>
const route = useRoute();

const { id } = route.params;

const { data, error } = await useFetch(`https://gumball-api-server.vercel.app/characters/${id}`);

if (error.value || !data.value) {
    throw createError({
        status: error.value?.status === 404 ? 404 : 503,
        fatal: true,
    });
}

useHead({
    title: `${data.value.name} | Gumball Verse`,
    link: [{ key: 'favicon', rel: 'icon', type: 'image/webp', href: data.value.image }],
});
</script>

<template>
    <section class="section section--details">
        <div class="container">
            <BackLink to="/characters">Todos os personagens</BackLink>

            <CharacterDetails
                :name="data.name"
                :full-name="data.fullName"
                :image="data.image"
                :description="data.description"
                :role="
                    data.role === 'main'
                        ? 'Principal'
                        : data.role === 'minor'
                          ? 'Secundário'
                          : 'Coadjuvante'
                "
                :status="
                    data.status === 'alive'
                        ? 'Vivo'
                        : data.status === 'deceased'
                          ? 'Morto'
                          : 'Morto-vivo'
                "
                :species="data.species"
                :gender="data.gender"
                :age="data.age ? `${data.age} anos` : 'Desconhecida'"
                :occupation="data.occupation"
                :animation-style="data.animationStyle"
                :first-appearance-code="data.firstAppearance?.code"
                :first-appearance-title="data.firstAppearance?.title"
                :aliases="data.aliases"
                :voice-actors="data.voiceActors"
                :colors="data.colors"
                :color="getCharacterColor(data.colors)"
            />
        </div>
    </section>
</template>
