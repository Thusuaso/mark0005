<template>
    <div class="row m-auto text-center mt-3 mb-2">
        <div class="col-sm-6">
            <div class="row m-auto text-center bg-secondary bg-gradient text-light">
                <div class="col-6 ">{{ code_header }}</div>
                <div class="col-6 ">{{ code }}</div>

            </div>

        </div>
        <div class="col-sm-6">
            <div class="row m-auto text-center bg-secondary bg-gradient text-light">
                <div class="col-6 ">{{ stone_header }}</div>
                <div class="col-6 ">{{ stone.toUpperCase() }}</div>

            </div>
        </div>
    </div>
    <div class="row m-auto text-center mb-3">
        <div class="col-sm-6">
            <div class="row m-auto text-center bg-secondary bg-gradient text-light">
                <div class="col-7 ">{{ country_header }}</div>
                <div class="col-4 ">{{ country }}</div>

            </div>

        </div>
        <div class="col-sm-6">

            <div class="row m-auto text-center bg-secondary bg-gradient text-light">
                <div class="col-6 ">{{ variation_header }}</div>
                <div class="col-6">{{ variation }}</div>

            </div>
        </div>
    </div>
    <div class="row m-auto text-center">
        <div class="col-sm-12">
            <h3 class="subheader">{{ desc_header }}</h3>
            <p class="description">{{ desc }}</p>
            <hr/>

            <h3 class="subheader"  v-if="hash_ != '#'">{{ hash_header }}</h3>
            <p class="description text-break" v-if="hash_ != '#'">
                <a href="" class="text-decoration-none" v-for="hash in hash_.substring(1,hash_.length).split('#')"> <strong>#{{ hash.trim() }}</strong></a>
            </p>
        </div>

    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    desc: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stone: {
        type: String,
        required: true
    },
    code: {
        type:String,
        required:true
    },
    desc_header:{
        type:String,
        required:true
    },
    hash_header: {
        type:String,
        required:true
    },
    code_header: {
        type: String,
        required:true
    },
    stone_header: {
        type: String,
        required: true
    },
    country_header: {
        type: String,
        required: true
    },
    variation_header: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required:true
    },
    variation:{
        type: String,
        required:true
    }
});
const { desc, hash, category, stone, code, desc_header, hash_header, code_header, stone_header, country_header, variation_header, country, variation } = props;
let hash_ = "";
hash.split('#').forEach(x=>{
    hash_+=('#' + x);
});

</script>
<style scoped>
    strong {
        text-align: left;
        font-style: italic;
        margin:0px;
        padding:0px;
        margin-right:6px;
        /* white-space: nowrap; */
        white-space:nowrap;
        word-wrap: normal;
    }
</style>