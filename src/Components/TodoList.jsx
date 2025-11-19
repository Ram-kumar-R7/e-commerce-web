import { lazy } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
import { IoPersonAddSharp } from "react-icons/io5";
const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, label: "HTML & CSS ", checked: false },
    { id: 2, label: "JavaScript  ", checked: false },
    { id: 3, label: "React Js ", checked: false },
  ]);
  const [newitem, setNewItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currEleId, setCurrEleId] = useState(null);

  const handlechecked = (id) => {
    let newListItem = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(newListItem);
  };

  const handleAddorSave = () => {
    if (isEditing) {
      let newListItem = items.map((item) => {
        return item.id === currEleId ? { ...item, label: newitem } : item;
      });
      setItems(newListItem);
      setCurrEleId(null);
      setNewItem("");
      setIsEditing(false);
    } else {
      setItems([
        ...items,
        {
          id: items.length + 1,
          label: newitem,
          checked: false,
        },
      ]);
      setNewItem("");
    }
  };

  const handleUpdate = (id) => {
    let listItems = items.find((item) => item.id === id);
    setNewItem(listItems.label);
    setIsEditing(true);
    setCurrEleId(id);
  };

  const handleDelete = (id) => {
    let newDeleteList = items
      .filter((item) => {
        return item.id !== id;
      })
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newDeleteList);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          value={newitem}
          placeholder="Add Item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button onClick={handleAddorSave}>
          {isEditing ? <BsSave /> : <IoPersonAddSharp />}{" "}
        </button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handlechecked(item.id)}
              />
              <label> {item.label}</label>
              <FaEdit
                role="button"
                tabIndex={0}
                onClick={() => handleUpdate(item.id)}
              />
              <FaTrashAlt
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default TodoList;
