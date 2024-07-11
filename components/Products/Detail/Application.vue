<template>
    <div class="row m-auto text-center mt-3">
        <div class="col-sm-6 mb-2" v-for="app in application" :key="app.name">
            <div class="row m-auto text-center border  bg-secondary bg-gradient text-light">
                <div class="col-sm-9 ">{{ app.name }}</div>
                <div class="col-sm-3">{{ app.status }}</div>
            </div>
        </div>
    </div>
    <hr v-if="specification"/>
    <h3 class="header mt-3" v-if=specification>{{ specification_header }}</h3>
    <div class="row m-auto text-center mt-3" v-if="specification">
        <div class="col-sm-3 mb-2" v-for="spe in specification" :key="spe?.name">
            <img :src="spe?.link" width="100" height="100" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip" :data-bs-title="spe?.name" />
        </div>
    </div>
    <hr v-if="specification"/>
    <span><img src="https://cdn.mekmarimage.com/logo/test-resport-logo.jpg" width="120" height="100" /></span>

    <span style="margin-right:10px;" v-if="test_report">{{ test_report_header }}</span><span>
        <a :href="test_report" target="_blank" v-if="test_report">
            <i class="bi-filetype-pdf" style="font-size: 2rem; color: cornflowerblue;"></i>

        </a>

    </span>

</template>
<script setup lang="ts">
const props = defineProps({
    application: {
        type: Array,
        required: false
    },
    specification: {
        type:Array,
        required:false
    },
    specification_header:{
        type: String,
        required:true
    },
    test_report_header: {
        type: String,
        required:true
    },
    test_report:{
        type: String,
        required:false
    }
});
const { application } = props;
</script>