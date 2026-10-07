<script setup>
const route = useRoute();
const { id } = route.params;
</script>

<template>
    <div>
        <section class="section section--details">
            <div class="container">
                <BackLink to="/locations">Todos os lugares</BackLink>

                <LocationDetails
                    name="Nome do lugar"
                    image="https://placehold.co/1280x560/png?text=Lugar"
                    description="Uma breve descrição do lugar, contando o que acontece por lá e qual é a sua importância no universo de O Incrível Mundo de Gumball."
                    type="Escola"
                    :parent-id="1"
                    parent-name="Elmore"
                    first-appearance-code="S01E02"
                    first-appearance-title="Nome do episódio"
                />
            </div>
        </section>

        <section class="section">
            <div class="container">
                <SectionHeader eyebrow="Explore mais"
                    >Lugares dentro de Nome do lugar</SectionHeader
                >

                <div class="grid grid--locations">
                    <LocationCard
                        :id="2"
                        name="Lugar 1"
                        image="https://placehold.co/640x400/png?text=Lugar+1"
                        type="Espaço escolar"
                        parent="Nome do lugar"
                        description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                    />
                    <LocationCard
                        :id="3"
                        name="Lugar 2"
                        image="https://placehold.co/640x400/png?text=Lugar+2"
                        type="Espaço escolar"
                        parent="Nome do lugar"
                        description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                    />
                    <LocationCard
                        :id="4"
                        name="Lugar 3"
                        image="https://placehold.co/640x400/png?text=Lugar+3"
                        type="Espaço escolar"
                        parent="Nome do lugar"
                        description="Um dos cantos mais curiosos do universo Gumball, onde qualquer coisa pode acontecer."
                    />
                </div>
            </div>
        </section>
    </div>
</template>
