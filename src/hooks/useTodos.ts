import React, {SetStateAction, useEffect, useState} from "react";
import {dummyData} from "../data/todos.ts";
import {Todo} from "../types/entity/todo.ts";
import {UseTodoHook} from "../types/hooks/use-todo-hook.ts";

export default function useTodos(): UseTodoHook {
    const [todos, setTodos]: [Todo[], React.Dispatch<SetStateAction<Todo[]>>] = useState(
        (): Todo[] => {
            const savedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
            return savedTodos.length > 0 ? savedTodos : dummyData;
        });

    useEffect((): void => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const setTodoCompleted = (id: number, completed: boolean): void => {
        setTodos((prevTodos: Todo[]) =>
            prevTodos.map((todo: Todo): Todo =>
                (todo.id === id ? {...todo, completed} : todo)))
    }

    const addTodo = (title: string): void => {
        setTodos((prevTodos: Todo[]) => [
            {id: Date.now(), title, completed: false},
            ...prevTodos
        ])
    };

    const removeTodo = (id: number): void => {
        setTodos((prevTodos: Todo[]) => prevTodos.filter((todo: Todo): boolean => todo.id !== id));
    };

    const removeAllCompletedTodos = (): void => {
        setTodos((prevTodos: Todo[]) => prevTodos.filter((todo: Todo) => !todo.completed))
    };

    return {
        todos,
        setTodoCompleted,
        addTodo,
        removeTodo,
        removeAllCompletedTodos
    }
}