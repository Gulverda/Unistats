import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "../../nav/nav";

const localizer = momentLocalizer(moment);

const MyScheduler = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "New Event",
      start: new Date("2024-04-30T09:30:00"),
      end: new Date("2024-04-30T11:30:00"),
    },
  ]);

  const addEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: "New Event",
      start: new Date("2024-04-30T09:30:00"),
      end: new Date("2024-04-30T11:30:00"),
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div className="calendar_container">
        <Sidebar />
        <div className="calendar_content">
        <button onClick={addEvent}>Add Event</button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500}}
      />
        </div>
    </div>
  );
};

export default MyScheduler;
