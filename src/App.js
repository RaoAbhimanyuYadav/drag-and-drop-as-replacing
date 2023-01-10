import { useRef, useState } from "react";
import "./App.css";

const timeTable = [
  {
    semester: 1,
    timings: [
      {
        id: 1,
        day: "Monday",
        slots: [
          { id: 1, time: "10:00-11:00", course: "EC-101" },
          { id: 2, time: "10:00-11:00", course: "EC-102" },
          { id: 3, time: "10:00-11:00", course: "EC-103" },
          { id: 4, time: "10:00-11:00", course: "EC-104" },
          { id: 5, time: "10:00-11:00", course: "EC-105" },
          { id: 6, time: "10:00-11:00", course: "EC-106" },
          { id: 7, time: "10:00-11:00", course: "EC-107" },
          { id: 8, time: "10:00-11:00", course: "EC-108" },
        ],
      },
      {
        id: 2,
        day: "Tuesday",
        slots: [
          { id: 1, time: "10:00-11:00", course: "EC-101" },
          { id: 2, time: "10:00-11:00", course: "EC-102" },
          { id: 3, time: "10:00-11:00", course: "EC-103" },
          { id: 4, time: "10:00-11:00", course: "EC-104" },
          { id: 5, time: "10:00-11:00", course: "EC-105" },
          { id: 6, time: "10:00-11:00", course: "EC-106" },
          { id: 7, time: "10:00-11:00", course: "EC-107" },
          { id: 8, time: "10:00-11:00", course: "EC-108" },
        ],
      },
      {
        id: 4,
        day: "Thrusday",
        slots: [
          { id: 1, time: "10:00-11:00", course: "EC-101" },
          { id: 2, time: "10:00-11:00", course: "EC-102" },
          { id: 3, time: "10:00-11:00", course: "EC-103" },
          { id: 4, time: "10:00-11:00", course: "EC-104" },
          { id: 5, time: "10:00-11:00", course: "EC-105" },
          { id: 6, time: "10:00-11:00", course: "EC-106" },
          { id: 7, time: "10:00-11:00", course: "EC-107" },
          { id: 8, time: "10:00-11:00", course: "EC-108" },
        ],
      },
      {
        id: 5,
        day: "Friday",
        slots: [
          { id: 1, time: "10:00-11:00", course: "EC-101" },
          { id: 2, time: "10:00-11:00", course: "EC-102" },
          { id: 3, time: "10:00-11:00", course: "EC-103" },
          { id: 4, time: "10:00-11:00", course: "EC-104" },
          { id: 5, time: "10:00-11:00", course: "EC-105" },
          { id: 6, time: "10:00-11:00", course: "EC-106" },
          { id: 7, time: "10:00-11:00", course: "EC-107" },
          { id: 8, time: "10:00-11:00", course: "EC-108" },
        ],
      },
      {
        id: 3,
        day: "Wednesday",
        slots: [
          { id: 1, time: "10:00-11:00", course: "EC-101" },
          { id: 2, time: "10:00-11:00", course: "EC-102" },
          { id: 3, time: "10:00-11:00", course: "EC-103" },
          { id: 4, time: "10:00-11:00", course: "EC-104" },
          { id: 5, time: "10:00-11:00", course: "EC-105" },
          { id: 6, time: "10:00-11:00", course: "EC-106" },
          { id: 7, time: "10:00-11:00", course: "EC-107" },
          { id: 8, time: "10:00-11:00", course: "EC-108" },
        ],
      },
    ],
  },
];

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
        <div style={{ pointerEvents: "none" }}>
          <div>
            <div>
              <p
                style={{
                  color: "green",
                  border: "1px solid black",
                }}
              >
                {" "}
                A
              </p>
              <p
                style={{
                  color: "green",
                  border: "1px solid black",
                }}
              >
                {" "}
                A
              </p>
              <p
                style={{
                  color: "green",
                  border: "1px solid black",
                }}
              >
                {" "}
                A
              </p>
              <p
                style={{
                  color: "green",
                }}
              >
                {" "}
                A
              </p>
            </div>
            <p
              style={{
                color: "green",
                border: "1px solid black",
              }}
            >
              {" "}
              A
            </p>
            <p
              style={{
                color: "green",
                border: "1px solid black",
              }}
            >
              {" "}
              A
            </p>
          </div>
        </div>
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
