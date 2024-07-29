import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import GamesView from '@/views/GamesView.vue';
import AboutView from '@/views/AboutView.vue';
import GameView from '@/views/GameView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/games',
            name: 'games',
            component: GamesView
        },
        {
            path: '/games/:id',
            name: 'game',
            component: GameView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
    ],
});

export default router;