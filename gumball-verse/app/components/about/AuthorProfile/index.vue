<script setup>
const props = defineProps({
    username: String,
});

const { data: user, error } = await useFetch(`https://api.github.com/users/${props.username}`);

const website = computed(() => {
    const blog = user.value?.blog;

    if (!blog) {
        return null;
    }

    return blog.startsWith('http') ? blog : `https://${blog}`;
});

const websiteLabel = computed(() => website.value?.replace(/^https?:\/\//, '').replace(/\/$/, ''));
</script>

<template>
    <section class="section">
        <div class="container">
            <StateMessage v-if="error">
                Não foi possível carregar o perfil de "{{ username }}" no GitHub. Confira o nome de
                usuário ou tente novamente em alguns minutos.
            </StateMessage>

            <article v-else-if="user" class="author">
                <div class="author__avatar">
                    <img
                        :src="`${user.avatar_url}&s=400`"
                        :alt="`Foto de ${user.name || user.login}`"
                        width="260"
                        height="260"
                    />
                    <span class="author__wave" aria-hidden="true">👋</span>
                </div>

                <div class="author__info">
                    <span class="eyebrow">O autor</span>
                    <h2 class="author__name">{{ user.name || user.login }}</h2>
                    <NuxtLink class="author__login" :to="user.html_url" target="_blank">
                        @{{ user.login }}
                    </NuxtLink>

                    <p v-if="user.bio" class="author__bio">{{ user.bio }}</p>

                    <ul class="author__meta">
                        <li v-if="user.location">
                            <IconsMapPin />
                            {{ user.location }}
                        </li>
                        <li v-if="user.company">
                            <IconsBuilding />
                            {{ user.company }}
                        </li>
                        <li v-if="website">
                            <IconsLink />
                            <NuxtLink :to="website" target="_blank">{{ websiteLabel }}</NuxtLink>
                        </li>
                    </ul>

                    <dl class="author__stats">
                        <div>
                            <dt>{{ formatNumber(user.public_repos) }}</dt>
                            <dd>repositórios</dd>
                        </div>
                        <div>
                            <dt>{{ formatNumber(user.followers) }}</dt>
                            <dd>seguidores</dd>
                        </div>
                        <div>
                            <dt>{{ formatNumber(user.following) }}</dt>
                            <dd>seguindo</dd>
                        </div>
                    </dl>

                    <p class="author__since">
                        No GitHub desde {{ formatMonthYear(user.created_at) }}
                    </p>

                    <div class="author__actions">
                        <NuxtLink class="btn btn--dark" :to="user.html_url" target="_blank">
                            Ver no GitHub
                            <IconsArrowRight />
                        </NuxtLink>
                        <NuxtLink
                            v-if="website"
                            class="btn btn--light"
                            :to="website"
                            target="_blank"
                        >
                            Visitar site
                        </NuxtLink>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.author {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: clamp(28px, 5vw, 64px);
    padding: clamp(28px, 5vw, 56px);
    background-color: var(--color-paper);
    border: 3px solid var(--color-ink);
    border-radius: var(--radius-lg);
    box-shadow: 10px 10px 0 var(--color-ink);
}

.author__avatar {
    position: relative;
    width: clamp(180px, 22vw, 260px);
    aspect-ratio: 1;
}

.author__avatar::before {
    content: '';
    position: absolute;
    inset: -14px;
    border: 3px solid var(--color-ink);
    border-radius: 50%;
    background-color: var(--color-blue);
    transform: translate(10px, 10px);
}

.author__avatar img {
    position: relative;
    width: 100%;
    height: 100%;
    border: 3px solid var(--color-ink);
    border-radius: 50%;
    background-color: var(--color-cream);
    object-fit: cover;
}

.author__wave {
    position: absolute;
    right: -4px;
    bottom: 6%;
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border: 3px solid var(--color-ink);
    border-radius: 50%;
    background-color: var(--color-yellow);
    font-size: 1.6rem;
    transform-origin: 70% 70%;
    animation: wave 2.4s ease-in-out infinite;
}

.author__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    min-width: 0;
}

.author__info .eyebrow {
    margin-bottom: 4px;
}

.author__name {
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 700;
}

.author__login {
    font-weight: 800;
    color: var(--color-blue-deep);
}

.author__login:hover {
    color: var(--color-orange);
}

.author__bio {
    max-width: 56ch;
    margin-top: 10px;
    font-size: 1.12rem;
    color: var(--color-ink-soft);
}

.author__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 22px;
    margin: 14px 0 0;
    padding: 0;
    list-style: none;
    font-weight: 700;
    color: var(--color-ink-soft);
}

.author__meta:empty {
    display: none;
}

.author__meta li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
}

.author__meta a {
    color: var(--color-blue-deep);
    overflow-wrap: anywhere;
}

.author__meta a:hover {
    text-decoration: underline;
}

.author__stats {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 22px 0 0;
    padding: 0;
}

.author__stats div {
    min-width: 112px;
    padding: 12px 18px;
    background-color: var(--color-cream);
    border: 2px solid rgba(28, 36, 51, 0.12);
    border-radius: var(--radius-sm);
}

.author__stats dt {
    font-family: var(--font-display);
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.1;
}

.author__stats dd {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-muted);
}

.author__since {
    margin-top: 12px;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--color-muted);
}

.author__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 22px;
}

@keyframes wave {
    0%,
    60%,
    100% {
        transform: rotate(0);
    }
    10%,
    30% {
        transform: rotate(16deg);
    }
    20%,
    40% {
        transform: rotate(-10deg);
    }
}

@media (max-width: 900px) {
    .author {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
    }

    .author__info {
        align-items: center;
    }

    .author__meta,
    .author__stats,
    .author__actions {
        justify-content: center;
    }
}

@media (max-width: 560px) {
    .author {
        border-radius: 24px;
        box-shadow: 6px 6px 0 var(--color-ink);
    }

    .author__stats div {
        flex: 1;
        min-width: 0;
        padding: 10px 8px;
    }

    .author__stats dt {
        font-size: 1.35rem;
    }

    .author__stats dd {
        font-size: 0.68rem;
        letter-spacing: 0.04em;
    }

    .author__actions {
        flex-direction: column;
        width: 100%;
    }

    .author__actions .btn {
        width: 100%;
    }
}
</style>
