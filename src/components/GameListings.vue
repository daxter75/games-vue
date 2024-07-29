<script setup lang="ts" generic="T, K extends keyof T">
import { ref, reactive, onMounted, computed } from 'vue';
import GameCard from '@/components/GameCard.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

const props = withDefaults(defineProps<{
    limit?: number
    title?: string
    games?: Array<T>
    gameKey?: K
    }>(), 
    {
        title: "Browse Games"
    }
)

const state = reactive({
    games: [],
    isLoading: true    
})

const spinnerColor = "rgb(59, 130, 246)"

const totalNoOfDisplayGames = computed(() => {
    return props.limit ?? state.games.length
})

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/games');
        state.games = response.data;
    } catch (error) {
        console.error('Error fetching games: ', error);
    } finally {
        state.isLoading = false;
    }
});

</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-blue-500 mb-6 text-center">
                {{ props.title }}
            </h2>
            <div v-if="state.isLoading" class="flex justify-center">
                <PulseLoader :color="spinnerColor" />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GameCard v-for="game in state.games.slice(0, totalNoOfDisplayGames)" :key="(game[gameKey as K] as string | number)" :game="game" />
            </div>            
        </div>
    </section>
</template>