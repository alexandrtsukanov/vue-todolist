<template>
    <div id="App">
        <h1>Todo List Application</h1>
        <hr>
        <TodoList 
            v-bind:todos="todos"
            @remove-todo="removeTodo"
        />
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
    name: 'App',
    components: {
        TodoList,
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
    },
}
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
