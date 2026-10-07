<script setup>
const route = useRoute();
const { links, isActive } = useNavigation();

const isMenuOpen = ref(false);
const isScrolled = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function handleScroll() {
    isScrolled.value = window.scrollY > 8;
}

watch(
    () => route.fullPath,
    () => {
        isMenuOpen.value = false;
    }
);

onMounted(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header class="site-header" :class="{ 'is-scrolled': isScrolled, 'is-open': isMenuOpen }">
        <div class="container nav">
            <AppLogo />

            <button
                class="nav__toggle"
                type="button"
                aria-controls="nav-links"
                :aria-expanded="isMenuOpen"
                :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
                @click="toggleMenu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav id="nav-links" class="nav__links" aria-label="Navegação principal">
                <NuxtLink
                    v-for="link in links"
                    :key="link.to"
                    :to="link.to"
                    :class="{ 'is-active': isActive(link.to) }"
                    :aria-current="isActive(link.to) ? 'page' : undefined"
                >
                    {{ link.label }}
                </NuxtLink>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    height: var(--header-height);
    background-color: rgba(255, 246, 233, 0.82);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 2px solid transparent;
    transition:
        border-color 0.25s ease,
        background-color 0.25s ease;
}

.site-header.is-scrolled {
    border-bottom-color: rgba(28, 36, 51, 0.1);
    background-color: rgba(255, 246, 233, 0.94);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    height: 100%;
}

.nav__links {
    display: flex;
    align-items: center;
    gap: 6px;
}

.nav__links a {
    padding: 8px 16px;
    border-radius: var(--radius-pill);
    font-weight: 700;
    color: var(--color-ink-soft);
    transition:
        color 0.2s ease,
        background-color 0.2s ease;
}

.nav__links a:hover {
    color: var(--color-ink);
    background-color: rgba(28, 36, 51, 0.06);
}

.nav__links a.is-active {
    color: var(--color-ink);
    background-color: var(--color-yellow);
    box-shadow: inset 0 0 0 2px var(--color-ink);
}

.nav__toggle {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 46px;
    height: 46px;
    border: var(--border);
    border-radius: var(--radius-sm);
    background-color: var(--color-paper);
    box-shadow: 3px 3px 0 var(--color-ink);
}

.nav__toggle span {
    width: 20px;
    height: 2.5px;
    border-radius: 2px;
    background-color: var(--color-ink);
    transition:
        transform 0.3s ease,
        opacity 0.2s ease;
}

.is-open .nav__toggle span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
}

.is-open .nav__toggle span:nth-child(2) {
    opacity: 0;
}

.is-open .nav__toggle span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
}

@media (max-width: 900px) {
    .nav__toggle {
        display: inline-flex;
    }

    .nav__links {
        position: absolute;
        top: calc(100% + 1px);
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        padding: 12px 20px 20px;
        background-color: var(--color-cream);
        border-bottom: 2px solid var(--color-ink);
        box-shadow: 0 14px 30px -18px rgba(28, 36, 51, 0.4);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition:
            transform 0.25s ease,
            opacity 0.2s ease,
            visibility 0.2s;
    }

    .is-open .nav__links {
        opacity: 1;
        visibility: visible;
        transform: none;
    }

    .nav__links a {
        padding: 12px 16px;
        font-size: 1.05rem;
    }
}
</style>
