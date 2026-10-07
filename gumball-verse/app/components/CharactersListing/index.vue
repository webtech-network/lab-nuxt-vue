<script setup>
const props = defineProps({
    limit: Number,
});
</script>

<template>
    <section class="section">
        <div class="container">
            <SectionHeader
                eyebrow="Seção 01 · Elenco"
                lead="Da família Watterson aos colegas da Elmore Junior High — cada um mais imprevisível que o outro."
                :see-all-url="limit ? '/characters' : undefined"
            >
                Os moradores mais <em>esquisitos</em> de Elmore
            </SectionHeader>

            <div class="grid grid--characters">
                <CharacterCard
                    :id="1"
                    name="Personagem 1"
                    image="https://placehold.co/400x400/png?text=Personagem+1"
                    species="Espécie"
                    occupation="Ocupação"
                    role="Principal"
                    color="#3db8e0"
                />
                <CharacterCard
                    :id="2"
                    name="Personagem 2"
                    image="https://placehold.co/400x400/png?text=Personagem+2"
                    species="Espécie"
                    occupation="Ocupação"
                    role="Principal"
                    color="#ff7a1a"
                />
                <CharacterCard
                    :id="3"
                    name="Personagem 3"
                    image="https://placehold.co/400x400/png?text=Personagem+3"
                    species="Espécie"
                    occupation="Ocupação"
                    role="Principal"
                    color="#f7a8b8"
                />
                <CharacterCard
                    :id="4"
                    name="Personagem 4"
                    image="https://placehold.co/400x400/png?text=Personagem+4"
                    species="Espécie"
                    occupation="Ocupação"
                    role="Coadjuvante"
                    color="#ffd23f"
                />
                <CharacterCard
                    :id="5"
                    name="Personagem 5"
                    image="https://placehold.co/400x400/png?text=Personagem+5"
                    species="Espécie"
                    occupation="Ocupação"
                    role="Coadjuvante"
                    color="#46bd3f"
                />
                <CharacterCard
                    :id="6"
                    name="Personagem 6"
                    image="https://placehold.co/400x400/png?text=Personagem+6"
                    species="Espécie"
                    occupation="Ocupação"
                    role="Coadjuvante"
                    color="#3db8e0"
                />
                <CharacterCard
                    :id="7"
                    name="Personagem 7"
                    image="https://placehold.co/400x400/png?text=Personagem+7"
                    species="Espécie"
                    occupation="Ocupação"
                    role="Secundário"
                    color="#ff7a1a"
                />
                <CharacterCard
                    :id="8"
                    name="Personagem 8"
                    image="https://placehold.co/400x400/png?text=Personagem+8"
                    species="Espécie"
                    occupation="Ocupação"
                    role="Secundário"
                    color="#f7a8b8"
                />
            </div>
        </div>
    </section>
</template>
