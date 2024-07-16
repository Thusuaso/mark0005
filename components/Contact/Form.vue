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
        <div class="mb-3 text-black">
            <MazPhoneNumberInput
                    v-model="phoneNumber"
                    v-model:country-code="countryCode"
                    show-code-on-list
                    :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                    :ignored-countries="['AC']"
                    @update="inputPhoneNumber($event)"
                    :translations="translation"
                    style="width:100%;color:black;"
                    color="secondary"
                    :countrySelectorDisplayName="false"
                    class="text-black"
                    
                >
                <template #selector-flag="{ countryCode }">
                    <span
                    id="input-flag-element"
                    style="font-size: 0.8rem; background-color: var(--maz-color-secondary); color: var(--maz-color-secondary-contrast); border-radius: 100px; padding: 2px;"
                    >
                    {{ countryCode }}
                    </span>
                </template>
            <template #country-list-flag="{ countryCode }">
                <MazBadge size="0.8rem" style="margin-right: 10px; width: 26px;">
                    <p>{{ countryCode }}</p>
                
                </MazBadge>
            </template>
            </MazPhoneNumberInput>


<!-- 
            <label for="exampleInputEmail1" class="form-label">{{ form.phone }}</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="model.phone"> -->
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
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import 'maz-ui/styles'
import { ref } from 'vue';
  let phoneNumber = ref()
  const countryCode = ref('FR')
const props = defineProps({
    form: {
        type:Object,
        required:true
    },

});
const { form } = props;

let translation = ref({
                        countrySelector: {
                            placeholder: form.country,
                            error: form.choose_country,
                            searchPlaceholder: form.search_country,
                        },
                        phoneInput: {
                            placeholder: form.phone,
                            example: form.example,
                        },
                    });
let model = ref({
    'email': '',
    'name': '',
    'phone': '',
    'description': ''
});
const inputPhoneNumber = (event:any)=>{
    model.value.phone = event.countryCode + ' ' + event.formatInternational;
};



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
        phoneNumber = ref();
        setTimeout(() => {
            button_status.value = false;

        }, 2000);
        

    };
};
</script>
<style scoped>

</style>