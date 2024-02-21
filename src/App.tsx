import {dummyData} from "./data/todos.ts";
import {useState} from "react";
import AddTodoForm from "./components/AddTodoForm.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
    const [todos, setTodos] = useState(dummyData);

    function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) =>
            prevTodos.map(todo =>
                (todo.id === id ? {...todo, completed} : todo)))
    }

    function addTodo(title: string) {
        setTodos(prevTodos => [
            {
                id: prevTodos.length + 1,
                title,
                completed: false
            },
            ...prevTodos
        ])
    }

    function removeTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
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
        </main>
    )
}

export default App;
