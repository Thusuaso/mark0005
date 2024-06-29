<template>
    
    <div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">{{ form.name }}</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="model.name">
            <div id="emailHelp" class="form-text">{{ form.field_1 }}</div>

        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">{{ form.email }}</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="model.email">
            <div id="emailHelp" class="form-text">{{ form.field_2 }}</div>

        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">{{ form.phone }}</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="model.phone">
            <div id="emailHelp" class="form-text">{{ form.field_3 }}</div>
        </div>
        <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                style="height: 100px" v-model="model.description"></textarea>
            <label for="floatingTextarea2">{{ form.message }}</label>
        </div>


        <button type="submit" class="btn btn-success w-100" @click="sendMail" :disabled="button_status">Send</button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({
    form: {
        type:Object,
        required:true
    },

});
const { form } = props;
let model = ref({
    'email': '',
    'name': '',
    'phone': '',
    'description': ''
});
let button_status = ref(false);
function sendMail() {
    const { $toast } = useNuxtApp();
    let toasted = $toast;
    toasted.success('Success');
    button_status.value = true;
    const { data: status } = useFetch('/api/sendMail', {
        method: 'POST',
        body: model.value
    });

    if (status) {
        model.value = {
            'email': '',
            'name': '',
            'phone': '',
            'description': ''
        };
        setTimeout(() => {
            button_status.value = false;

        }, 2000);
        

    };
};
</script>