<template>
    <AppLayout>
        <Head title="Posts"/>
        <div class="w-1/2 mt-5 mx-auto">
            <!-- Form -->
            <form @submit.prevent="form.post(route('post.store'))" class="">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Post Title
                        </label>
                        <input v-model="form.title"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="New Post Title">
                        <p v-if="errors.title" class="text-red text-xs italic">
                            {{errors.title}}
                        </p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Created By
                        </label>
                        <input v-model="form.created_by"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name" type="text" placeholder="John Doe">
                        <p v-if="errors.created_by" class="text-red text-xs italic">
                            {{errors.created_by}}
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Description
                        </label>
                        <textarea v-model="form.description"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password" type="password" placeholder="Tell us more about your post..."></textarea>
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        <p v-if="errors.description" class="text-red text-xs italic">
                            {{errors.description}}
                        </p>
                    </div>
                </div>

                <button type="submit" class="bg-bermuda hover:bg-bubble-gum text-white font-bold py-2 px-4 rounded-full">
                    Create New Post
                </button>
            </form>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '../Layout/App.vue'
import { Head, useForm } from '@inertiajs/inertia-vue3';
import PostForm from '../Forms/PostForm.vue'
export default {
    setup() {
        const form = useForm({
            title: '',
            description: '',
            created_by: ''
        })

        return { form };
    },
    components:{
        AppLayout,
        Head,
        PostForm
    },props: {
        errors: Object
    },
}
</script>

<style>

</style>
