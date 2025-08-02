<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create Todo</button>
        <button v-on:click="$emit('fetch-todos')">Fetch Todos</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false,
                }

                this.$emit('add-todo', newTodo);
                this.title = '';
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    input {
        width: 500px;
    }
</style>