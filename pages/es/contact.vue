<template>
  <h1 class="header mb-3">{{ contact.header }}</h1>
  <div class="row m-auto text-center mb-3">
    <div
      class="col-sm-4 m-auto text-center"
      v-for="item in contact.items"
      :key="item.id"
    >
      <ContactPersonal
        :image="item.image"
        :name="item.name"
        :job="item.job"
        :email="item.email"
        :whatsapp="item.whatsapp"
        :watsappLink="item.watsappLink"
      />
    </div>
  </div>
  <div class="row m-auto text-center">
    <div class="col-sm-6">
      <figure class="image is-16by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.041530640287!2d29.152639399999998!3d37.8124962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7166da9d086c3%3A0x18ebec808bb03a9!2sMekmar!5e0!3m2!1str!2str!4v1766650735033!5m2!1str!2str"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </div>
    <div class="col-sm-6">
      <ContactForm :form="contact.form" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "~/store/index";
const store = useStore();
const contact = store.getContact;
</script>
