import { useState } from "react";
import { I_FormProps } from "./interface";

export default function FormTodo({ addTodo }: I_FormProps) {
    const [title, setTitle] = useState("Làm dự án cuối khóa");

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setTitle(e.target.value);
    };
    const handleClick = () => {
        addTodo({
            id: 1,
            title: title,
            isCompleted: false,
        });
    };
    return (
        <div className="flex gap-3">
            <input onChange={handleOnchange} value={title} type="text" className="flex-1 text-sm px-4 border border-gray-300 rounded-lg bg-gray-700 dark:text-white" />
            <button onClick={handleClick} className="px-5 py-2 bg-slate-500 hover:bg-slate-600 active:hover:bg-slate-700 rounded-lg transition">
                Add
            </button>
        </div>
    );
}
