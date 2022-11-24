<template>
    <div class="w-80 mx-auto">
        <Link :href="route('post.index')" class="mx-2">Posts</Link>
        <Link :href="route('about.index')" class="mx-2">About</Link>
        <div class="w-full mt-4 text-sm text-left text-gray-500 dark:text-gray-400">
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
                    <tr v-for="(post, index) in posts" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{index}}
                        </td>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{post.title}}
                        </th>
                        <td class="py-4 px-6">
                            {{post.description}}
                        </td>
                        <td class="py-4 px-6">
                            {{post.created_by}}
                        </td>
                        <td class="py-4 px-6">
                            {{post.created_at}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';
export default {
    components:{
        Link
    },
    props:{
        posts: Object
    }
}
</script>

<style>

</style>
