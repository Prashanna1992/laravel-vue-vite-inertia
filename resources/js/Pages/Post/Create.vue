<template>
    <AppLayout>
        <Head title="Posts"/>
        <div class="w-1/2 mt-5 mx-auto">
            <!-- Form -->
            <PostForm/>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '../Layout/App.vue'
import { Head } from '@inertiajs/inertia-vue3';
import PostForm from '../Forms/PostForm.vue'
export default {
    components:{
        AppLayout,
        Head,
        PostForm
    },
    props: {

    }
}
</script>

<style>

</style>
