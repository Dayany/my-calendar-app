import { Box } from "@mui/system";
import React from "react";
import CalendarBar from "./CalendarBar";
import ShowCalendar from "./ShowCalendar";

const Calendar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <h1>Calendar</h1>
      <CalendarBar />
      <ShowCalendar />
    </Box>
  );
};
export default Calendar;
