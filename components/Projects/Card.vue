<template>
    <div class="customContainer">
        <div class="customElement">
            <a :href="link">
                <img class="lazyload" :src="image" />
                <div class="card_title">
                    <p>{{ text }} - {{ country }}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required:true
    }
});
const { link, image, text,country } = props;
</script>
<style scoped>
.customContainer {
    width: 100%;
    height: 250px;
    margin: 0px auto;
    margin-bottom: 25px;
}

.customElement {
    width: 100%;
    height: 250px;
    position: relative;
}

.customElement .card_title {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 3px rgb(0, 0, 0);
    background-color: rgba(123, 122, 122, 0.5);
    font-size: 14px;
}

.customElement img {
    width: 100%;
    height: 250px;
    object-fit: fill;
    box-shadow: 1px 1px 8px black;
    transition: all 1s ease-in-out;
}

.customElement img:hover {
    box-shadow: none;
}
</style>