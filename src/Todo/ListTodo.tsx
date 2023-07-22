import ItemTodo from "./ItemTodo";
import { useState } from "react";
import { I_ListTodoProps } from "./interface";

export default function ListTodo({ todos }: I_ListTodoProps) {
    return (
        <div className="mt-8">
            <h1 className="mb-5">Danh sách TODO</h1>
            <div className="space-y-2">
                {todos.map((todo, i) => {
                    return <ItemTodo todo={todo} key={i} />;
                })}
            </div>
        </div>
    );
}
