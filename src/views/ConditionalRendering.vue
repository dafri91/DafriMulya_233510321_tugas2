<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
</script>

<template>
  <div>
    <PageHeader title="	Conditional Rendering" />

    <!-- CARD 1: Penjelasan Konsep -->
    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Binding dalam Vue.js mengacu pada cara data terikat ke elemen HTML dalam template Vue. Binding memungkinkan
          Anda menghubungkan data yang didefinisikan dalam komponen Vue dengan elemen HTML, sehingga perubahan dalam
          data akan tercermin secara otomatis dalam tampilan. Dalam konteks form, ada beberapa jenis binding yang umum
          digunakan yaitu v-model
        </p>
      </div>
    </ContentCard>

    <!-- CARD 2: Gambar dan Penjelasan -->
    <ContentCard title="Contoh Kode">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img src="/images/codeConditionalRendering.png" alt="Contoh Kode"
          class="rounded-lg shadow-md mx-auto cursor-zoom-in" @click="showImageModal = true" />
        <div class="text-basic text-gray-500 dark:text-gray-400 space-y-2">
          <p>
            Mengimpor fungsi <code>ref</code> digunakan untuk membuat variabel yang bersifat reaktif.
            Dalam contoh ini, <code>const awesome = ref(true)</code> akan membuat variabel reaktif bernama <code>awesome</code> dengan nilai awal <code>true</code>, yang merepresentasikan status \"kehebatan\" Vue.
          </p>
          <p>
            Fungsi <code>toggle()</code> berfungsi untuk mengubah nilai dari <code>awesome</code> antara <code>true</code> dan <code>false</code> setiap kali dipanggil.
          </p>
          <p>
            Di dalam blok <code>&lt;template&gt;</code>, terdapat tombol yang akan menjalankan <code>toggle()</code> saat diklik, sehingga nilai dari <code>awesome</code> akan berubah.
          </p>
          <p>
            Elemen <code>&lt;h1 v-if=\"awesome\"&gt;Vue is awesome!&lt;/h1&gt;</code> akan muncul jika <code>awesome</code> bernilai <code>true</code>, sedangkan
            <code>&lt;h1 v-else&gt;Oh no 😢&lt;/h1&gt;</code> akan muncul jika <code>awesome</code> bernilai <code>false</code>.
          </p>
        </div>
      </div>
    </ContentCard>

    <!-- Modal Zoom Gambar -->
    <div v-if="showImageModal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="showImageModal = false">
      <img src="/images/codeConditionalRendering.png" alt="Zoomed image"
        class="max-w-full max-h-full rounded-lg shadow-xl" />
    </div>
  </div>
</template>
