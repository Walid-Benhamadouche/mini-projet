<template>
    <div class="search">
        <h2>List of albums</h2>
        <input type="search" v-model="state.search" placeholder="search">
    </div>
    <div>
        <Album class="albums"
        v-for="album in filtered"
        :key="album.id"
        :title='album.title'
        :id='album.id'/>
    </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import Album from '../components/AlbumComponent.vue'

export default {
    name: 'Home',
    components: {
        Album
    },
    setup() {
        // declaration of stateful variabls
        const state = reactive({
            albums: [],
            search: ''
        })
        // comparing the title with the search filter and adding it to the computed filtered list
        const filtered = computed(() => state.albums.filter(item => {
            return item.title.toLowerCase().indexOf(state.search.toLowerCase()) > -1
        }))

        // get albums data from API
        onMounted(() => {
            fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => {
                //putting each element from the json file in an array
                for(let alb of json) {
                    state.albums.push({userId: alb.userId, id: alb.id, title: alb.title})
                }
            })
        })
        
    return {
      state,
      filtered
    }
    }
}
</script>

<style>
.search{
    text-align: center;
}
.search input[type="search"]{
    width: 240px;
    color: #f8f8f2;
    border: none;
    outline: none;
    background-color: #44475a;
    display: inline-block;
    margin: 5px;
    padding: 6px;
    border-radius: 25px;
}
h2{
    text-align: center;
}
</style>