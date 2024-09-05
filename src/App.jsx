import React, { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let nameRef = useRef(null);
  let ageRef = useRef(null);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  function handleSave(e) {
    e.preventDefault();
    if (nameRef.current.value == "" || ageRef.current.value == "") {
      return null;
    }
    const user = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      id: Date.now(),
    };
    dispatch({ type: "ADD", payload: user });
    nameRef.current.value = "";
    ageRef.current.value = "";
  }
  function handleRemove(id) {
    let isDelete = confirm("Delete? Sure?");
    if (isDelete) {
      dispatch({ type: "REMOVE", payload: id });
    }
  }
  function handleEdit(id) {
    let isEdit = confirm("Edit? Sure?");
    let name = prompt("name");
    let age = prompt("age");
    if (isEdit) {
      dispatch({ type: "EDIT", payload: { id: id, name: name, age: age } });
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSave}
        style={{
          width: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "100px",
        }}
      >
        <input ref={nameRef} type="text" placeholder="Enter name" />
        <input ref={ageRef} type="text" placeholder="Enter age" />
        <button>Save</button>
      </form>
      <h1>Users </h1>
      <div
        className="wrapper"
        style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}
      >
        {users.users.length > 0 &&
          users.users.map((value, index) => {
            return (
              <div
                key={index}
                className="card"
                style={{ background: "gray", borderRadius: "10px" }}
              >
                <h3>{value.name}</h3>
                <h2>{value.age}</h2>
                <button
                  onClick={() => {
                    handleRemove(value.id);
                  }}
                >
                  remove
                </button>
                <button onClick={() => handleEdit(value.id)}>edit</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
