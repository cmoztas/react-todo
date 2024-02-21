import {TodoSummaryProps} from "../types/props/todo-summary-props.ts";
import {Todo} from "../types/entity/todo.ts";
import {JSX} from "react";

export default function TodoSummary({
    todos,
    removeAllCompleted
}: TodoSummaryProps): JSX.Element {
    const completedTodos: Todo[] = todos.filter((todo: Todo) => todo.completed);

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