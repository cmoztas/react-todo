import {Todo} from "../entity/todo.ts";

export interface TodoSummaryProps {
    todos: Todo[];
    removeAllCompleted: () => void;
}