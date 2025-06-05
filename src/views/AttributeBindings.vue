<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
</script>

<template>
  <div>
    <PageHeader 
      title="Attribute Binding"
    />

    <!-- CARD 1: Penjelasan Konsep -->
    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Direktif adalah atribut khusus yang dimulai dengan awalan <code>v-</code>. Mereka adalah bagian dari sintaks
          template Vue. Mirip dengan interpolasi teks, nilai direktif adalah ekspresi JavaScript yang memiliki akses ke
          state dari komponen.
        </p>
        <p>
          Salah satu direktif penting adalah <code>v-bind</code>, yang digunakan untuk mengikat atribut HTML ke ekspresi
          data. Ini memungkinkan atribut seperti <code>href</code>, <code>src</code>, atau <code>class</code> dapat
          berubah secara dinamis mengikuti data.
        </p>
      </div>
    </ContentCard>

    <!-- CARD 2: Gambar dan Penjelasan -->
    <ContentCard title="Contoh kode">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img 
          src="/images/codeAtributeBinding.png" 
          alt="Contoh penggunaan v-bind pada Vue"
          class="rounded-lg shadow-md mx-auto cursor-zoom-in" 
          @click="showImageModal = true" 
        />
        <div class="text-left text-sm text-gray-500 dark:text-gray-400">
          Bagian setelah titik dua (<code>:class</code>) adalah \"argumen\" dari direktif. Di sini, atribut elemen <code>class</code> akan disinkronkan dengan properti <code>titleClass</code> dari status komponen.
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
        src="/images/codeAtributeBinding.png" 
        alt="Zoomed image"
        class="max-w-full max-h-full rounded-lg shadow-xl" 
      />
    </div>
  </div>
</template>
