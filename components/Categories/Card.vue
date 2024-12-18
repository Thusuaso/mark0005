<template>
    <div class="customContainer">
        <div class="customElement">
            <a :href="link">
                <img :src="image" :alt="text"/>
                <div class="card_title">
                    {{ text }}
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
    }
});
const { link, image, text } = props;

</script>
