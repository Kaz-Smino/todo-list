import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [isDuplicateTodo, setIsDuplicateTodo] = useState(false);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;

    if (incompleteTodos.includes(todoText)) {
      setIsDuplicateTodo(true);
      return;
    }

    setIsDuplicateTodo(false);
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full p-8 m-8 rounded bg-red-500">
        {isMaxLimitIncompleteTodos ? (
          <p className="text-red-600 text-sm font-bold" style={{ textAlign: 'center', color: 'red' }}>
            You've exceeded the maximum limit of TODO items.
          </p>
        ) : (
          <p className="text-red-600 text-sm font-bold" style={{ textAlign: 'center', visibility: 'hidden', color: 'red' }}>
            You've exceeded the maximum limit of TODO items.
          </p>
        )}
        {isDuplicateTodo ? (
          <p className="text-red-600 text-sm font-bold" style={{ textAlign: 'center', color: 'red' }}>
            This task already exists!
          </p>
        ) : (
          <p className="text-red-600 text-sm font-bold" style={{ textAlign: 'center', visibility: 'hidden', color: 'red' }}>
            This task already exists!
          </p>
        )}
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
          disabled={isMaxLimitIncompleteTodos}
        />
        <IncompleteTodos
          todos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
      </div>
    </div>
  );
};
