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

    return (
        <div className="background min-h-screen  bg-gray-300 bg-contain bg-no-repeat">
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoCreate />

                <TodoList todos={todos} />

                <TodoComputed />

                <TodoFilter />
            </main>

            <footer className="mt-8 text-center">
                Drag & Drop to reorder list
            </footer>
        </div>
    );
};

export default App;
