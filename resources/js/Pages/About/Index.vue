<template>
    <div class="w-80 mx-auto">
        <Link :href="route('post.index')" class="mx-2">Posts</Link>
        <Link :href="route('about.index')" class="mx-2">About</Link>
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
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';
export default {
    components:{
        Link
    }
}
</script>

<style>

</style>
