<template>
    <div>
        <AddTodo
            @add-todo="addTodo"
            @fetch-todos="fetchTodos"
        />
        <hr>
        <TodoList 
            v-bind:todos="todos"
            @remove-todo="removeTodo"
        />
        <a href="/">Back to home</a>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import {mapTodos} from '@/utils/mapTodos';

export default {
    components: {
        TodoList,
        AddTodo,
    },
    data() {
        return {
            todos: [
                {id: 1, title: 'Buy bread', completed: false},
                {id: 2, title: 'Buy milk', completed: false},
                {id: 3, title: 'Buy water', completed: false},
            ]
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
            fetch('https://dummyjson.com/todos')
                .then(res => res.json())
                .then(result => this.todos = [
                        ...this.todos,
                        ...mapTodos(result.todos),
                    ]
                )
        }
    },
}
</script>

<style scoped>
    hr {
        opacity: .3;
    }
</style>