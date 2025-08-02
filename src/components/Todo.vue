<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input
                type="checkbox"
                v-bind:checked="todo.completed"
                v-on:change="todo.completed = !todo.completed"
            >
            <strong>{{index + 1}}</strong>
            {{todo.title}}
        </span>
        <button
            class="remove-button"
            v-on:click="$emit('remove-todo', todo.id)"
        >&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
}
</script>

<style scoped>
    span {
        user-select: none;
    }

    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    input {
        margin-right: 1rem;
    }

    .remove-button {
        border-radius: 50%;
        color: #fff;
        background: red;
        font-weight: bold;
         border: 1px solid #000;
    }

    .done {
        text-decoration: line-through;
    }
</style>