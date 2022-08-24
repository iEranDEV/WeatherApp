<template>
    <div class="container" style="height: 100vh;">
        <div class="row p-3 h-100 d-flex align-items-center">
            <div class="col-2 col-lg-4"></div>
            <div class="col-8 col-lg-4 bg-dark text-light p-4 h-75 rounded shadow d-flex justify-content-between flex-column align-items-center" style="--mdb-bg-opacity: 0.7;">
                <div class="w-100 text-center mb-3">
                    <img src="@/assets/sun.png" alt="Logo" class="mx-auto" style="height: 100px;">
                    <p class="text-warning fw-bold">WEATHER APP</p>
                    <hr>
                </div>
                <div class="w-75 text-center">
                    <div class="form-outline">
                        <div class="text-start text-muted">Podaj nazwę miasta</div>
                        <input v-model="cityName" type="search" id="searchForm" class="form-control bg-light text-warning" placeholder="" aria-label="Search" style="--mdb-bg-opacity: 0.3;" />
                    </div>
                    <button type="button" class="btn btn-outline-warning mt-3" data-mdb-ripple-color="warning" @click="search()">Wyszukaj</button>
                </div>
                <div class="w-100 text-end">
                    <hr>
                    <span class="text-muted">Made by Narei</span>
                </div>
            </div>
            <div class="col-2 col-lg-4"></div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            cityName: null
        }
    },
    methods: {
        search() {
            if(this.cityName != null) {
                this.$router.push('/pogoda?city=' + this.cityName)
            }
        }
    }
}
</script>

<style scoped>

</style>