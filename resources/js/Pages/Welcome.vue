<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import AppLayout from '../Pages/Layout/App.vue'

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
})

</script>

<template>
    <AppLayout>
        <Head title="Welcome" />
    </AppLayout>

</template>
