import {dummyData} from "./data/todos.ts";
import {Todo} from "./types/todo.ts";
import {JSX} from "react";

function App(): JSX.Element {
    return (
        <main className="py-10 h-screen">
            <h1 className="font-bold text-3xl text-center">Your Todos</h1>
            <div className="max-w-lg mx-auto">
                <div className="space-y-2">
                    {dummyData.map((todo: Todo) => (
                        <p key={todo.id} className="text-lg">
                            {todo.title}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default App;
