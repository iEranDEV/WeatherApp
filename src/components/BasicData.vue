<template>
    <div v-if="currentData" class="w-100 p-3 text-light">
        <h1 class="display-3 mb-0">{{ currentTemperature }}°C</h1>
        <span class="text-light opacity-75">{{ currentData.weather[0].description }}</span>
    </div>
</template>

<script>

export default {
    props: {
        currentData: Object
    },
    computed: {
        currentTemperature() {
            return Math.round(this.currentData.main.temp)
        }
    }
}
</script>

<style scoped>

</style>