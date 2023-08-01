<template>
    <div>
        <form >
            
        </form>
        <ul>
            <li v-for="object, index in this.listOfObjects" :key="object.id">
                name: {{object.name}} age: {{object.age}} id:{{index}} number:{{object.number}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listOfObjects: [
                    {'id':1,'name':'Vlado', 'age':26, 'number':4},
                    {'id':2,'name':'Skrina', 'age':56, 'number':28},
                    {'id':3,'name':'Kvet', 'age':1, 'number':29},
                    {'id':4,'name':'Auto', 'age':17, 'number':41},
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>