<template>
    <div id="App">
        <h1>Todo List</h1>
        <hr>
        <TodoList 
            v-bind:todos="todos"
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
                {id: 2, title: 'Buy water', completed: false},
            ]
        }
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
