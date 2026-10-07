<template>
    <div class="chips" role="group" aria-label="Filtros">
        <slot />
    </div>
</template>

<style scoped>
.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 36px;
}

.chips::-webkit-scrollbar {
    display: none;
}

@media (max-width: 680px) {
    .chips {
        flex-wrap: nowrap;
        margin-inline: -20px;
        padding: 2px 20px 8px;
        overflow-x: auto;
        scrollbar-width: none;
    }
}

@media (max-width: 560px) {
    .chips {
        margin-inline: -16px;
        padding-inline: 16px;
    }
}
</style>
