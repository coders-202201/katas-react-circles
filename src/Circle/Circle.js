import { useState } from "react";
import "./Circle.css";

const Circle = () => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`circle${selected ? " selected" : ""}`}
      onClick={toggleSelected}
    ></div>
  );
};

export default Circle;
