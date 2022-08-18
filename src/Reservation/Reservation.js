// import React from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import Box from "@mui/material/Box";
import style from "../Reservation/Reservation.module.scss";

const Reservation = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div className={style.Reservation}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        localeText={{ start: "Check-in", end: "Check-out" }}
      >
        <DateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Reservation;
