<template>
    <form @submit.prevent="form.post(route('post.store'))" class="">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Post Title
            </label>
            <input v-model="form.title" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="New Post Title">
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Created By
            </label>
            <input v-model="form.created_by" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="John Doe">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Description
            </label>
            <textarea v-model="form.description" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Tell us more about your post..."></textarea>
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
        </div>

        <Button type="submit" class="bg-bermuda hover:bg-bubble-gum text-white font-bold py-2 px-4 rounded-full">
            Create New Post
        </Button>
    </form>
</template>

<script>
import { Link, useForm } from '@inertiajs/inertia-vue3';
export default {
    setup(){
        const form = useForm({
            title : '',
            description : '',
            created_by : ''
        })

        return {form};
    },
    components:{
        Link
    }
}
</script>

<style lang="scss" scoped>

</style>
