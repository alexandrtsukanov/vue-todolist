<template>
    <ul>
        <Todo
            v-for:="todo of todos"
            v-bind:todo="todo"
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
}
</script>
