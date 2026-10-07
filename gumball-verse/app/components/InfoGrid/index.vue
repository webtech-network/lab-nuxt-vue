<script setup>
const props = defineProps({
    columns: {
        type: Number,
        default: 2,
    },
});
</script>

<template>
    <div class="info-grid" :class="`info-grid--${columns}`">
        <slot />
    </div>
</template>

<style scoped>
.info-grid {
    display: grid;
    gap: 12px;
    margin-top: 22px;
}

.info-grid--2 {
    grid-template-columns: repeat(2, 1fr);
}

.info-grid--3 {
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 900px) {
    .info-grid--3 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 560px) {
    .info-grid--2,
    .info-grid--3 {
        grid-template-columns: 1fr;
    }
}
</style>
