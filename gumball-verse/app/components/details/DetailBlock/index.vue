<script setup>
const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="detail-block">
        <h2 class="detail-block__title">
            <slot name="icon" />
            {{ title }}
        </h2>

        <slot />
    </div>
</template>

<style scoped>
.detail-block {
    margin-top: 22px;
}

.detail-block__title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    font-size: 1.05rem;
}
</style>
