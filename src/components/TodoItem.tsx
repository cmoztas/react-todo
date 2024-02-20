import {Todo} from "../types/todo.ts";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onRemove: (id: number) => void;
}

export default function TodoItem({todo, onCompletedChange, onRemove }: TodoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                    className="scale-125"
                />
                <span className={`grow ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                    {todo.title}
                </span>
                <button
                    type="button"
                    className="w-16 rounded-md bg-red-700 text-white hover:bg-red-600"
                    onClick={() => onRemove(todo.id)}
                >Remove</button>
            </label>
        </div>
    )
}