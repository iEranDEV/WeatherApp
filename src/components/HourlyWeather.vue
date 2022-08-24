<template>
    <div id="hourlyScroll" class="w-100 h-100 text-nowrap d-flex flex-row h-50">
        <div v-for="val in data.hourly" :key="val.dt" class="bg-dark rounded shadow m-3 p-3 pb-0 h-100 hourlyComponent" style="--mdb-bg-opacity: 0.75;">
            <span class="text-muted">{{ new Date(val.dt * 1000).toLocaleDateString(undefined, {month: "short", day: "numeric"}) }}&nbsp;&nbsp;</span>
            <span> {{ new Date(val.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}</span>
            <p class="text-center fs-5">{{ Math.round(val.temp) }}°C</p>
            <img src="@/assets/sun.png" alt="Image" class="w-100">
        </div>
    </div>
</template>

<script>

export default {
    props: {
        data: Object
    },
    mounted() {
        /*for(let val of this.data.hourly) {
            console.log(new Date(val.dt * 1000).toLocaleTimeString())
        }*/
    },
    computed: {
        test() {
            let val = ['21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00']
            return val;
        }
    }
}
</script>

<style scoped>

#hourlyScroll {
    overflow-x: scroll;
    overflow-y: hidden;
}

.hourlyComponent {
    position: relative;
    top: 0;
    transition: top ease 0.5s;
}

.hourlyComponent:hover {
    top: -10px;
}

::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0); 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>