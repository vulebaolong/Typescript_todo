export interface I_Todo {
    id: number;
    title: string
    isCompleted: boolean;
}

export interface I_ListTodoProps {
    todos: I_Todo[]
}

export interface I_ItemTodoProps {
    todo: I_Todo
}

export interface I_FormProps {
    addTodo: (todo:I_Todo) => void;
    deleteTodo: (todo:I_Todo) => void;
}

