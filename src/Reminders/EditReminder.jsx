import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditReminder({ open, reminderParent, setOpen }) {
  const [date, setDate] = useState(reminderParent.date);
  const [color, setColor] = useState(reminderParent.color);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const reminder = {
      uuid: reminderParent.uuid,
      title: data.get("title"),
      description: data.get("description"),
      date,
      color,
    };

    dispatch({ type: "EDIT_REMINDER", payload: reminder });

    setOpen(false);
  };
  const deleteReminder = () => {
    dispatch({ type: "DELETE_REMINDER", payload: reminderParent });
    // setOpen(false);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <Modal
        key={reminderParent.uuid}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            xs={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography spacing={2} variant="h6" xs={{ mb: 3 }}>
                  Edit an existing Reminder
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  inputProps={{
                    maxLength: 30,
                  }}
                  autoFocus
                  defaultValue={reminderParent.title}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="description"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  defaultValue={reminderParent.description}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Date & Time"
                    required
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Color Code</FormLabel>
                <RadioGroup
                  row
                  aria-label="color"
                  name="row-radio-buttons-group"
                  value={color}
                  onChange={handleChangeColor}
                >
                  <FormControlLabel
                    value="#9c27b0"
                    control={<Radio />}
                    label="Purple"
                  />
                  <FormControlLabel
                    value="#d32f2f"
                    control={<Radio />}
                    label="Red"
                  />
                  <FormControlLabel
                    value="#1b5e20"
                    control={<Radio />}
                    label="Green"
                  />
                  <FormControlLabel value="" control={<Radio />} label="None" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Save Changes
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  fullWidth
                  onClick={() => deleteReminder()}
                  variant="outlined"
                  color="error"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
