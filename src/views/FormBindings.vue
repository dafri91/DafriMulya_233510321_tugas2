<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
</script>

<template>
  <div>
    <PageHeader title="Form Bindings" />

    <!-- CARD 1: Penjelasan Konsep -->
    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Binding dalam Vue.js mengacu pada cara data terikat ke elemen HTML dalam template Vue. Binding memungkinkan
          Anda menghubungkan data yang didefinisikan dalam komponen Vue dengan elemen HTML, sehingga perubahan dalam
          data akan tercermin secara otomatis dalam tampilan.
          Dalam konteks form, ada beberapa jenis binding yang umum digunakan yaitu v-model
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
        <img src="/images/codeFormBinding.png" alt="Contoh penggunaan Event Listener pada Vue"
          class="rounded-lg shadow-md mx-auto cursor-zoom-in" @click="showImageModal = true" />
        <div class="text-left text-basic text-gray-500 dark:text-gray-400">
            <p>
              Mengimpor fungsi <code>ref</code> dari Vue digunakan untuk membuat variabel reaktif.
              Dalam contoh ini, variabel bernama <code>text</code> dibuat dengan sintaks:
              <code>const text = ref('')</code> untuk menyimpan teks yang dimasukkan oleh pengguna.
            </p>
            <p>
              Di dalam blok <code>&lt;template&gt;</code>, elemen input dihubungkan ke variabel
              <code>text</code> menggunakan direktif <code>v-model</code>.
              Ini memungkinkan nilai input diperbarui secara otomatis ke dalam variabel setiap kali pengguna mengetik.
            </p>
            <p>
              Nilai dari <code>text</code> juga ditampilkan menggunakan <code>{{ text }}</code>,
              sehingga isi input akan langsung terlihat di halaman secara <em>real-time</em>.
             </p>
        </div>
      </div>
    </ContentCard>

    <!-- Modal Zoom Gambar -->
    <div v-if="showImageModal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="showImageModal = false">
      <img src="/images/codeFormBinding.png" alt="Zoomed image" class="max-w-full max-h-full rounded-lg shadow-xl" />
    </div>
  </div>
</template>
