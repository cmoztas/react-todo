import TodoItem from "./TodoItem.tsx";
import {Todo} from "../types/entity/todo.ts";
import {JSX} from "react";
import {TodoListProps} from "../types/props/todo-list-props.ts";

export default function TodoList({
    todos,
    onCompletedChange,
    onRemove
 }: TodoListProps): JSX.Element {
    const todosSorted: Todo[] = todos.sort((x: Todo, y: Todo): number => {
        if (x.completed === y.completed) {
            return y.id - x.id;
        }

        return x.completed ? 1 : -1;
    })

    return (
        <>
            <div className="space-y-2">
                {todosSorted.map((todo: Todo) => (
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