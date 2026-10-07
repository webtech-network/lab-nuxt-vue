<script setup>
const props = defineProps({
    code: String,
    title: String,
});
</script>

<template>
    <span>
        <span v-if="code" class="episode-code">{{ code }}</span>
        {{ title }}
    </span>
</template>

<style scoped>
.episode-code {
    display: inline-block;
    margin-right: 6px;
    padding: 0 7px;
    border-radius: 6px;
    background-color: var(--color-ink);
    font-size: 0.78rem;
    color: #fff;
    vertical-align: 2px;
}
</style>
