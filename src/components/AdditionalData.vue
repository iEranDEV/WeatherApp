<template>
    <div v-if="currentData" class="h-100 w-100 p-3 d-flex flex-column justify-content-between">
        <!-- Search bar -->
        <div>
            <div class="input-group rounded w-100">
                <input type="search" class="form-control rounded" placeholder="Wpisz nazwę miasta..." aria-label="Search" aria-describedby="search" />
                <span class="input-group-text border-0 text-warning" id="search">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <hr>

            <!-- Additional weather data -->
            <div class="row">
                <div class="col-6 text-start text-light opacity-75">
                    <p>Odczuwalnie</p>
                    <p>Wilgotność</p>
                    <p>Ciśnienie</p>
                    <p>Prędkość wiatru</p>
                    <p>Zachmurzenie</p>
                </div>
                <div class="col-6 text-end">
                    <p>{{ Math.round(currentData.main.feels_like) }}°C</p>
                    <p>{{ Math.round(currentData.main.humidity) }}%</p>
                    <p>{{ currentData.main.pressure }}mbar</p>
                    <p>{{ parseFloat(currentData.wind.speed * 3.6).toFixed(1) }} km/h</p>
                    <p>{{ currentData.clouds.all }}%</p>
                </div>
                <hr>
            </div>
        </div>

        
        <!-- Sunrise and sunset data -->
        <div>

            <!-- 5 days weather graph -->
            <div v-if="dailyData" class="row">
                <WeekChart :data="dailyData"></WeekChart>
            </div>

            <hr>
            <div class="row">
                <div class="col-6 text-start">
                    {{ getTime(currentData.sys.sunrise) }}
                </div>
                <div class="col-6 text-end">
                    {{ getTime(currentData.sys.sunset) }}
                </div>
            </div>
            <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" :style="{ width: progressPercent + '%'}"></div>
            </div>
            <div class="row">
                <div class="col-6 text-start">
                    Wschód słońca
                </div>
                <div class="col-6 text-end">
                    Zachód słońca
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WeekChart from '@/components/WeekChart.vue'

export default {
    components: {
        WeekChart,
    },
    props: {
        currentData: Object,
        dailyData: Object
    },
    computed: {
        progressPercent() {
            let currentMinutes = (new Date().getHours() * 60) + new Date().getMinutes();
            let sunsetMinutes = (new Date(this.currentData.sys.sunset * 1000).getHours() * 60) + new Date(this.currentData.sys.sunset).getMinutes();
            return Math.round(currentMinutes / sunsetMinutes * 100);
        }
    },
    methods: {
        getTime(unix) {
            let data = new Date(unix * 1000);
            return data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        }
    }
}
</script>

<style scoped>

</style>