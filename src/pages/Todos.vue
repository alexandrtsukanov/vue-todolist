<template>
    <div>
        <AddTodo
            @add-todo="addTodo"
            @fetch-todos="fetchTodos"
        />
        <TodosSettings
            v-bind:filterState="filterState"
            v-on:change-filter="changeFilter"
            @uppercase="uppercaseTodos"
            @reset-uppercase="resetUppercaseTodos"
        />
        <hr>
        <Loader v-if="isLoading"/>
        <TodoList
            v-else-if="filteredTodos.length"
            v-bind:todos="filteredTodos"
            @remove-todo="removeTodo"
            @update-todos="updateTodos"
        />
        <h2 v-else>No Todos</h2>

        <router-link to="/">Back to home</router-link>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import TodosSettings from '@/components/TodosSettings.vue';
import Loader from '@/components/Loader.vue';
import {mapTodos, resetUppercase} from '@/utils';

export default {
    components: {
        TodoList,
        AddTodo,
        TodosSettings,
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
            filterState: 'all',
        }
    },
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        addTodo(todo) {
            this.todos.push(todo);
        },
        updateTodos(id, newTitle) {
            this.todos = this.todos.map(todo => todo.id === id ? {...todo, title: newTitle} : todo);
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
        },
        changeFilter(state) {
            this.filterState = state;
        },
        uppercaseTodos() {
            this.todos = this.todos.map(todo => ({ ...todo, title: todo.title.toUpperCase() }));
        },
        resetUppercaseTodos() {
            this.todos = this.todos.map(todo => ({ ...todo, title: resetUppercase(todo.title) }));
        },
    },
    computed: {
        filteredTodos() {
            if (this.filterState === 'all') {
                return this.todos;
            }
            if (this.filterState === 'completed') {
                return this.todos.filter(todo => todo.completed);
            }
            if (this.filterState === 'not completed') {
                return this.todos.filter(todo => !todo.completed); 
            }
        }
    },
}
</script>

<style scoped>
    hr {
        opacity: .5;
    }
</style>