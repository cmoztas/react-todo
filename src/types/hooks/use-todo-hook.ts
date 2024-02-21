import {Todo} from "../entity/todo.ts";

export interface UseTodoHook {
    todos: Todo[];
    setTodoCompleted: (id: number, competed: boolean) => void;
    addTodo: (title: string) => void;
    removeTodo: (id: number) => void;
    removeAllCompletedTodos: () => void;
}