<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
const activeImage = ref('')
</script>

<template>
  <div>
    <PageHeader title="Watchers" />

    <!-- CARD 1: Penjelasan Konsep -->
    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Watchers memungkinkan kita untuk memantau sebagian data, atau properti yang dihitung, dan mengeksekusi kode
          sebagai respons terhadap perubahan pada data tersebut. Watchers mengamati komponen dan melakukan tindakan
          tertentu ketika nilai komponen berubah.

        </p>
      </div>
    </ContentCard>

    <!-- CARD 2: Contoh Kode 1 -->
    <ContentCard title="Contoh Kode 1">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img src="/images/watcher.png" alt="Contoh penggunaan v-for" class="rounded-lg shadow-md mx-auto cursor-zoom-in"
          @click="() => { activeImage = '/images/watcher.png'; showImageModal = true }" />
        <div class="text-basic text-gray-500 dark:text-gray-400 space-y-2">
          <p>
            Dengan Composition API, kita dapat menggunakan watch, fungsi ini untuk memicu callback setiap kali keadaan
            reaktif berubah

          </p>
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
