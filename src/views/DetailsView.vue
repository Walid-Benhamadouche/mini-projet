<template>
    <router-link :to="{name: 'Home'}"><h2 class="back">Go back to albums</h2></router-link>
    <div>
        <Photo class="photo"
        v-for="photo in state.photos"
        :key="photo.id"
        :src="photo.thumbnailUrl"
        :title="photo.title"/>
    </div>
</template>

<script>
import { onMounted, reactive } from '@vue/runtime-core'
import { useRoute } from 'vue-router';
import Photo from '../components/PhotoComponent.vue'

export default {
    name: 'Details',
    components: {
        Photo
    },
    setup() {
        // route is used later to get the id of the album from the link used to access this page
        const route = useRoute()
        const state = reactive({
            photos: [],
        })

        // get photos data from API
        onMounted(() => {
            fetch('https://jsonplaceholder.typicode.com/albums/'+route.params.id+'/photos')
            .then(response => response.json())
            .then(json => {
                for(let alb of json) {
                    state.photos.push({albumId: alb.albumId, id: alb.id, title: alb.title, url: alb.url, thumbnailUrl: alb.thumbnailUrl})
                }
            })
        })

        return {
            state
        }
    }
}
</script>

<style>
.back{
    color: #f8f8f2;
    width: 240px;
    background-color: #44475a;
    text-align: center;
    display: inline-block;
    margin: 5px;
    padding: 6px;
    border-radius: 25px;
}
.photo{
    text-align: center;
    display: inline-block;
}
</style>