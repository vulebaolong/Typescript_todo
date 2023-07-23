import ItemTodo from "./ItemTodo";
import { I_ListTodoProps } from "./interface";

export default function ListTodo({ todos, deleteTodo }: I_ListTodoProps) {
    return (
        <div className="mt-8">
            <h1 className="mb-5">Danh sách TODO</h1>
            <div className="space-y-2">
                {todos.map((todo, i) => {
                    return <ItemTodo todo={todo} key={i} deleteTodo={deleteTodo} />;
                })}
            </div>
        </div>
    );
}
