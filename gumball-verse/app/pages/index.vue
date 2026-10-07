<template>
    <div>
        <HomeHero />
        <CharactersListing id="characters" :limit="8" />
        <LocationsListing id="locations" class="section--tinted" :limit="6" />
    </div>
</template>
