import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";
import { useState } from "react";
import { I_Todo } from "./interface";

export default function Todo() {

    const [todos, setTodos] = useState<I_Todo[]>([]);

    const addTodo = (newTodo: I_Todo) => setTodos([...todos, newTodo]);

    const deleteTodo = (todo: I_Todo) => setTodos(todos.filter((item) => item.id !== todo.id));
    
    return (
        <div className="container">
            <div className="w-4/5 mx-auto p-5">
                <FormTodo addTodo={addTodo} />
                <ListTodo todos={todos} deleteTodo={deleteTodo} />
            </div>
        </div>
    );
}
