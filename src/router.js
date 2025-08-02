import {createWebHistory, createRouter} from 'vue-router';
import Home from '@/pages/Home.vue';
import Todos from '@/pages/Todos.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/todos', component: Todos },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;