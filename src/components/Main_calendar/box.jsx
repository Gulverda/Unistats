import React from 'react';
import {
    endOfWeek,
    isWithinInterval,
    startOfWeek,
} from "date-fns";

import {
    DayPicker,
    Row,
    RowProps,
} from "react-day-picker";

import "react-day-picker/dist/style.css";

// Custom styles for the DayPicker
const dayPickerStyle = {
    border: '1px solid #ccc', // Border color
    borderRadius: '8px', // Border radius
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
};

// Custom styles for the CurrentWeekRow component
const currentWeekRowStyle = {
    backgroundColor: "#000", // Background color for current week row
    fontWeight: "bold", // Font weight for current week row
};

// Custom styles for the Box component
const boxStyle = {
    width: "100%",
    height: "auto",
    background: "white",
    borderRadius: "12px",
    padding: "20px", // Add some padding
};

function CurrentWeekRow(props) {
    const isDateInCurrentWeek = (dateToCheck) => {
        const today = new Date();
        const start = startOfWeek(today);
        const end = endOfWeek(today);
        return isWithinInterval(dateToCheck, { start, end });
    };

    const isNotCurrentWeek = props.dates.every((date) => !isDateInCurrentWeek(date));

    if (isNotCurrentWeek) {
        return <></>;
    } else {
        return <Row {...props} style={currentWeekRowStyle} />;
    }
}


const Box = () => {
    return (
        <div style={boxStyle}>
            <DayPicker
                components={{ Row: CurrentWeekRow }}
                showOutsideDays
                mode="single"
                style={dayPickerStyle} // Apply styles to DayPicker
            />
        </div>
    );
}

export default Box;
