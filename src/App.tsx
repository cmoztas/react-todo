import AddTodoForm from "./components/AddTodoForm.tsx";
import TodoList from "./components/TodoList.tsx";
import TodoSummary from "./components/TodoSummary.tsx";
import useTodos from "./hooks/useTodos.ts";
import Footer from "./components/Footer.tsx";

function App() {
    const {
        todos,
        addTodo,
        setTodoCompleted,
        removeTodo,
        removeAllCompletedTodos
    } = useTodos();

    return (
        <>
            <main className="py-10 h-full space-y-5">
                <h1 className="font-bold text-3xl text-center">Your Todos</h1>
                <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
                    <AddTodoForm onSubmit={addTodo}/>
                    <TodoList
                        todos={todos}
                        onCompletedChange={setTodoCompleted}
                        onRemove={removeTodo}
                    />
                </div>
                <TodoSummary todos={todos} removeAllCompleted={removeAllCompletedTodos}/>
            </main>
            <Footer />
        </>
    )
}

export default App;
