<script setup>
useHead({
    title: 'Gumball Verse',
});
</script>

<template>
    <div>
        <HomeHero />
        <CharactersListing id="characters" />
        <LocationsListing id="locations" class="section--tinted" />
    </div>
</template>
