<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Props {
    game: {
        thumbnail: string,
        genre: string,
        title: string,
        platform: string,
        id: string | number
    }
}
const props = defineProps<Props>();

</script>

<template>
<div class="bg-white rounded-xl shadow-md relative">
    <img :src=game.thumbnail class="w-full rounded-t-xl" />
    <div class="p-4">
        <div class="mb-6">
            <div class="text-gray-600 my-2">{{ game.genre }}</div>
            <h3 class="text-xl font-bold">{{ game.title }}</h3>
        </div>

        <div class="flex justify-between">
            <h3 class="text-blue-500 mb-2">{{ game.platform }}</h3>
            <RouterLink
                :to="'/games/' + game.id"
                class="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
                Read More
            </RouterLink>
        </div>        
    </div>
</div>
</template>