import {Todo} from "../entity/todo.ts";

export interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onRemove: (id: number) => void;
}