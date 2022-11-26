<template>
    <AppLayout>
        <Head title="Posts"/>
        <div class="w-80 mx-auto">
            <div class="w-full mt-4 text-sm text-left text-gray-500 dark:text-gray-400">
                <div class="w-full pt-3 flex justify-items-end">
                    <Link :href="route('post.create')" class="bg-corallite hover:bg-creamypeach text-white font-bold py-2 px-4 rounded-full">
                        Add New Post
                    </Link>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead>
                        <th>
                            S.N.
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Title
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Description
                        </th>

                        <th scope="col" class="py-3 px-6">
                            Created By
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Created
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="(post, index) in posts" :key="index"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ index }}
                            </td>
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ post.title }}
                            </th>
                            <td class="py-4 px-6">
                                {{ post.description }}
                            </td>
                            <td class="py-4 px-6">
                                {{ post.created_by }}
                            </td>
                            <td class="py-4 px-6">
                                {{ post.created_at }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '../Layout/App.vue'
import { Head } from '@inertiajs/inertia-vue3';
import { Link } from '@inertiajs/inertia-vue3';
export default {
    components:{
        AppLayout,
        Head,
        Link
    },
    props: {
        posts: Object
    }
}
</script>

<style>

</style>
