import {Todo} from "../types/todo.ts";

interface TodoSummaryProps {
    todos: Todo[];
    removeAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    removeAllCompleted
}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length} / {todos.length} completed
            </p>
            {completedTodos.length > 0 && (
                <button
                    onClick={removeAllCompleted}
                    className="text-red-500 hover:underline text-sm font-medium"
                >
                    Delete all completed
                </button>
            )}
        </div>
    )
}