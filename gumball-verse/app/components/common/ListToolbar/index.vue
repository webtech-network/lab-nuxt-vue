<script setup>
const props = defineProps({
    placeholder: String,
    count: String,
    search: String,
});

const emit = defineEmits(['search']);
</script>

<template>
    <div class="toolbar">
        <label class="search">
            <IconsSearch />
            <input
                type="search"
                :value="search"
                :placeholder="placeholder"
                :aria-label="placeholder"
                @input="emit('search', $event.target.value)"
            />
        </label>

        <span class="toolbar__count">{{ count }}</span>
    </div>
</template>

<style scoped>
.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;
}

.search {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 10px;
    max-width: 460px;
    padding: 0 18px;
    background-color: var(--color-paper);
    border: var(--border);
    border-radius: var(--radius-pill);
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.2s ease;
}

.search:focus-within {
    box-shadow: 4px 4px 0 var(--color-blue);
}

.search svg {
    width: 1.2em;
    height: 1.2em;
    color: var(--color-muted);
}

.search input {
    flex: 1;
    min-width: 0;
    padding: 14px 0;
    border: 0;
    outline: 0;
    background: transparent;
    font: inherit;
    font-weight: 600;
    color: var(--color-ink);
}

.search input::placeholder {
    font-weight: 600;
    color: var(--color-muted);
}

.toolbar__count {
    font-family: var(--font-display);
    font-weight: 600;
    white-space: nowrap;
    color: var(--color-ink-soft);
}

@media (max-width: 680px) {
    .toolbar {
        flex-direction: column;
        align-items: stretch;
    }

    .search {
        max-width: none;
    }

    .toolbar__count {
        text-align: right;
    }
}
</style>
