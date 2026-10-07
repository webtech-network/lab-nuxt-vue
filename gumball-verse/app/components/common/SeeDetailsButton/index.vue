<script setup>
const props = defineProps({
    to: String,
});
</script>

<template>
    <NuxtLink :to="to" class="btn btn--small btn--ghost">
        Saiba mais
        <IconsArrowRight />
    </NuxtLink>
</template>
