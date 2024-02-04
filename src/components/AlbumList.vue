<template>
    <div class="album-list">
        <h1>{{ msg }}</h1>
        <p>
            Edit <code>components/AlbumList.vue</code> to test hot module replacement.
        </p>
        <p>
            {{ count }}
        </p>
        <button @click="count++">count is: {{ count }}</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>