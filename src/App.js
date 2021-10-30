import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import Calendar from "./Calendar/Calendar";
import Reminders from "./Reminders/Reminders";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Reminders />
        <Container maxWidth={false} sx={{ mt: 8 }}>
          <Calendar />
        </Container>
      </Box>
    </Provider>
  );
}

export default App;
