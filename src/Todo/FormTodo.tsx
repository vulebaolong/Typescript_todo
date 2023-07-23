import { useState } from "react";
import { I_FormProps } from "./interface";
import { customAlphabet } from "nanoid";

export default function FormTodo({ addTodo }: I_FormProps) {
    const [title, setTitle] = useState("");

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitle(value);
    };
    const handleSubmit = () => {
        const value = title.trim();
        if (value === "") return;
        addTodo({
            id: +customAlphabet("1234567890", 10)(),
            title: title,
            isCompleted: false,
        });
        setTitle("")
    };
    return (
        <div className="flex gap-3">
            <input onChange={handleOnchange} value={title} type="text" className="flex-1 text-sm px-4 border border-gray-300 rounded-lg bg-gray-700 dark:text-white" />
            <button onClick={handleSubmit} className="px-5 py-2 bg-slate-500 hover:bg-slate-600 active:hover:bg-slate-700 rounded-lg transition">
                Add
            </button>
        </div>
    );
}
