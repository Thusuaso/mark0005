<template>
    <h1 class="header_project mb-3">{{ project_header }}</h1>
    <div class="container row m-auto text-center">
        <div class="col-sm-4" v-for="project in projects" :key="project.id">
            <ProjectsCard :link="project.link" :image="project.Image" :text="project.name" :country="project.country" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useStore } from '~/store/index';
import {ref} from 'vue';
const store = useStore();
store.setLoading(ref(true));
await $fetch('/api/projects/list')
    .then(async res => {
        await store.setProjects(res);
        await store.setLoading(ref(false));

    });
const projects = store.getProjects;
const project_header = store.getProjectHeader;
</script>