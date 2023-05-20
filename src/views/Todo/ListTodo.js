import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: 1, title: "a" },
      { id: 2, title: "b" },
      { id: 3, title: "c" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });

    toast.success("so easy");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("delete success");
  };

  handleEditTodo = (todo) => {
    let isEmpty = Object.keys(this.state.editTodo).length === 0;

    if (isEmpty || this.state.editTodo.id !== todo.id) {
      this.setState({
        editTodo: todo,
      });
      return;
    }
    this.setState({
      editTodo: {},
    });
  };

  handleEditOnChange = (event) => {
    let editTodoCopy = this.state.editTodo;
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmpty = Object.keys(editTodo).length === 0;

    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmpty || editTodo.id !== item.id ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <span>
                      {index + 1} -{" "}
                      <input
                        value={editTodo.title}
                        onChange={(event) => this.handleEditOnChange(event)}
                      />
                    </span>
                  )}
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmpty || editTodo.id !== item.id ? "Edit" : "Save"}
                  </button>
                  <button onClick={() => this.handleDeleteTodo(item)}>
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
