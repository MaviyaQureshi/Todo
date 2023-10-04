import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    addTodo(newItem);

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
