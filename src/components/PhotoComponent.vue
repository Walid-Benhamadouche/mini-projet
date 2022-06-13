<template>
    <div class="photoElement">
        <img :src=src>
        <div>{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: 'Photo',
    props: {
        src: String,
        title: String
    }
}
</script>

<style>
.photoElement{
    margin: 3px;
    width: 155px;
    height: 155px;
}
.photoElement div{
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
}
</style>