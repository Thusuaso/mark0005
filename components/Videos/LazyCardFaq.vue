<template>
  <div
    style="width: 100%; height: 350px; margin: 0px auto; margin-bottom: 55px"
  >
    <div class="youtube-wrapper">
      <div
        v-if="!isActivated"
        class="youtube-placeholder"
        @click="activateVideo"
      >
        <img
          :src="thumbnailUrl"
          alt="Video Thumbnail"
          class="youtube-thumbnail"
          loading="lazy"
          height="350"
        />
        <div class="play-button">
          <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
            <path
              class="play-button-bg"
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0.13,34,0.13S12.21,0.13,6.9,1.55 C3.97,2.33,2.26,4.81,1.48,7.74C0.06,13.05,0.06,24,0.06,24s0,10.95,1.42,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,47.87,34,47.87s21.79,0,27.1-1.42c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,67.94,24,67.94,24 S67.94,13.05,66.52,7.74z"
            ></path>
            <path d="M 45,24 27,14 27,34" fill="#FFFFFF"></path>
          </svg>
        </div>
      </div>

      <iframe
        v-else
        :src="videoUrl"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        allowfullscreen
      ></iframe>
    </div>
    <p
      style="
        margin: 0px auto;
        margin-top: 5px;
        color: black;
        text-align: center;
      "
    >
      {{ title }}
    </p>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Bu bileşenin dışarıdan 'videoId' almasını sağlıyoruz
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// Videonun tıklanıp tıklanmadığını tutan reaktif durum
// Başlangıçta 'false' (tıklanmadı)
const isActivated = ref(false);

// Kullanıcı kapak resmine tıkladığında bu fonksiyon çalışır
const activateVideo = () => {
  isActivated.value = true;
};

// YouTube kapak resminin URL'sini hesaplar
const thumbnailUrl = computed(() => {
  // En yüksek kaliteli kapak resimlerinden birini (hqdefault) kullanır
  return `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`;
});

// YouTube iframe URL'sini hesaplar
const videoUrl = computed(() => {
  // 'autoplay=1' ekleyerek tıklandığında videonun otomatik başlamasını sağlar
  return `https://www.youtube.com/embed/${props.videoId}?autoplay=1&rel=0`;
});
</script>

<style scoped>
/* Genel kapsayıcı, 16:9 en boy oranını korur */
.youtube-wrapper {
  position: relative;
  width: 100%;
  height: 350px;
  padding-bottom: 56.25%; /*16:9 Aspect Ratio (9 / 16 = 0.5625)*/
  overflow: hidden; /* Taşmaları gizle */
  background-color: #aaa; /* Yüklenirken arka plan */
  border-radius: 8px; /* Köşeleri yumuşat */
  margin: 0px auto;
}

/* iframe ve placeholder'ın kapsayıcıyı doldurmasını sağlar */
.youtube-wrapper iframe,
.youtube-wrapper .youtube-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 350px;
  border: 0;
  cursor: pointer; /* Placeholder üzerinde fare imlecini değiştir */
  margin: 0px auto;
  text-align: center;
}
.youtube-placeholder {
  width: 100%;
  height: auto;
  margin: 0px auto;
  text-align: center;
}

/* Video kapak resmi */
.youtube-thumbnail {
  width: 100%;
  height: 350px;
  object-fit: cover; /* Resmi kapsayıcıya sığdırır, oranları bozulmaz */
  display: block; /* Altındaki boşluğu engeller */
  transition: transform 0.3s ease-out; /* Üzerine gelince animasyon */
  margin: 0px auto;
  text-align: center;
}

/* Oynat butonu kapsayıcısı */
.play-button {
  position: absolute;
  top: 50%; /* Dikeyde ortala */
  left: 50%; /* Yatayda ortala */
  transform: translate(-50%, -50%); /* Kendi boyutuna göre tam ortala */
  width: 68px; /* YouTube standart play butonu boyutu */
  height: 48px;
  z-index: 1; /* Thumbnail'in üstünde görünmesini sağlar */
  transition: opacity 0.3s ease-out; /* Üzerine gelince animasyon */
  display: flex; /* SVG'yi ortalamak için */
  justify-content: center; /* SVG'yi ortalamak için */
  align-items: center; /* SVG'yi ortalamak için */
}

/* Play butonu SVG'sinin arkaplanı (kırmızı kısım) */
.play-button-bg {
  fill: #ff0000; /* YouTube'un ikonik kırmızısı */
}

/* Play butonu SVG'sinin üçgen kısmı (beyaz kısım) */
.play-button svg path:last-child {
  fill: #ffffff;
}

/* Hover efektleri */
.youtube-placeholder:hover .youtube-thumbnail {
  transform: scale(1.03); /* Resim hafifçe büyür */
}

.youtube-placeholder:hover .play-button {
  opacity: 0.8; /* Buton hafifçe soluklaşır */
}
</style>
