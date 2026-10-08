<script setup>
useHead({
    title: 'Gumball Verse',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
});
</script>

<template>
    <div>
        <HomeHero />
        <CharactersListing id="characters" />
        <LocationsListing id="locations" class="section--tinted" />
    </div>
</template>
