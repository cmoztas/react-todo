import {Todo} from "../entity/todo.ts";

export interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onRemove: (id: number) => void;
}