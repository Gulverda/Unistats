import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ka"
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "../../nav/nav";

moment.locale("ka");
const localizer = momentLocalizer(moment);

const MyScheduler = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "GAU Welcome Party",
      start: new Date("2024-04-30T09:30:00"),
      end: new Date("2024-04-30T11:30:00"),
    },
  ]);

  const addEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: "ახალი ღონისძიება",
      start: new Date("2024-04-30T09:30:00"),
      end: new Date("2024-04-30T11:30:00"),
    };

    setEvents([...events, newEvent]);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = "#4318FF";
    let style = {
      backgroundColor,
      color: "white",
      fontFamily: "tkt",
    };
    return {
      style,
    };
  };

  return (
    <div className="calendar_container">
      <Sidebar />
      <div className="calendar_content">
        <button onClick={addEvent} style={{fontFamily: "tkt", padding: "10px", marginBottom: "15px", background: "#4318FF", display: "flex", alignItems: "center", justifyContent: "center", color: "white", borderRadius: "10px"}}>ღონისძიების დამატება</button>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, fontFamily: "tkt" }}
          eventPropGetter={eventStyleGetter}
          views={['month', 'week', 'day', 'agenda']}
          messages={{
            allDay: "მთელი დღე",
            previous: "წინა",
            next: "შემდეგი",
            today: "დღეს",
            month: "თვე",
            week: "კვირა",
            day: "დღე",
            agenda: "დღის გეგმა",
            date: "თარიღი",
            time: "დრო",
            event: "მოვლენა",
            noEventsInRange: "ამ პერიოდში მოვლენები არ არის",
            showMore: total => `სხვა ${total} ...`,
          }}
        />
      </div>
    </div>
  );
};

export default MyScheduler;
