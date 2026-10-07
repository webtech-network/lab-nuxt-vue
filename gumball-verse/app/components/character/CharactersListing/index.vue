<script setup>
const { data } = await useFetch('https://gumball-api-server.vercel.app/characters', {
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

            <div class="grid grid--characters">
                <CharacterCard
                    v-for="currentCharacter in data?.data"
                    :key="currentCharacter.id"
                    :id="currentCharacter.id"
                    :name="currentCharacter.name"
                    :image="currentCharacter.image"
                    :species="currentCharacter.species"
                    :occupation="currentCharacter.occupation"
                    :role="currentCharacter.role"
                    :color="currentCharacter.colors?.[0]"
                />
            </div>
        </div>
    </section>
</template>
