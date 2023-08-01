<template>
    <div class="wrapper">
        <h1>Violating pilots</h1>
        <p>List of violating pilots up to 10 minutes ago</p>
        
        Sort by: 
        <form>
            <div class="radio-item">
                <input v-model="picked" type="radio" value="closestDistance" id="closestDistance"/>
                <label for="closestDistance">Closest Distance</label>
            </div>
            <div class="radio-item">
                <input v-model="picked" type="radio" value="lastAppearance" id="lastAppearance"/>
                <label for="lastAppearance">Last Appearance</label>
            </div>
            <div class="radio-item">
                <input v-model="picked" type="radio" value="lastName" id="Last name"/>
                <label for="Last name">Last name</label>
            </div>
        </form>

        <div class="selection">
            <select v-model="picked">
                <option value="closestDistance">Closest Distance</option>
                <option value="lastAppearance">Last Appearance</option>
                <option value="lastName">Last Name</option>
            </select>
        </div>
        <transition-group name="list" class="list" tag="ul">
            <li v-for="pilot in sortedPilots" :key='pilot.pilotId'>
                <p>Pilot ID: {{pilot.pilotId}}</p>
                <p>Closest distance to the sensor: <strong>{{ (pilot.closestDistance/1000).toFixed(2)}}</strong> m</p>
                <p>Last and first name: {{pilot.lastName}} {{pilot.firstName}}</p>
                <p>Last seen at: {{new Date(pilot.lastAppearance).toUTCString()}}</p>
            </li>
        </transition-group>
        
        <!-- <p class="lastupdate">Last update: {{(new Date(pilots[0].lastUpdate)).toUTCString()}}</p> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pilots: [],
                picked: 'closestDistance',
            }
        },
        methods: {
            async getData() {
                const response = await fetch(`http://localhost:8000/birdnest/pilots`)
                const data = await response.json()
                this.pilots = data
                console.log('new pilot data, sort by ' + this.picked)
            },
        },
        created () {
            this.getData();
            this.interval = setInterval(this.getData, 2000)
        },
        unmounted(){ 
            clearInterval(this.interval)
        },
        
        computed: {
            sortedPilots() {
                if (this.picked === 'closestDistance') return this.pilots
                else if (this.picked === 'lastName') {
                    return this.pilots.sort((a, b) => {
                    if (a.lastName < b.lastName) {
                        return -1;
                    }
                    if (a.lastName > b.lastName) {
                        return 1;
                    }
                    return 0;
                    })
                }
                else if (this.picked === 'lastAppearance') {
                    return this.pilots.sort((a, b) => {
                    if (a.lastAppearance < b.lastAppearance) {
                        return 1;
                    }
                    if (a.lastAppearance > b.lastAppearance) {
                        return -1;
                    }
                    return 0;
                    })
                }
            }
        }}
</script>

<style scoped>
    ul{
        list-style: none;
        padding: 0;
    }
    li{
        border: 2px solid #b89d09;
        margin: 1rem;
        border-radius: 0.5rem;
    }
    .wrapper{
        border-top: 1px solid #888;
    }
    form {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form label{
        padding-right: 1rem;

    }
    form input{
       padding-left: 1rem; 
    }
    .radio-item{
        accent-color: #b89d09;
    }
    .selection{
        display: none;
    }

    @media (max-width: 600px) {
        
        .list-move, /* apply transition to moving elements */
        .list-enter-active,
        .list-leave-active {
          transition: all 0.5s ease;
        }
        
        .list-enter-from,
        .list-leave-to {
          opacity: 0;
          transform: translateX(30px);
        }
        
        /* ensure leaving items are taken out of layout flow so that moving
           animations can be calculated correctly. */
        .list-leave-active {
          position: absolute;
        }
        ul {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        li{
            border: none;
            border-top: 2px solid #b89d09;
            margin: 0;
            border-radius: 0;
        }

        .selection{
            display: block;
        }

        form {
            display: none;
        }

}    
</style>