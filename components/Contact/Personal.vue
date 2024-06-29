<template>
    <div>
        <div class="card m-auto text-center" style="width: 13rem">
            <img :src="image" class="card-img-top" :alt="name" />
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ job }}</li>
                <a :href="'mailto:' + email" class="text-decoration-none">
                    <li class="list-group-item">
                        {{ email }}
                    </li>
                </a>
                <a :href="watsappLink" class="text-decoration-none">
                    <li class="list-group-item">{{ whatsapp }}</li>
                </a>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    },
    watsappLink: {
        type: String,
        required: true
    }
});
const { image, name, job, email, whatsapp, watsappLink } = props;
</script>