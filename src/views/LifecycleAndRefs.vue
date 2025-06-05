<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
const activeImage = ref('')
</script>

<template>
  <div>
    <PageHeader title="Lifecycle Hooks" />

    <!-- CARD 1: Penjelasan Konsep -->
    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Setiap kali komponen mencapai tahap baru dalam siklus hidupnya, fungsi tertentu akan berjalan, dan kita dapat
          menambahkan kode ke fungsi tersebut. Fungsi seperti ini disebut lifecycle hooks, karena kita dapat
          "menghubungkan" kode kita ke tahap tersebut.

        </p>
      </div>
    </ContentCard>

    <!-- CARD 2: Contoh Kode 1 -->
    <ContentCard title="Contoh Kode 1">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img src="/images/lifecycleHooks2.png" alt="Contoh penggunaan v-for"
          class="rounded-lg shadow-md mx-auto cursor-zoom-in"
          @click="() => { activeImage = '/images/lifecycleHooks2.png'; showImageModal = true }" />
        <div class="text-basic text-gray-500 dark:text-gray-400 space-y-2">
        </div>
      </div>
    </ContentCard>

    <!-- CARD 3: Contoh Kode 2 -->
    <ContentCard title="Contoh Kode 2">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img src="/images/lifecycleHooks2.png" alt="Contoh lanjutan v-for dengan objek"
          class="rounded-lg shadow-md mx-auto cursor-zoom-in"
          @click="() => { activeImage = '/images/lifecycleHooks2.png'; showImageModal = true }" />
        <div class="text-sm text-gray-500 dark:text-gray-400 space-y-2">

        </div>
      </div>
    </ContentCard>




    <!-- Modal Zoom Gambar -->
    <div v-if="showImageModal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="showImageModal = false">
      <img :src="activeImage" alt="Zoomed image" class="max-w-full max-h-full rounded-lg shadow-xl" />
    </div>
  </div>
</template>
