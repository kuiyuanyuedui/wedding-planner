import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import PropTypes from "prop-types";

function Todo({ todos, completeTodo, removeTodo, updateTodo, userid }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm userid={userid} edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.complete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div onClick={() => completeTodo(todo.taskid)} key={todo.taskid}>
        {todo.task}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.taskid)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.taskid, value: todo.task })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

Todo.prototype = {
  updateTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  todo: PropTypes.array,
};

export default Todo;
