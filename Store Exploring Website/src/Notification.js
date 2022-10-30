import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

let open = false,
  setOpen,
  message,
  setMessage,
  severity,
  setSeverity,
  timeout,
  setTimeout;

const createNotification = (gotMessage, gotSeverity, timeout) => {
  setOpen(false);
  setMessage(gotMessage);
  setSeverity(gotSeverity);
  if (timeout !== undefined) {
    setTimeout(timeout);
  }
  setOpen(true);
};

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const Notification = () => {
  [open, setOpen] = useState(false);
  [message, setMessage] = useState("");
  [severity, setSeverity] = useState("");
  [timeout, setTimeout] = useState(3000);
  React.useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={timeout}
        TransitionComponent={TransitionDown}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
export { createNotification, Notification };
