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
            :id="currentCharacter.id"
            :name="currentCharacter.name"
            :image="currentCharacter.image"
            :species="currentCharacter.species"
            :occupation="currentCharacter.occupation"
            :role="getCharacterRole(currentCharacter.role)"
            :color="getCharacterColor(currentCharacter.colors)"
        />
    </div>
</template>
