import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const t = [
  {
    semester: 1,
    timings: [
      {
        id: 0,
        day: "",
        slots: [],
      },
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
          { id: 11, time: "10:00-11:00", course: "EC-101" },
          { id: 12, time: "10:00-11:00", course: "EC-102" },
          { id: 13, time: "10:00-11:00", course: "EC-103" },
          { id: 14, time: "10:00-11:00", course: "EC-104" },
          { id: 15, time: "10:00-11:00", course: "EC-105" },
          { id: 16, time: "10:00-11:00", course: "EC-106" },
          { id: 17, time: "10:00-11:00", course: "EC-107" },
          { id: 18, time: "10:00-11:00", course: "EC-108" },
        ],
      },
    ],
  },
];

const App = () => {
  const [timeTable, setTimeTable] = useState(t);
  const handleDragEnd = (result) => {
    console.log(result);
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let timetableCopy = timeTable;
    let sem = 0;
    let semData = timetableCopy[sem];
    let timingStartIndex = +source.droppableId;
    let timingEndIndex = +destination.droppableId;
    let slotStartIndex = source.index;
    let slotEndIndex = destination.index;
    let startTotalItems =
      timetableCopy[sem].timings[timingStartIndex].slots.length;
    let endTotalItems = timetableCopy[sem].timings[timingEndIndex].slots.length;
    console.log(
      timingStartIndex,
      timingEndIndex,
      slotStartIndex,
      slotEndIndex,
      startTotalItems,
      endTotalItems
    );
    let startEle = semData.timings[timingStartIndex].slots[slotStartIndex];
    if (slotEndIndex >= endTotalItems) {
      slotEndIndex = endTotalItems - 1;
    }
    let endEle = semData.timings[timingEndIndex].slots[slotEndIndex];
    timetableCopy[sem].timings[timingStartIndex].slots.splice(
      slotStartIndex,
      1
    );
    timetableCopy[sem].timings[timingEndIndex].slots.splice(slotEndIndex, 1);
    timetableCopy[sem].timings[timingStartIndex].slots.splice(
      slotStartIndex,
      0,
      endEle
    );
    timetableCopy[sem].timings[timingEndIndex].slots.splice(
      slotEndIndex,
      0,
      startEle
    );
    setTimeTable(timetableCopy);
  };

  return (
    <>
      {timeTable.map((sem, semInd) => (
        <DragDropContext
          onDragEnd={handleDragEnd}
          onDragStart={(e) => {
            console.log(e);
          }}
          key={semInd}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "1200px",
                height: "800px",
                border: "5px solid blue",
                display: "flex",
              }}
            >
              {sem.timings.map((day, dayInd) => (
                <Droppable droppableId={day.id.toString()} key={dayInd}>
                  {(provided, snapshot) => (
                    <div
                      className={snapshot.isDraggingOver ? "dragactive" : ""}
                      style={{
                        width: "180px",
                        height: "790px",
                        border: "3px solid green",
                        display: "inline-block",
                      }}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {day.slots.map((slot, index) => (
                        <Draggable
                          draggableId={slot.id.toString()}
                          index={index}
                          key={slot.id.toString()}
                        >
                          {(provided, snapshot) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className={snapshot.isDragging ? "drag" : ""}
                              style={{
                                width: "100px",
                                height: "60px",
                                border: "1px solid black",
                                display: "inline-block",
                                ...provided.draggableProps.style,
                              }}
                            >
                              {slot.course}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </div>
        </DragDropContext>
      ))}
    </>
  );
};

export default App;
