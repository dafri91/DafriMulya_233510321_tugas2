<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import ContentCard from '../components/ContentCard.vue'

const showImageModal = ref(false)
</script>

<template>
  <div>
    <PageHeader 
      title="Declarative Rendering" 
    />

    <ContentCard title="Penjelasan">
      <div class="text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Salah satu fitur inti dari Vue adalah <strong>declarative rendering</strong>, yaitu cara mendeklarasikan tampilan antarmuka (UI) berdasarkan data atau state dari JavaScript.
          Ketika data berubah, Vue akan secara otomatis memperbarui tampilan tanpa perlu manipulasi DOM secara manual.
        </p>
        <img 
          src="/images/codeDeclarativeRendering.png" 
          alt="Illustration of declarative rendering" 
          class="rounded-lg shadow-md mx-auto cursor-zoom-in"
          @click="showImageModal = true"
        />
        <p class="text-sm text-center text-gray-500 dark:text-gray-400">
          Klik gambar untuk memperbesar
        </p>
      </div>
    </ContentCard>

    <ContentCard title="Contoh Kode">
      <div class="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          Berikut contoh sederhana bagaimana deklaratif rendering bekerja di Vue:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-900 p-4 rounded text-sm overflow-auto"><code>
&lt;template&gt;
  &lt;p&gt;Hello, {{ name }}!&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
const name = 'Dafri'
&lt;/script&gt;
        </code></pre>
        <p>
          Ketika nilai dari <code>name</code> berubah, konten dalam paragraf otomatis diperbarui tanpa perlu menyentuh DOM langsung.
        </p>
      </div>
    </ContentCard>

    <!-- Modal Zoom Gambar -->
    <div
      v-if="showImageModal"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="showImageModal = false"
    >
      <img 
        src="/images/codeDeclarativeRendering.png" 
        alt="Zoomed image" 
        class="max-w-full max-h-full rounded-lg shadow-xl"
      />
    </div>
  </div>
</template>
