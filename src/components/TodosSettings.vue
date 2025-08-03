<template>
    <div>
        <button @click="$emit('uppercase')">Uppercase Todos</button>
        <button @click="$emit('reset-uppercase')">Reset Uppercase</button>
        <select v-model="selectValue" v-on:change="onSelect">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not completed</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        filterState: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            selectValue: this.filterState,
        }
    },
    methods: {
        onSelect() {
            this.$emit('change-filter', this.selectValue)
        }
    }
}
</script>


<style scoped>
    div {
        display: flex;
        gap: 1rem;
        margin-bottom: 16px;
    }

    span {
        display: flex;
        gap: 1rem;
    }
</style>