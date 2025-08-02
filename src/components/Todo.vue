<template>
    <li>
        <!-- {{todo.title}} -->
        <span>
            <input type="checkbox">
            {{todo.title}}
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
    },
}
</script>