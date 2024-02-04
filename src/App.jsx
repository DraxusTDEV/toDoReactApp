import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    { id: 1, title: "Go to the Gym", completed: true },
    { id: 2, title: "Complete React Course", completed: false },
    { id: 3, title: "10 minutes practice", completed: false },
    { id: 4, title: "Pick up groceries", completed: false },
    { id: 5, title: "Complete ToDo App", completed: false },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                todos;
        }
    };

    return (
        <div className="background min-h-screen bg-gray-300 bg-contain  bg-no-repeat dark:bg-gray-900 dark:bg-[url('src/assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filterTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center dark:text-gray-400">
                Drag & Drop to reorder list
            </footer>
        </div>
    );
};

export default App;
