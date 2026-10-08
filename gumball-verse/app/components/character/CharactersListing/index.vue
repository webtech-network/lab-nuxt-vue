<script setup>
const { data, error } = await useFetch('https://gumball-api-server.vercel.app/characters', {
    query: { limit: 8 },
});
</script>

<template>
    <section class="section">
        <div class="container">
            <SectionHeader
                eyebrow="Seção 01 · Elenco"
                lead="Da família Watterson aos colegas da Elmore Junior High, cada um mais imprevisível que o outro."
                see-all-url="/characters"
            >
                Os moradores mais <em>esquisitos</em> de Elmore
            </SectionHeader>

            <StateMessage v-if="error">
                Não foi possível carregar os personagens. Tente novamente mais tarde.
            </StateMessage>

            <div v-else class="grid grid--characters">
                <CharacterCard
                    v-for="currentCharacter in data?.data"
                    :key="currentCharacter.id"
                    :id="currentCharacter.id"
                    :name="currentCharacter.name"
                    :image="currentCharacter.image"
                    :species="currentCharacter.species"
                    :occupation="currentCharacter.occupation"
                    :role="currentCharacter.role"
                    :color="getCharacterColor(currentCharacter.colors)"
                />
            </div>
        </div>
    </section>
</template>
