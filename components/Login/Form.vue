<template>
    <div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">{{ username }}</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="auth_username">
        </div>

        <button type="button" class="btn btn-primary w-100" @click="login">{{ status }}</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '~/store/index';
const store = useStore()
const props = defineProps({
    status: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});
const { status, username } = props;
const auth_username = ref('');
let cookie = useCookie('user');
const emit = defineEmits(["login_form_dialog_closed"]);

async function login() {
    await useFetch('/api/login', { method: 'GET', query: { 'username': auth_username.value } })
        .then(res => {
            if (res.data._value) {
                const { $toast } = useNuxtApp();
                $toast.success('Success');
                cookie.value = auth_username.value;
                store.setAuthStatus(ref(true));
                emit('login_form_dialog_closed');
            } else {
                const { $toast } = useNuxtApp();
                $toast.error('Error');
            }
        });

};
</script>