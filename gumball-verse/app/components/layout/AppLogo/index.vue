<script setup>
defineProps({
    light: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <NuxtLink to="/" class="logo" :class="{ 'logo--light': light }" aria-label="Página inicial">
        <img
            class="logo__face"
            src="/images/brand/gumball-face.png"
            alt=""
            width="48"
            height="38"
        />
        <span class="logo__text">Gumball<span>verse</span></span>
    </NuxtLink>
</template>

<style scoped>
.logo {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
}

.logo__face {
    width: 48px;
    height: auto;
    filter: drop-shadow(2.5px 2.5px 0 var(--color-ink));
    transform-origin: 50% 80%;
    transition: transform 0.4s var(--ease-bounce);
}

.logo:hover .logo__face {
    transform: rotate(-12deg) scale(1.1);
}

.logo__text span {
    color: var(--color-orange);
}

.logo--light {
    color: #fff;
}

.logo--light .logo__face {
    filter: drop-shadow(2.5px 2.5px 0 var(--color-blue));
}
</style>
