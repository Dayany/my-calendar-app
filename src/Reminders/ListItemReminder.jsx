import { ListItem, ListItemIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import EditReminder from "./EditReminder";

const ListItemReminder = ({ reminder, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <Box
      key={index}
      sx={{
        backgroundColor: reminder.color,
      }}
    >
      <ListItem button key={index} onClick={handleOpenModal} component="button">
        <EditReminder
          reminderParent={reminder}
          open={openModal}
          setOpen={setOpenModal}
        />
        <ListItemIcon>
          <Typography variant="h3">{++index}</Typography>
        </ListItemIcon>
        <Typography variant="h6"> {reminder.title}</Typography>
      </ListItem>
    </Box>
  );
};

export default ListItemReminder;
