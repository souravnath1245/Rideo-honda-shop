import * as React from 'react';
import Grid from '@mui/material/Grid';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import TextField from "@mui/material/TextField";
import BookingProducts from '../BookingProduct/BookingProducts';

const DashboardHome = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={5}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  openTo="day"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} lg={7}>
                <BookingProducts date={value}/>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;