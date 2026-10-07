<script setup>
const technologies = ['Nuxt', 'Vue', 'CSS', 'Gumball API', 'GitHub API'];
</script>

<template>
    <section class="section">
        <div class="container about">
            <div>
                <span class="eyebrow">O projeto</span>
                <h2 class="about__title">Um guia de fã para a cidade de <em>Elmore</em></h2>
                <p class="about__lead">
                    O Gumballverse é uma enciclopédia visual de
                    <strong>O Incrível Mundo de Gumball</strong>. A
                    <NuxtLink
                        class="inline-link"
                        to="https://gumball-api.vercel.app/"
                        target="_blank"
                    >
                        Gumball API
                    </NuxtLink>
                    fornece em tempo real todos os personagens e lugares, com dados abertos e
                    gratuitos da série.
                </p>
                <p class="about__lead">
                    A interface foi construída com Nuxt e Vue, com componentes reutilizáveis,
                    renderização no servidor e um visual inspirado no traço do desenho: contornos
                    grossos, sombras chapadas e as cores da família Watterson.
                </p>
            </div>

            <ul class="about__features">
                <FeatureCard
                    title="245 personagens"
                    description="Busca por nome, filtro por papel e ficha completa de cada um."
                    color="blue"
                >
                    <template #icon>
                        <IconsUsers />
                    </template>
                </FeatureCard>
                <FeatureCard
                    title="112 lugares"
                    description="Filtro por tipo e navegação entre lugares e sub-lugares."
                    color="yellow"
                >
                    <template #icon>
                        <IconsMap />
                    </template>
                </FeatureCard>
                <FeatureCard
                    title="100% responsivo"
                    description="Do celular ao monitor ultrawide, com animações suaves."
                    color="pink"
                >
                    <template #icon>
                        <IconsDevices />
                    </template>
                </FeatureCard>
                <FeatureCard
                    title="Rápido de verdade"
                    description="Páginas renderizadas no servidor e imagens carregadas sob demanda."
                    color="orange"
                >
                    <template #icon>
                        <IconsLightning />
                    </template>
                </FeatureCard>
            </ul>
        </div>

        <div class="container">
            <ul class="about__stack" aria-label="Tecnologias">
                <li v-for="technology in technologies" :key="technology">{{ technology }}</li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: clamp(32px, 5vw, 72px);
}

.about__title {
    max-width: 640px;
    font-size: clamp(2rem, 4.4vw, 3.2rem);
}

.about__title em {
    padding: 0 0.08em;
    font-style: normal;
    color: var(--color-orange);
    background: linear-gradient(transparent 62%, rgba(255, 210, 63, 0.7) 62% 92%, transparent 92%);
}

.about__lead {
    max-width: 560px;
    margin-top: 14px;
    font-size: 1.06rem;
    color: var(--color-ink-soft);
}

.about__features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.about__stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: clamp(36px, 5vw, 56px) 0 0;
    padding: 0;
    list-style: none;
}

.about__stack li {
    padding: 6px 16px;
    border: 2px dashed rgba(28, 36, 51, 0.35);
    border-radius: var(--radius-pill);
    font-family: var(--font-display);
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--color-ink-soft);
}

@media (max-width: 900px) {
    .about {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 560px) {
    .about__features {
        grid-template-columns: 1fr;
    }
}
</style>
