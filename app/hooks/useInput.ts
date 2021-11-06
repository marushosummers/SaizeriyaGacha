import { useState } from "react";

export default function useInput(initialValue) {
  const [state, setState] = useState(initialValue);

  const handleChange = e => {
    setState(e.target.value);
  };

  const reset = () => {
    setState("");
  };

  return [state, handleChange, reset];
}
