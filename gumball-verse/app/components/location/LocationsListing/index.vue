<script setup>
const props = defineProps({
    limit: Number,
});
</script>

<template>
    <section class="section">
        <div class="container">
            <SectionHeader
                eyebrow="Seção 02 · Mapa"
                lead="Casas, escolas, lojas e até outras dimensões. Escolha um destino e boa viagem."
                :see-all-url="limit ? '/locations' : undefined"
            >
                Lugares onde <em>tudo</em> pode acontecer
            </SectionHeader>

            <div class="grid grid--locations">
                <LocationCard
                    :id="1"
                    name="Lugar 1"
                    image="https://placehold.co/640x400/png?text=Lugar+1"
                    type="Cidade"
                    parent="Universo Gumball"
                    description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                />
                <LocationCard
                    :id="2"
                    name="Lugar 2"
                    image="https://placehold.co/640x400/png?text=Lugar+2"
                    type="Residência"
                    parent="Elmore"
                    description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                />
                <LocationCard
                    :id="3"
                    name="Lugar 3"
                    image="https://placehold.co/640x400/png?text=Lugar+3"
                    type="Escola"
                    parent="Elmore"
                    description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                />
                <LocationCard
                    :id="4"
                    name="Lugar 4"
                    image="https://placehold.co/640x400/png?text=Lugar+4"
                    type="Loja"
                    parent="Elmore"
                    description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                />
                <LocationCard
                    :id="5"
                    name="Lugar 5"
                    image="https://placehold.co/640x400/png?text=Lugar+5"
                    type="Lazer"
                    parent="Elmore"
                    description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                />
                <LocationCard
                    :id="6"
                    name="Lugar 6"
                    image="https://placehold.co/640x400/png?text=Lugar+6"
                    type="Outra dimensão"
                    parent="Universo Gumball"
                    description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                />
            </div>
        </div>
    </section>
</template>
