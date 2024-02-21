import {dummyData} from "./data/todos.ts";
import {useEffect, useState} from "react";
import AddTodoForm from "./components/AddTodoForm.tsx";
import TodoList from "./components/TodoList.tsx";
import TodoSummary from "./components/TodoSummary.tsx";

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        return savedTodos.length > 0 ? savedTodos : dummyData;
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) =>
            prevTodos.map(todo =>
                (todo.id === id ? {...todo, completed} : todo)))
    }

    function addTodo(title: string) {
        setTodos(prevTodos => [
            {
                id: Date.now(),
                title,
                completed: false
            },
            ...prevTodos
        ])
    }

    function removeTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    function removeAllCompletedTodos() {
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
    }

    return (
        <main className="py-10 h-screen space-y-5">
            <h1 className="font-bold text-3xl text-center">Your Todos</h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
                <AddTodoForm onSubmit={addTodo}/>
                <TodoList
                    todos={todos}
                    onCompletedChange={setTodoCompleted}
                    onRemove={removeTodo}
                />
            </div>
            <TodoSummary todos={todos} removeAllCompleted={removeAllCompletedTodos} />
        </main>
    )
}

export default App;
