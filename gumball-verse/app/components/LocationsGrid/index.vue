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
            :location="currentLocation"
        />
    </div>
</template>
