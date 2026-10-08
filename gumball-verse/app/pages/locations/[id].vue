<script setup>
const route = useRoute();

const { id } = route.params;

const { data, error } = await useFetch(`https://gumball-api-server.vercel.app/locations/${id}`);

if (error.value || !data.value) {
    throw createError({
        status: error.value?.status === 404 ? 404 : 503,
        fatal: true,
    });
}
</script>

<template>
    <section class="section section--details">
        <div class="container">
            <BackLink to="/locations">Todos os lugares</BackLink>

            <LocationDetails
                :name="data.name"
                :image="data.image"
                :description="data.description"
                :type="data.type"
                :parent-id="data.parent?.id"
                :parent-name="data.parent?.name"
                :first-appearance-code="data.firstAppearance?.code"
                :first-appearance-title="data.firstAppearance?.title"
                color="#ffd23f"
            />
        </div>
    </section>
</template>
