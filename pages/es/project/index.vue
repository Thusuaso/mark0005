<template>
    <h3 class="header mb-3">{{ project_header }}</h3>
    <div class="row m-auto text-center">
        <div class="col-sm-3" v-for="project in projects" :key="project.id">
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
    .then(res => {
        store.setProjects(res);
        store.setLoading(ref(false));

    });
const projects = store.getProjects;
const project_header = store.getProjectHeader;
</script>