import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const containerRef = useRef(null);
  const [dragEle, setDragEle] = useState(null);

  function handleDragStart(e) {
    setDragEle(e);
    e.target.style.opacity = "0.1";
    console.log("start");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.innerHTML);
  }

  function handleDragEnd(e) {
    e.target.style.opacity = "1";
    console.log("end");
    [...containerRef.current.children].forEach((element) => {
      element.classList.remove("over");
    });
  }

  function handleDragEnter(e) {
    e.target.classList.add("over");
    console.log("enter");
  }

  function handleDragLeave(e) {
    e.target.classList.remove("over");
    console.log("leave");
  }

  function handleDragOver(e) {
    e.preventDefault();
    console.log("Over");
    return false;
  }

  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    console.log("drop");
    dragEle.target.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData("text/html");
    return false;
  }

  return (
    <div className="container" ref={containerRef}>
      <div
        draggable="true"
        className="box"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p style={{ color: "green" }}> A</p>
      </div>
      <div
        draggable="true"
        className="box"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        B
      </div>
      <div
        draggable="true"
        className="box"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        C
      </div>
    </div>
  );
};

export default App;
