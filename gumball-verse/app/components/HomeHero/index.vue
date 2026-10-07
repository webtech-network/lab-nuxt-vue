<script setup>
const CHARACTERS_CDN =
    'https://arturbomtempo-dev.github.io/arturbomtempo-cdn/assets/images/projects/gumball-api/characters';

const stats = [
    { value: 245, label: 'personagens' },
    { value: 112, label: 'lugares' },
    { value: 6, label: 'temporadas' },
];

const heroCharacters = [
    { name: 'anais', image: `${CHARACTERS_CDN}/anais-watterson.webp` },
    { name: 'gumball', image: `${CHARACTERS_CDN}/gumball-watterson.webp` },
    { name: 'darwin', image: `${CHARACTERS_CDN}/darwin-watterson.webp` },
];
</script>

<template>
    <section class="hero">
        <div class="container hero__grid">
            <div class="hero__text">
                <h1 class="hero__title">
                    <span class="hero__pre">O Incrível Mundo de</span>
                    <span class="hero__name">Gumball</span>
                </h1>

                <p class="hero__lead">
                    Uma cidade onde bananas falam, nuvens têm sentimentos e um gato azul de 12 anos
                    transforma qualquer terça-feira num caos épico. Conheça quem vive — e onde vive
                    — nesse universo.
                </p>

                <div class="hero__actions">
                    <a href="#characters" class="btn btn--primary">Conhecer personagens</a>
                    <a href="#locations" class="btn btn--light">Explorar lugares</a>
                </div>

                <dl class="hero__stats">
                    <div v-for="stat in stats" :key="stat.label">
                        <dt>{{ stat.value }}</dt>
                        <dd>{{ stat.label }}</dd>
                    </div>
                </dl>
            </div>

            <div class="hero__art" aria-hidden="true">
                <div class="hero__blob"></div>
                <div class="hero__sun"></div>
                <img
                    v-for="character in heroCharacters"
                    :key="character.name"
                    :src="character.image"
                    :class="['hero__character', `hero__character--${character.name}`]"
                    alt=""
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    position: relative;
    overflow: hidden;
    padding: clamp(40px, 7vw, 90px) 0 clamp(64px, 9vw, 120px);
}

.hero__grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: clamp(24px, 4vw, 64px);
}

.hero__title {
    margin: 8px 0 22px;
}

.hero__pre {
    display: block;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    font-weight: 600;
    color: var(--color-ink-soft);
}

.hero__name {
    display: block;
    font-size: clamp(4rem, 12vw, 9.5rem);
    font-weight: 700;
    line-height: 0.92;
    letter-spacing: -0.02em;
    color: var(--color-blue);
    -webkit-text-stroke: 3px var(--color-ink);
    paint-order: stroke fill;
    text-shadow: 6px 6px 0 var(--color-ink);
}

.hero__lead {
    max-width: 520px;
    font-size: clamp(1.02rem, 1.6vw, 1.18rem);
    color: var(--color-ink-soft);
}

.hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 30px;
}

.hero__stats {
    display: flex;
    gap: clamp(20px, 4vw, 44px);
    margin: 40px 0 0;
    padding: 0;
}

.hero__stats div {
    position: relative;
}

.hero__stats div + div::before {
    content: '';
    position: absolute;
    top: 10%;
    left: calc(clamp(20px, 4vw, 44px) / -2);
    height: 80%;
    border-left: 2px dashed rgba(28, 36, 51, 0.18);
}

.hero__stats dt {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3.4vw, 2.5rem);
    font-weight: 700;
    line-height: 1;
}

.hero__stats dd {
    margin: 4px 0 0;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-muted);
}

.hero__art {
    position: relative;
    justify-self: center;
    width: 100%;
    max-width: 560px;
    aspect-ratio: 1 / 1;
}

.hero__blob {
    position: absolute;
    inset: 8% 4% 4%;
    background-color: var(--color-blue);
    border: 3px solid var(--color-ink);
    border-radius: 58% 42% 46% 54% / 52% 48% 52% 48%;
    box-shadow: 10px 10px 0 var(--color-ink);
    animation: morph 12s ease-in-out infinite;
}

.hero__blob::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
        radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.35) 0 6%, transparent 7%),
        radial-gradient(circle at 78% 70%, rgba(255, 255, 255, 0.18) 0 10%, transparent 11%),
        repeating-radial-gradient(
            circle at 50% 120%,
            transparent 0 28px,
            rgba(255, 255, 255, 0.07) 28px 30px
        );
}

.hero__sun {
    position: absolute;
    top: 2%;
    right: 4%;
    width: 22%;
    aspect-ratio: 1;
    border: 3px solid var(--color-ink);
    border-radius: 50%;
    background-color: var(--color-yellow);
    box-shadow: 5px 5px 0 var(--color-ink);
    animation: float 6s ease-in-out infinite;
}

.hero__character {
    position: absolute;
    bottom: 4%;
    object-fit: contain;
    filter: drop-shadow(5px 6px 0 rgba(28, 36, 51, 0.9));
}

.hero__character--gumball {
    left: 27%;
    z-index: 2;
    width: 46%;
    animation: bob 4.5s ease-in-out infinite;
}

.hero__character--darwin {
    right: 2%;
    z-index: 3;
    width: 33%;
    animation: bob 4.5s ease-in-out -1.5s infinite;
}

.hero__character--anais {
    left: 4%;
    z-index: 3;
    width: 27%;
    animation: bob 4.5s ease-in-out -3s infinite;
}

@keyframes bob {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-12px);
    }
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0) rotate(0);
    }
    50% {
        transform: translateY(10px) rotate(8deg);
    }
}

@keyframes morph {
    0%,
    100% {
        border-radius: 58% 42% 46% 54% / 52% 48% 52% 48%;
    }
    50% {
        border-radius: 44% 56% 58% 42% / 46% 56% 44% 54%;
    }
}

@media (max-width: 900px) {
    .hero__grid {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero__text {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero__lead {
        margin-inline: auto;
    }

    .hero__actions,
    .hero__stats {
        justify-content: center;
    }

    .hero__art {
        order: -1;
        max-width: 440px;
    }
}

@media (max-width: 560px) {
    .hero__name {
        -webkit-text-stroke-width: 2px;
        text-shadow: 4px 4px 0 var(--color-ink);
    }

    .hero__actions {
        flex-direction: column;
        width: 100%;
    }

    .hero__actions .btn {
        width: 100%;
    }

    .hero__stats {
        gap: 22px;
    }

    .hero__stats div + div::before {
        left: -11px;
    }
}
</style>
