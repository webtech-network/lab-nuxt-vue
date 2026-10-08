<script setup>
const GITHUB_USERNAME = 'arturbomtempo-dev';

useHead({
    title: 'Sobre | Gumball Verse',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
});
</script>

<template>
    <div>
        <PageHero
            color="pink"
            eyebrow="Bastidores"
            title="Sobre o projeto"
            lead="Quem construiu o Gumballverse, como ele funciona e o que tem por trás de cada card."
        />

        <AboutProject />
        <AuthorProfile class="section--tinted" :username="GITHUB_USERNAME" />
        <ContributionsCalendar :username="GITHUB_USERNAME" />
        <RepositoriesListing class="section--tinted" :username="GITHUB_USERNAME" />
    </div>
</template>
