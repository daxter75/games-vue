<script setup lang="ts">
import externalLinkIcon from '@/assets/img/external-link.svg'

const externalLinks: Record<string, string> = {
    "game" :        "https://www.freetogame.com/api-doc",
    "vuejs":        "https://vuejs.org/",
    "tailwindcss":  "https://tailwindcss.com/",
    "author":       "http://ddujin.com"
}
</script>

<template>
    <div class="container block text-center mt-6">
        <h1 class="text-2xl font-black">
            Featured Games
            <span class="text-sm font-light">v0.1</span>
        </h1>
        <div class="mt-6">Used API: 
            <a :href="externalLinks.game" target="_blank">
                Free-To-Play <img class="mb-1 h-4 inline" :src="externalLinkIcon" alt="FreeToGames" />
            </a>
        </div>
        <div class="mt-6">
            Made with <span class="text-red-600">&hearts;</span> 2024.
        </div>
        <div class="mt-6">
            <a :href="externalLinks.vuejs" target="_blank" class="h-[36px] bg-blue-100 hover:bg-blue-200 text-gray-700 px-4 py-2 rounded-lg text-center text-sm">
                VueJS
                <img class="mb-1 h-4 inline" :src="externalLinkIcon" alt="VueJS" />
            </a> + 
            <a :href="externalLinks.tailwindcss" target="_blank" class="h-[36px] bg-blue-100 hover:bg-blue-200 text-gray-700 px-4 py-2 rounded-lg text-center text-sm">
                TailwindCSS
                <img class="mb-1 h-4 inline" :src="externalLinkIcon" alt="TailwindCSS" />
            </a>
        </div>
        <div class="mt-6">
            <a :href="externalLinks.author" target="_blank">
                ddujin.com <img class="mb-1 h-4 inline" :src="externalLinkIcon" alt="FreeToGames" />
            </a>
        </div>
    </div>
</template>