import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { getDaysInMonth } from "date-fns";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { WEEKDAYS } from "../constants";
import DayInCalendarItem from "./DayInCalendarItem";

const ShowCalendar = () => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const reminders = useSelector((state) => state.reminders.reminders);
  const daysInCurrentMonth = getDaysInMonth(
    selectedDate.getMonth(),
    selectedDate.getFullYear()
  );
  const startDateMonth = useMemo(() => {
    return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  }, [selectedDate]);

  const populateCalendar = useMemo(() => {
    var calendar = [];
    let dayFromMonthPopulated = 1;
    for (let weeks = 0; weeks <= 6; weeks++) {
      let content = [];

      for (let days = 0; days < 7; days++) {
        if (dayFromMonthPopulated === 1 && days === startDateMonth.getDay()) {
          content.push({
            day: new Date(
              `${
                selectedDate.getMonth() + 1
              }/${dayFromMonthPopulated}/${selectedDate.getFullYear()}`
            ),
          });
          dayFromMonthPopulated++;
          continue;
        }
        if (
          dayFromMonthPopulated > 1 &&
          dayFromMonthPopulated <= daysInCurrentMonth
        ) {
          content.push({
            day: new Date(
              `${
                selectedDate.getMonth() + 1
              }/${dayFromMonthPopulated}/${selectedDate.getFullYear()}`
            ),
          });
          dayFromMonthPopulated++;
          continue;
        }
        content.push({ day: null });
      }
      calendar.push(content);
      if (dayFromMonthPopulated - 1 === daysInCurrentMonth) return calendar;
    }
    return calendar;
  }, [startDateMonth, selectedDate, daysInCurrentMonth]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="lg">
        <TableHead>
          <TableRow>
            {WEEKDAYS.map((day, index) => {
              return <TableCell key={day}>{day}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {populateCalendar.map((current, index) => (
            <TableRow key={`table-row-calendar-${index}`}>
              {current.map((day, index) => (
                <DayInCalendarItem
                  key={`dici-${index}`}
                  day={day.day}
                  selectedDate={selectedDate}
                  reminders={reminders}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ShowCalendar;
