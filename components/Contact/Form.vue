<template>
  <div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">{{ form.name }}</label>
      <InputText
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="model.name"
        :invalid="!isRequiredName(model.name)"
      />
      <div id="emailHelp" class="form-text" v-if="!isRequiredName(model.name)">
        {{ form.field_1 }}
      </div>
      <div
        id="emailHelp"
        class="form-text"
        v-if="isRequiredName(model.name)"
        style="height: 20px"
      ></div>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">{{
        form.email
      }}</label>
      <InputText
        name="field"
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="model.email"
        :invalid="!isRequiredMail(model.email)"
        @update:modelValue="mailControl($event)"
        @paste.prevent="onPaste"
      />
      <div id="emailHelp" class="form-text" v-if="!isRequiredMail(model.email)">
        {{ form.field_2 }}
      </div>
      <div
        id="emailHelp"
        class="form-text"
        v-if="isRequiredMail(model.email)"
        style="height: 20px"
      ></div>
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
        style="width: 100%; color: black"
        color="secondary"
        :countrySelectorDisplayName="false"
        class="text-black"
      >
        <template #selector-flag="{ countryCode }">
          <span
            id="input-flag-element"
            style="
              font-size: 0.8rem;
              background-color: var(--maz-color-secondary);
              color: var(--maz-color-secondary-contrast);
              border-radius: 100px;
              padding: 2px;
            "
          >
            {{ countryCode }}
          </span>
        </template>
        <template #country-list-flag="{ countryCode }">
          <MazBadge size="0.8rem" style="margin-right: 10px; width: 26px">
            <p>{{ countryCode }}</p>
          </MazBadge>
        </template>
      </MazPhoneNumberInput>

      <!-- 
            <label for="exampleInputEmail1" class="form-label">{{ form.phone }}</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="model.phone"> -->
      <!-- <div id="emailHelp" class="form-text" v-if="!isRequiredPhone(phoneNumber)">{{ form.field_3 }}</div>
            <div id="emailHelp" class="form-text" v-if="isRequiredPhone(phoneNumber)" style="height:20px;"></div> -->
    </div>
    <div class="form-floating mb-3">
      <Textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style="height: 160px"
        v-model="model.description"
        :invalid="!isRequiredMessage(model.description)"
      ></Textarea>
      <label for="floatingTextarea2">{{ form.message }}</label>
    </div>

    <button
      type="submit"
      class="btn btn-success w-100"
      :disabled="button_status"
      @click="sendMail"
    >
      {{ form.send }}
    </button>
  </div>
</template>
<script lang="ts" setup>
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import { Form, Field, ErrorMessage } from "vee-validate";
import "maz-ui/styles";
import { ref } from "vue";
let phoneNumber = ref("");
const countryCode = ref("FR");
const props = defineProps({
  form: {
    type: Object,
    required: true,
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
  email: "",
  name: "",
  phone: "",
  description: "",
});
let phone_is_valid = ref(false);
function isRequiredMail(value: any) {
  const val = value.split("@");
  if (val.length == 2) {
    return true;
  } else {
    return false;
  }
}
function isRequiredName(value: any) {
  if (value == null || value == "" || value == " " || value == undefined) {
    return false;
  } else {
    return true;
  }
}
function isRequiredMessage(value: any) {
  if (value == null || value == "" || value == " " || value == undefined) {
    return false;
  } else {
    return true;
  }
}
function isRequiredPhone(value: any) {
  if (value == null || value == " " || value == "" || value == undefined) {
    return false;
  } else {
    return true;
  }
}
const inputPhoneNumber = (event: any) => {
  phone_is_valid.value = event.isValid;
  if (!event.isValid) {
    model.value.phone = "Herhangi bir telefon numarası girilmemiştir.";
  } else {
    model.value.phone = event.countryCode + " " + event.formatInternational;
  }
};

let button_status = ref(false);
function sendMail() {
  button_status.value = true;
  const { $toast } = useNuxtApp();
  let toasted = $toast;

  if (
    isRequiredMail(model.value.email) &&
    isRequiredName(model.value.name) &&
    isRequiredMessage(model.value.description)
  ) {
    toasted.success("Success");
    const { data: status } = useFetch("/api/sendMail", {
      method: "POST",
      body: model.value,
    });

    if (status) {
      model.value = {
        email: "",
        name: "",
        phone: "",
        description: "",
      };
      phoneNumber = ref("");
      setTimeout(() => {
        button_status.value = false;
      }, 2000);
    }
  } else {
    toasted.error(form.general_field);
  }
}
const { $toast } = useNuxtApp();
function mailControl(event: any) {
  if (
    event === "export@mekmar.com" ||
    event === "export1@mekmar.com" ||
    event === "export2@mekmar.com" ||
    event === "export@mekmar.co" ||
    event == "export1@mekmar.co" ||
    event == "export2@mekmar.co" ||
    event == "export@mekmar" ||
    event == "export1@mekmar" ||
    event == "export2@mekmar"
  ) {
    model.value.email = "";

    $toast.error("This email address is not allowed.");
  }
}
function onPaste(event: any) {
  $toast.error("Copy-paste is not allowed.");
  model.value.email = "";
}
</script>
<style scoped></style>
