<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input
                type="checkbox"
                v-bind:checked="todo.completed"
                v-on:change="todo.completed = !todo.completed"
            >
            <strong>{{index + 1}}</strong>
            <span v-if="isEditing">
                <input type="text" v-model="newTitle">
                <button @click="onSave">Save</button>
            </span>
            <p v-else>{{todo.title}}</p>
        </span>

        <span class="action-buttons">
            <button v-on:click="toggleIsEditing">
                Edit
            </button>
            <button
                class="remove-button"
                v-on:click="$emit('remove-todo', todo.id)"
            >
                &times;
            </button>
        </span>
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
    data() {
        return {
            isEditing: false,
            newTitle: this.todo.title,
        }
    },
    methods: {
        toggleIsEditing() {
            this.isEditing = !this.isEditing;
        },
        onSave() {
            if (this.todo.completed) {
                return;
            }

            this.$emit('update-todos', this.todo.id, this.newTitle);
            this.isEditing = false;
        }
    },
}
</script>

<style scoped>
    span {
        display: flex;
        gap: .2rem;
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

    p {
        margin: 0;
    }

    .action-buttons {
        display: flex;
        gap: 1rem;
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