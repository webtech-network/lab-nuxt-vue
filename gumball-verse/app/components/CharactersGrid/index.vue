<script setup>
const props = defineProps({
    characters: Array,
});
</script>

<template>
    <div class="grid grid--characters">
        <CharacterCard
            v-for="currentCharacter of characters"
            :key="currentCharacter.id"
            :character="currentCharacter"
        />
    </div>
</template>
