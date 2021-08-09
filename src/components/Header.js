import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './Header.css';

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#f3f2fe",
      },
      type: 'dark',
    },
  });

  return (
    <div className="header">
      <span className="title">Dictionary w/ ReactJS</span>
      <div className="inputs">
      <ThemeProvider theme={darkTheme}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select your currency"
          variant="outlined"
        >
            <MenuItem >
              Bangla
            </MenuItem>
          ))
        </TextField>
      </ThemeProvider>
      </div>
    </div>
  )
}

export default Header;