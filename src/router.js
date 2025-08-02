import {createMemoryHistory, createRouter} from 'vue-router';
import Home from '@/pages/Home.vue';
import Todos from '@/pages/Todos.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/todos', component: Todos },
]
  
export default createRouter({
    history: createMemoryHistory(),
    routes,
})
