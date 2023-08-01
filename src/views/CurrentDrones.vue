<template>
    <div class="wrapper">
        <h1>Current drones in the area</h1>
        <p>List of drones now seen by the sensor</p>
        <p>Red outline = violating NDZ, empty list means no drones on radar at the moment</p>
        
        <transition-group name="list" class="list" tag="ul">
            <li v-for="drone in drones" :key='drone.serialNumber' :class="{violating: this.getDistance(drone)<=100}">
                <p>Serial number: {{drone.serialNumber}}</p>
                <p>Actual distance from sensor: <strong>{{this.getDistance(drone)}}</strong> m</p>
            </li>
        </transition-group>
        
        <!-- <p class="lastupdate">Last update: {{(new Date(drones[0].lastUpdate)).toUTCString()}}</p> -->
    </div>
</template>

<script>

    export default {
        data() {
            return {
                response : {},
                drones : [], 
                violating: [],
            }
        },
        methods: {
            async getData() {
                const response = await fetch(`http://localhost:8000/birdnest/drones_actual`)
                const data = await response.json()
                this.drones = data
            },
            getDistance(drone) {
                return (Math.sqrt((drone.positionX - 250000)**2 + (drone.positionY - 250000)**2) / 1000).toFixed(2)
            },
        },
        created () {
            this.getData();
            this.interval = setInterval(this.getData, 2000)
        },
        unmounted(){ 
            clearInterval(this.interval)
        }
    }
</script>

<style scoped>
    .list-move, 
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    ul{
        list-style: none;
        padding: 0;
    }
    li{
        border: 2px solid rgb(8, 135, 61);
        margin: 1rem;
        border-radius: 0.5rem;
    }
    .violating{
        border: 2px solid red
    }
    p{
        padding: 0;
    }
    .lastupdate{
        text-align: left;
    }
    .wrapper{
        border-top: 1px solid #888;
    }
</style>