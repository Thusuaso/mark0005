<template>
  <div
    class="m-auto mt-3 text-center border w-75 bg-secondary bg-gradient text-light"
  >
    <div class="row m-auto text-center">
      <div class="col-6">{{ size }}</div>
      <div class="col-6">
        <span v-if="!store.getAuthStatus"
          ><a
            href="#"
            class="text-decoration-none text-light"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >{{ get_price }}</a
          ></span
        ><span v-else>${{ price }}/{{ unit }}</span>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="false"
  >
    <div class="modal-dialog modal-dialog-centered w-100 modal-lg">
      <div class="modal-content w-100">
        <div class="modal-header">
          <button
            ref="my_close_button"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row m-auto text-center w-100">
            <div class="col-sm-4">
              <h3 class="header mb-3">{{ login_status.status_1 }}</h3>
              <LoginForm
                :status="login_status.status_1"
                :username="login_status.username"
                @login_form_dialog_closed="dialog_closed"
              />
            </div>
            <div class="col-sm-2">OR</div>
            <div class="col-sm-6">
              <h3 class="header mb-3">{{ login_status.status_2 }}</h3>
              <ContactForm :form="contact.form" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--
    <MazDialog v-model="dialog_status" title="Login Or Contact" style="width:1200px;">
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



    </MazDialog> -->
</template>
<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { useStore } from "~/store/index";

const props = defineProps({
  size: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const { size, unit, price } = props;
const store = useStore();
let dialog_status = ref(false);
function login() {
  dialog_status.value = true;
}
const myEl = useTemplateRef("my_close_button");

function dialog_closed() {
  myEl?.value?.click();
  dialog_status.value = false;
  store.setLoginDialogStatus(false);
}
const login_status = store.getLogin;
const contact = store.getContact;

let lang = "";
let get_price = ref("");
lang = store.getLang;
if (lang == "en") {
  get_price.value = "Get Price";
} else if (lang == "fr") {
  get_price.value = "Obtenir le prix";
} else if (lang == "es") {
  get_price.value = "Obtener precio";
} else if (lang == "ru") {
  get_price.value = "Получить цену";
} else if (lang == "ar") {
  get_price.value = "احصل على السعر";
}
</script>
