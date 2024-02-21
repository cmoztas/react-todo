import React, {JSX, SetStateAction, useState} from "react";
import {AddTodoFormProps} from "../types/props/add-todo-form-props.ts";

export default function AddTodoForm({onSubmit}: AddTodoFormProps): JSX.Element {
    const [input, setInput]: [string, React.Dispatch<SetStateAction<string>>] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput('');
    }
    
    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                placeholder={"What needs to be done?"}
                className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button
                type="submit"
                className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >
                Add
            </button>
        </form>
    )
}