<script setup>
const props = defineProps({
    to: String,
});
</script>

<template>
    <NuxtLink :to="to" class="back-link">
        <IconsArrowLeft />
        <slot />
    </NuxtLink>
</template>

<style scoped>
.back-link {
    display: flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    margin-bottom: 22px;
    font-size: 0.95rem;
    font-weight: 800;
    transition: gap 0.2s ease;
}

.back-link:hover {
    gap: 10px;
}
</style>
