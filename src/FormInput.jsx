import { useState, useRef } from "react";

function FormInput() {
  const inputRef = useRef("");

  const handleOnChange = (e) => {
    inputRef.current.value = e.target.value;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input onChange={handleOnChange} ref={inputRef} />
      <button style={{ margin: "10px" }}>確認</button>
    </form>
  );
}

export default FormInput;
