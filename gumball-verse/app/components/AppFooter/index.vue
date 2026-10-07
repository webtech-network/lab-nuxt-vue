<script setup>
const { links } = useNavigation();

const dataSourceLinks = [
    { to: 'https://gumball-api.vercel.app/', label: 'Gumball API' },
    { to: 'https://gumball-api.vercel.app/docs', label: 'Documentação' },
];
</script>

<template>
    <footer class="site-footer">
        <svg
            class="footer__wave"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path d="M0 40 C 240 90, 480 0, 720 30 S 1200 80, 1440 30 V80 H0Z" />
        </svg>

        <div class="footer__body">
            <div class="container footer__grid">
                <div class="footer__brand">
                    <AppLogo light />
                    <p>
                        Um guia afetuoso pela cidade mais estranha da Califórnia — onde até a
                        comida, os móveis e o Sol podem ganhar vida.
                    </p>
                </div>

                <nav class="footer__column" aria-label="Explorar">
                    <h4>Explorar</h4>
                    <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
                        {{ link.label }}
                    </NuxtLink>
                </nav>

                <nav class="footer__column" aria-label="Fonte dos dados">
                    <h4>Fonte dos dados</h4>
                    <NuxtLink
                        v-for="link in dataSourceLinks"
                        :key="link.to"
                        :to="link.to"
                        target="_blank"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </nav>
            </div>

            <div class="container footer__bottom">
                <span>
                    Desenvolvido por
                    <NuxtLink
                        class="footer__author"
                        to="https://www.arturbomtempo.dev"
                        target="_blank"
                    >
                        Artur Bomtempo
                    </NuxtLink>
                </span>
                <span>O Incrível Mundo de Gumball © Cartoon Network.</span>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.site-footer {
    position: relative;
    margin-top: 40px;
    color: rgba(255, 255, 255, 0.78);
}

.footer__wave {
    display: block;
    width: 100%;
    height: 60px;
    margin-bottom: -1px;
    fill: var(--color-ink);
}

.footer__body {
    padding: 40px 0 28px;
    background-color: var(--color-ink);
}

.footer__grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.footer__brand p {
    max-width: 360px;
    margin-top: 16px;
    font-size: 0.96rem;
}

.footer__column {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer__column h4 {
    margin-bottom: 4px;
    font-size: 1.05rem;
    color: var(--color-yellow);
}

.footer__column a {
    width: fit-content;
    transition:
        color 0.2s ease,
        transform 0.2s ease;
}

.footer__column a:hover {
    color: #fff;
    transform: translateX(3px);
}

.footer__author {
    font-weight: 800;
    color: var(--color-yellow);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    transition: color 0.2s ease;
}

.footer__author:hover {
    color: #fff;
}

.footer__bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px 24px;
    padding-top: 22px;
    font-size: 0.86rem;
    color: rgba(255, 255, 255, 0.55);
}

@media (max-width: 900px) {
    .footer__grid {
        grid-template-columns: 1fr 1fr;
    }

    .footer__brand {
        grid-column: 1 / -1;
    }
}

@media (max-width: 560px) {
    .footer__grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }

    .footer__bottom {
        flex-direction: column;
    }
}
</style>
