import { I_ItemTodoProps } from "./interface";

export default function ItemTodo({ todo, deleteTodo }: I_ItemTodoProps) {
    return (
        <div className="flex items-center bg-slate-700 p-2 rounded-lg">
            <span className="flex-1">{todo.title}</span>
            <div className="flex gap-2">
                <button className="px-5 py-2 bg-slate-500 hover:bg-slate-600 active:hover:bg-slate-700 rounded-lg transition"> Edit</button>
                <button onClick={() => { deleteTodo(todo) }} className="px-5 py-2 bg-slate-500 hover:bg-slate-600 active:hover:bg-slate-700 rounded-lg transition"> delete</button>
            </div>
        </div>
    );
}
