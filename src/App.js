import "./styles.css";
import React from "react";

const RefExample = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} {...props}>
      {" "}
      Click Me!{" "}
    </button>
  );
});

export default function App() {
  const buttonRef = React.createRef();
  console.log(buttonRef);
  React.useEffect(() => {
    buttonRef.current.addEventListener("click", () => {
      console.log("zamazam");
    });
  }, []);
  return (
    <div className="App">
      <RefExample ref={buttonRef} />
    </div>
  );
}
