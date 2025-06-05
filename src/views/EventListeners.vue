<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
</script>

<template>
  <div>
    <PageHeader 
      title="Event Listener"
    />

    <!-- CARD 1: Penjelasan Konsep -->
    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Dalam Vue.js, Anda dapat menggunakan event listeners untuk menangani interaksi pengguna dan meresponsnya dengan melakukan tindakan tertentu. Berikut adalah beberapa cara untuk menambahkan event listeners dalam Vue.js:
        </p>
        <!-- <p>
          Salah satu direktif penting adalah <code>v-bind</code>, yang digunakan untuk mengikat atribut HTML ke ekspresi
          data. Ini memungkinkan atribut seperti <code>href</code>, <code>src</code>, atau <code>class</code> dapat
          berubah secara dinamis mengikuti data.
        </p> -->
      </div>
    </ContentCard>

    <!-- CARD 2: Gambar dan Penjelasan -->
    <ContentCard title="Contoh Kode">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img 
          src="/images/codeEventListener.png" 
          alt="Contoh penggunaan Event Listener pada Vue"
          class="rounded-lg shadow-md mx-auto cursor-zoom-in" 
          @click="showImageModal = true" 
        />
        <div class="text-left text-basic text-gray-500 dark:text-gray-400">
             <code>&lt;/script&gt;</code> memungkinkan penggunaan Composition API dalam komponen Vue tanpa perlu mengimpor secara terpisah. Dengan menggunakan ref, kita membuat variabel reaktif count yang awalnya bernilai 0. Fungsi increment() bertujuan untuk menaikkan nilai count setiap kali tombol ditekan. Dalam template, kita menampilkan nilai count dalam tombol dan memastikan nilai tersebut diperbarui saat tombol ditekan.
        </div>
      </div>
    </ContentCard>

    <!-- Modal Zoom Gambar -->
    <div 
      v-if="showImageModal" 
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="showImageModal = false"
    >
      <img 
        src="/images/codeEventListener.png" 
        alt="Zoomed image"
        class="max-w-full max-h-full rounded-lg shadow-xl" 
      />
    </div>
  </div>
</template>
