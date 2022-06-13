<template>
    <router-link :to="{name: 'Details', params: {id: id}}">
        <div class="album">
            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/5528/5528323.png">
            <span>{{ title }}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Album',
    // title and id are passed by the HomeView page
    props: {
        title: String,
        id: String
    }
}
</script>

<style>
.icon{
    position: relative;
    top: 5px;
    padding-right: 6px;
    width: 20px;
    height: 20px
}
.album{
    width: 240px;
    background-color: #44475a;
    display: inline-block;
    margin: 5px;
    padding: 6px;
    border-radius: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
span{
    color: #f8f8f2;
}
</style>