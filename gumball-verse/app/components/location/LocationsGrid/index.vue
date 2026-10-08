<script setup>
const props = defineProps({
    locations: Array,
});
</script>

<template>
    <div class="grid grid--locations">
        <LocationCard
            v-for="currentLocation of locations"
            :key="currentLocation.id"
            :id="currentLocation.id"
            :name="currentLocation.name"
            :image="currentLocation.image"
            :type="currentLocation.type"
            :parent="currentLocation.parent?.name ?? 'Universo Gumball'"
            :description="currentLocation.description"
        />
    </div>
</template>
