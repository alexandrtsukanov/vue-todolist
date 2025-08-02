export const mapTodos = (todos) =>
    todos.map(({ id, todo, completed }) => ({
        id: id + Date.now(),
        title: todo,
        completed,
    }))
