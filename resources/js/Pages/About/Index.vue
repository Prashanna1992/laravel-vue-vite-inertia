<template>
    <AppLayout>
        <Head title="About Us!"/>
        <div class="w-80 mx-auto">
            <div class="w-full mt-4 text-sm text-left text-gray-500 dark:text-gray-400">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead>
                        <th>
                            You will learn about us very soon!
                        </th>
                    </thead>

                </table>
            </div>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '../Layout/App.vue'
import { Head } from '@inertiajs/inertia-vue3';
export default {
    components:{
        AppLayout,
        Head
    }
}
</script>

<style>

</style>
