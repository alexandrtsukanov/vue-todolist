<template>
    <ul>
        <Todo
            v-for:="(todo, i) in todos" :key="todo.id"
            v-bind:todo="todo"
            v-bind:index="i"
            v-on:remove-todo="removeTodo"
        />
    </ul>
</template>

<script>
import Todo from './Todo.vue';

export default {
    components: {
        Todo,
    },
    props: ['todos'],
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id);
        },
    },
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>