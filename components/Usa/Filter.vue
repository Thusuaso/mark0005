<template>

    <a :href="link" class="list-group-item d-flex justify-content-between align-items-start">

        <div class="ms-2 me-auto">
            <div ">{{ name }}</div>
        </div>
        <span class="badge  rounded-pill" style="background-color:#727478;">{{ value }}</span>
    </a>





</template>
<script setup lang="ts">
const props = defineProps({
    link: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }

});
const { link, name, value } = props;
</script>

<style scoped>
.filterContainerCustom {
    border-radius: 3px;
    margin-bottom: 5px;
    background-color: #fff;
    box-shadow: 5px 2px 2px gray;
    padding: 15px;
    border: 1px solid gray;
}

a:hover {
    background-color: #fff;
    color: gray;
}

.list-group-div {
    width: 100%;
    border: none;
    background-color: #fff;
}

.list-group-item {
    width: 100%;
    border: none;
    background-color: #fff;
}
</style>