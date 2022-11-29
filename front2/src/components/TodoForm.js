import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newtask = {
      userid: props.userid,
      task: input,
      taskid: Math.floor(Math.random() * 10000),
      complete: false,
    };

    props.onSubmit(newtask);
    setInput("");

    await fetch("/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newtask),
    }).catch((error) => {
      console.log(error);
      return;
    });

    window.location.reload(false);
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    let newtask = {
      userid: props.userid,
      task: input,
      taskid: props.edit.id,
    };

    props.onSubmit(newtask);
    setInput("");

    await fetch("/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newtask),
    }).catch((error) => {
      console.log(error);
      return;
    });

    // window.location.reload(false);
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit2} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
  userid: PropTypes.number,
};
export default TodoForm;
