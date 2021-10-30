import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddReminder from "../Reminders/AddReminder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MONTHNAMES } from "../constants";

const CalendarBar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const goForwardOneMonth = () => {
    dispatch({
      type: "SET_SELECTED_DATE",
      payload: new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)),
    });
  };

  const goBackOneMonth = () => {
    dispatch({
      type: "SET_SELECTED_DATE",
      payload: new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)),
    });
  };

  return (
    <Box display="flex">
      <Grid item xs={2}>
        <AddReminder />
      </Grid>
      <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            required
            value={selectedDate}
            onChange={(newValue) => {
              dispatch({ type: "SET_SELECTED_DATE", payload: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={2} display="flex">
        <Button onClick={() => goBackOneMonth()}>
          <ArrowBackIosIcon color="primary" />
          {selectedDate.getMonth() === 0 ? (
            <Typography variant="h6">
              {MONTHNAMES[11]} {selectedDate.getFullYear() - 1}
            </Typography>
          ) : (
            <Typography variant="h6">
              {MONTHNAMES[selectedDate.getMonth() - 1]}
            </Typography>
          )}
        </Button>
      </Grid>
      <Grid item xs={2} display="flex">
        <Typography variant="h5" display="flex">
          {MONTHNAMES[selectedDate.getMonth()]}, {selectedDate.getFullYear()}
        </Typography>
      </Grid>
      <Grid item xs={2} display="flex">
        <Button onClick={() => goForwardOneMonth()}>
          {selectedDate.getMonth() === 11 ? (
            <Typography variant="h6">
              {MONTHNAMES[0]} {selectedDate.getFullYear() + 1}
            </Typography>
          ) : (
            <Typography variant="h6">
              {MONTHNAMES[selectedDate.getMonth() + 1]}
            </Typography>
          )}
          <ArrowForwardIosIcon color="primary" />
        </Button>
      </Grid>
    </Box>
  );
};
export default CalendarBar;
