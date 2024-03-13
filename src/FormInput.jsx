import { useState } from "react";

function FormInput() {
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form
    // onSubmit={}
    >
      <input value={todo} onChange={handleOnChange} />
    </form>
  );
}

export default FormInput;
