

<template>
    <div class="flex flex-col">
        <button class="border rounded-lg p-4 bg-black text-white m-auto" @click="store.getTestData()">Get Data</button>
        <div class="m-auto" v-for="item in store.data">
            {{ item }}
        </div>
    </div>

</template>

<script setup>
import { useTestStore } from "../stores/testStore.js";
const store = useTestStore();

</script>
<style scoped>

</style>
