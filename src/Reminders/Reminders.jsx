import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Divider, IconButton, List, Toolbar, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import ListItemReminder from "./ListItemReminder";
import AddAlertIcon from "@mui/icons-material/AddAlert";

const drawerWidth = 400;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Reminders = () => {
  const open = useSelector((state) => state.reminders.isOpen);
  const reminders = useSelector((state) => state.reminders.reminders);
  const selectedDate = useSelector((state) => state.calendar.selectedDate);

  const filteredReminders = reminders.filter((reminder) => {
    return (
      new Date(reminder.date.toDateString()) -
        new Date(selectedDate.toDateString()) ===
      0
    );
  });
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch({ type: "TOGGLE_OPEN" });
  };

  const orderedReminders = filteredReminders.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pl: "24px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My Calendar</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        {open ? (
          <Typography variant="h6">
            Reminders for: {selectedDate.toDateString()}
          </Typography>
        ) : (
          <AddAlertIcon style={{ marginLeft: 14 }} fontSize="large" />
        )}
        {!orderedReminders[0] && open ? (
          <Typography sx={{ margin: "20px" }} variant="h6">
            No Reminders for this date.
          </Typography>
        ) : null}
        <List>
          {orderedReminders?.map((current, index) => (
            <ListItemReminder
              key={current.uuid}
              reminder={current}
              index={index}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Reminders;
