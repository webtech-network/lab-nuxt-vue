export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    components: [
        { path: '~/components/icons', prefix: 'Icons' },
        { path: '~/components', pathPrefix: false },
    ],
    app: {
        head: {
            htmlAttrs: { lang: 'pt-BR' },
            meta: [
                { name: 'theme-color', content: '#fff6e9' },
                {
                    name: 'description',
                    content: 'Conheça os personagens e lugares de O Incrível Mundo de Gumball.',
                },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/images/brand/gumball-face.png' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap',
                },
            ],
        },
    },
});
