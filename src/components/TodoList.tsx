import TodoItem from "./TodoItem.tsx";
import {Todo} from "../types/todo.ts";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onRemove: (id: number) => void;
}

export default function TodoList({
    todos,
    onCompletedChange,
    onRemove
 }: TodoListProps) {
    const todosSorted = todos.sort((x, y) => {
        if (x.completed === y.completed) {
            return y.id - x.id;
        }

        return x.completed ? 1 : -1;
    })

    return (
        <>
            <div className="space-y-2">
                {todosSorted.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onCompletedChange={onCompletedChange}
                        onRemove={onRemove}
                    />
                ))}
            </div>
            {todos.length === 0 && (
                <p className="text-center text-sm text-gray-500">
                    No todos yet. Add a new one above.
                </p>
            )}
        </>
    )
}