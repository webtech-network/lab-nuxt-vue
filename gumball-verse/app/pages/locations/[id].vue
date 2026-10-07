<script setup>
const route = useRoute();
const { id } = route.params;
</script>

<template>
    <section class="section section--details">
        <div class="container">
            <BackLink to="/locations">Todos os lugares</BackLink>

            <LocationDetails
                name="Nome do lugar"
                image="https://placehold.co/640x400/png?text=Lugar"
                description="Uma breve descrição do lugar, contando o que acontece por lá e qual é a sua importância no universo de O Incrível Mundo de Gumball."
                type="Escola"
                :parent-id="1"
                parent-name="Elmore"
                first-appearance-code="S01E02"
                first-appearance-title="Nome do episódio"
                color="#ffd23f"
            />
        </div>
    </section>
</template>
