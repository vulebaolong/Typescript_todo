import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";
import { useState } from "react";
import { I_Todo } from "./interface";

export default function Todo() {
    const [todos, setTodos] = useState<I_Todo[]>([
        {
            id: 1,
            title: "job 1",
            isCompleted: false,
        },
        {
            id: 2,
            title: "job 2",
            isCompleted: false,
        },
    ]);
    const addTodo = (todo: I_Todo) => {
        setTodos([...todos, todo]);
    };
    return (
        <div className="container">
            <div className="w-4/5 mx-auto p-5">
                <FormTodo addTodo={addTodo} />
                <ListTodo todos={todos} />
            </div>
        </div>
    );
}
