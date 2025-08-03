<template>
    <div>
        <AddTodo
            @add-todo="addTodo"
            @fetch-todos="fetchTodos"
        />
        <hr>
        <Loader v-if="isLoading"/>
        <TodoList
            v-else-if="todos.length"
            v-bind:todos="todos"
            @remove-todo="removeTodo"
        />
        <h2 v-else>No Todos</h2>

        <router-link to="/">Back to home</router-link>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import Loader from '@/components/Loader.vue';
import {mapTodos} from '@/utils/mapTodos';

export default {
    components: {
        TodoList,
        AddTodo,
        Loader,
    },
    data() {
        return {
            todos: [
                {id: 1, title: 'Buy bread', completed: false},
                {id: 2, title: 'Buy milk', completed: false},
                {id: 3, title: 'Buy water', completed: false},
            ],
            isLoading: false,
        }
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        addTodo(todo) {
            this.todos.push(todo);
        },
        fetchTodos() {
            this.isLoading = true;
            fetch('https://dummyjson.com/todos')
                .then(res => res.json())
                .then(result => {
                    this.todos = [
                        ...this.todos,
                        ...mapTodos(result.todos),
                    ]
                    this.isLoading = false;
                })
        }
    },
}
</script>

<style scoped>
    hr {
        opacity: .5;
    }
</style>