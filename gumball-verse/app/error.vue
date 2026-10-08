<script setup>
const props = defineProps({
    error: Object,
});

const statusCode = computed(() => props.error?.status || 500);
const isNotFound = computed(() => statusCode.value === 404);
const digits = computed(() => String(statusCode.value).split(''));

useHead({
    title: computed(() =>
        isNotFound.value
            ? 'Página não encontrada | Gumball Verse'
            : 'Algo deu errado | Gumball Verse'
    ),
});

function goTo(path) {
    clearError({ redirect: path });
}
</script>

<template>
    <NuxtLayout>
        <section class="section">
            <div class="container error-page">
                <div class="error-page__code" :aria-label="`Erro ${statusCode}`">
                    <template v-for="(digit, index) in digits" :key="index">
                        <span v-if="digit === '0'" class="error-page__face" aria-hidden="true">
                            <img
                                src="/images/brand/gumball-face.png"
                                alt=""
                                width="192"
                                height="153"
                            />
                        </span>
                        <span v-else class="error-page__digit" aria-hidden="true">{{ digit }}</span>
                    </template>
                </div>

                <span class="eyebrow">Erro {{ statusCode }}</span>

                <template v-if="isNotFound">
                    <h1 class="error-page__title">Essa página sumiu de <em>Elmore</em></h1>
                    <p class="error-page__lead">
                        Talvez ela tenha sido levada pelo Darwin, ou talvez nunca tenha existido.
                        Que tal voltar para um lugar conhecido?
                    </p>

                    <div class="error-page__actions">
                        <button type="button" class="btn btn--primary" @click="goTo('/')">
                            Voltar ao início
                        </button>
                        <button type="button" class="btn btn--light" @click="goTo('/characters')">
                            Ver personagens
                        </button>
                    </div>
                </template>

                <template v-else>
                    <h1 class="error-page__title">Algo deu errado em <em>Elmore</em></h1>
                    <p class="error-page__lead">
                        Tivemos um problema ao carregar esta página. Tente novamente em instantes.
                    </p>

                    <div class="error-page__actions">
                        <button
                            type="button"
                            class="btn btn--primary"
                            @click="goTo(error?.url || '/')"
                        >
                            Tentar novamente
                        </button>
                        <button type="button" class="btn btn--light" @click="goTo('/')">
                            Voltar ao início
                        </button>
                    </div>
                </template>
            </div>
        </section>
    </NuxtLayout>
</template>

<style scoped>
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.error-page__code {
    display: flex;
    align-items: center;
    gap: clamp(8px, 2vw, 20px);
    margin-bottom: clamp(24px, 4vw, 40px);
}

.error-page__digit {
    font-family: var(--font-display);
    font-size: clamp(6rem, 18vw, 11rem);
    font-weight: 700;
    line-height: 1;
    color: var(--color-blue);
    -webkit-text-stroke: 3px var(--color-ink);
    paint-order: stroke fill;
    text-shadow: 6px 6px 0 var(--color-ink);
}

.error-page__face {
    display: grid;
    place-items: center;
    width: clamp(110px, 18vw, 170px);
    aspect-ratio: 1;
    border: 3px solid var(--color-ink);
    border-radius: 50%;
    background-color: var(--color-yellow);
    box-shadow: 6px 6px 0 var(--color-ink);
    animation: wobble 3.6s ease-in-out infinite;
}

.error-page__face img {
    width: 72%;
    height: auto;
    filter: drop-shadow(2.5px 2.5px 0 var(--color-ink));
}

.error-page__title {
    max-width: 640px;
    font-size: clamp(2rem, 4.4vw, 3.2rem);
}

.error-page__title em {
    padding: 0 0.08em;
    font-style: normal;
    color: var(--color-orange);
    background: linear-gradient(transparent 62%, rgba(255, 210, 63, 0.7) 62% 92%, transparent 92%);
}

.error-page__lead {
    max-width: 520px;
    margin-top: 16px;
    font-size: 1.06rem;
    color: var(--color-ink-soft);
}

.error-page__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    margin-top: 30px;
}

@keyframes wobble {
    0%,
    100% {
        transform: rotate(0);
    }
    25% {
        transform: rotate(-8deg) translateY(-6px);
    }
    75% {
        transform: rotate(8deg) translateY(-6px);
    }
}

@media (max-width: 560px) {
    .error-page__digit {
        -webkit-text-stroke-width: 2px;
        text-shadow: 4px 4px 0 var(--color-ink);
    }

    .error-page__actions {
        flex-direction: column;
        width: 100%;
    }

    .error-page__actions .btn {
        width: 100%;
    }
}
</style>
