import { Box, Grid, TableCell, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const DayInCalendarItem = ({ day, selectedDate, reminders }) => {
  const today = day?.getDate();
  const dispatch = useDispatch();
  const filteredReminders = reminders.filter((reminder) => {
    if (!day) return null;
    return (
      new Date(reminder.date.toDateString()) - new Date(day.toDateString()) ===
      0
    );
  });
  const isSelectedDateToday = () => {
    if (!day) return false;
    let result =
      new Date(selectedDate.toDateString()) - new Date(day?.toDateString()) ===
      0;
    return result;
  };

  const orderedReminders = filteredReminders.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  const setSelectedDate = () => {
    if (day) {
      dispatch({
        type: "SET_SELECTED_DATE",
        payload: new Date(day.toDateString()),
      });
    }
  };
  return (
    <TableCell
      key={`table-cell-day-${today}`}
      onClick={() => setSelectedDate()}
      style={{
        width: "14%",
      }}
    >
      <Box sx={{ overflowY: "auto", height: 100, display: "flex" }}>
        <Grid container spacing={1}>
          {isSelectedDateToday() ? (
            <Grid style={{ color: "#1976d2" }} item xs={12}>
              <b>{today}</b>
            </Grid>
          ) : (
            <Grid item xs={12}>
              {today}
            </Grid>
          )}

          {orderedReminders?.map((reminder, index) => (
            <Grid key={reminder.uuid} item xs={12}>
              <Typography variant="h8" style={{ color: reminder.color }}>
                {reminder.date.getHours() +
                  ":" +
                  reminder.date.getMinutes() +
                  " "}
                {reminder.title.slice(0, 10)}
                {reminder.title.length > 10 ? "..." : null}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </TableCell>
  );
};

export default DayInCalendarItem;
