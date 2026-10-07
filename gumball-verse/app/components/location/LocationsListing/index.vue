<script setup>
const { data } = useFetch('https://gumball-api-server.vercel.app/locations', {
    query: { limit: 6 },
});
</script>

<template>
    <section class="section">
        <div class="container">
            <SectionHeader
                eyebrow="Seção 02 · Mapa"
                lead="Casas, escolas, lojas e até outras dimensões. Escolha um destino e boa viagem."
                see-all-url="/locations"
            >
                Lugares onde <em>tudo</em> pode acontecer
            </SectionHeader>

            <div class="grid grid--locations">
                <LocationCard
                    v-for="currentLocation in data?.data"
                    :key="currentLocation.id"
                    :id="currentLocation.id"
                    :name="currentLocation.name"
                    :image="currentLocation.image"
                    :type="currentLocation.type"
                    :parent="currentLocation.parent?.name || 'Universo Gumball'"
                    :description="currentLocation.description"
                />
            </div>
        </div>
    </section>
</template>
