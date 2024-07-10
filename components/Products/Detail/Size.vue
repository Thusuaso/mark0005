<template>
    <div class="m-auto mt-3 text-center border w-75 bg-secondary bg-gradient text-light">

        <div class="row m-auto text-center ">
            <div class="col-6">{{ size }}</div>
            <div class="col-6">
                <span v-if="!store.getAuthStatus"><a href="#" class="text-decoration-none text-light" @click="login">Get
                        Price</a></span><span v-else>${{ price }}  / {{ unit}}</span>
            </div>

        </div>
    </div>
    <MazDialog v-model="dialog_status" title="Login Or Contact">
        <div class="row m-auto text-center">
            <div class="col-sm-5">
                <h3 class="header mb-3">{{ login_status.status_1 }}</h3>
                <LoginForm :status="login_status.status_1" :username="login_status.username"
                    @login_form_dialog_closed="dialog_closed" />
            </div>
            <div class="col-sm-2">
                OR
            </div>
            <div class="col-sm-5">
                <h3 class="header mb-3">{{ login_status.status_2 }}</h3>
                <ContactForm :form="contact.form" />
            </div>

        </div>



    </MazDialog>


</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '~/store/index';

const props = defineProps({
    size: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
const { size, unit, price } = props;
const store = useStore();
let dialog_status = ref(false);
function login() {
    dialog_status.value = true;
};
function dialog_closed() {
    dialog_status.value = false;
}
const login_status = store.getLogin;
const contact = store.getContact;

</script>