<script setup>
const route = useRoute();
const { id } = route.params;
</script>

<template>
    <section class="section section--details">
        <div class="container">
            <BackLink to="/characters">Todos os personagens</BackLink>

            <CharacterDetails
                name="Nome do personagem"
                full-name="Nome completo do personagem"
                image="https://placehold.co/400x400/png?text=Personagem"
                description="Uma breve descrição do personagem, contando quem ele é, o que faz e qual é o seu papel no universo de O Incrível Mundo de Gumball."
                role="Principal"
                status="Vivo"
                species="Espécie"
                gender="Masculino"
                age="12 anos"
                occupation="Ocupação"
                animation-style="2D"
                first-appearance-code="S01E01"
                first-appearance-title="Nome do episódio"
                :aliases="['Apelido 1', 'Apelido 2', 'Apelido 3']"
                :voice-actors="['Dublador 1', 'Dublador 2']"
                :colors="['#3db8e0', '#ffffff', '#1c2433']"
                color="#3db8e0"
            />
        </div>
    </section>
</template>
