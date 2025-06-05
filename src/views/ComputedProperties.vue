<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
const activeImage = ref('')
</script>

<template>
  <div>
    <PageHeader title="Computed Property" />

    <!-- CARD 1: Penjelasan Konsep -->
    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Keuntungan besar dari computed property adalah sifatnya yang dinamis, artinya properti tersebut berubah
          bergantung pada, nilai dari satu atau beberapa properti data.

          Computed property adalah opsi konfigurasi ketiga dalam instance Vue yang akan kita pelajari. Dua opsi
          konfigurasi pertama yang telah kita lihat adalah 'data' dan 'metode'.

          Seperti halnya 'data' dan 'metode', properti yang dihitung juga memiliki nama khusus dalam instance Vue: '
          computed'.
        </p>
      </div>
    </ContentCard>

    <!-- CARD 2: Contoh Kode 1 -->
    <ContentCard title="Contoh Kode 1">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img src="/images/computedproperti1.png" alt="Contoh penggunaan v-for"
          class="rounded-lg shadow-md mx-auto cursor-zoom-in"
          @click="() => { activeImage = '/images/computedproperti1.png'; showImageModal = true }" />
        <div class="text-basic text-gray-500 dark:text-gray-400 space-y-2">
          <p>Fungsi dari computed property filteredtodos adalah untuk menyaring daftar todos berdasarkan nilai properti
            hidecompleted, computed property ini mengembalikan daftar todos yang telah difilter berdasarkan status
            hidecompleted. Jika hidecompleted adalah true, hanya akan menampilkan todos yang belum selesai; jika
            hidecompleted adalah false, akan menampilkan semua todos.
          </p>
        </div>
      </div>
    </ContentCard>

    <!-- CARD 3: Contoh Kode 2 -->
    <ContentCard title="Contoh Kode 2">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img src="/images/computedproperti2.png" alt="Contoh lanjutan v-for dengan objek"
          class="rounded-lg shadow-md mx-auto cursor-zoom-in"
          @click="() => { activeImage = '/images/computedproperti2.png'; showImageModal = true }" />
        <div class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
          <p>Saat kita mengklik tombol tambah, status penghitungan akan bertambah satu. Nilai sebenarnya dari hitungan
            (walaupun berubah) perlu ditampilkan di layar / output.
          </p>
          <p>ref() reaktivitas API memungkinkan kita membuat nilai reaktif sederhana. Ref bersifat reaktif karena
            mengubah nilainya akan merender ulang komponen untuk menampilkan nilai pembaruan pada output .

            Manfaat sebenarnya dari referensi terlihat ketika kita memperbarui dan melihat bagaimana Vue secara dinamis
            merender ulang komponen untuk melakukan perubahan.
          </p>
        </div>
      </div>
    </ContentCard>


    <!-- CARD 4: Contoh Kode 3 -->
    <ContentCard title="Contoh Kode 3">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <img src="/images/computedproperti3.png" alt="Contoh kode 3" class="rounded-lg shadow-md mx-auto cursor-zoom-in"
          @click="() => { activeImage = '/images/computedproperti3.png'; showImageModal = true }" />
        <div class="text-sm text-gray-500 dark:text-gray-400 space-y-2">
          <p>
            count adalah ref dan juga nilai reaktif . Ketika count.value ada perubahan, Vue memperbarui komponen dan
            menampilkan nilai hitungan baru di layar.
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
