import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import categories from '../data/category';
import './Header.css';

const Header = ({ category, setCategory, word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode ? "#000" : "#f3f2fe",
      },
      type: LightMode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  }

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary w/ ReactJS"}</span>
      <div className="inputs">
      <ThemeProvider theme={darkTheme}>
        <TextField 
        className="search" 
        id="outlined-basic" 
        label="Search for Word" 
        value={word}
        onChange={(e) => setWord(e.target.value)}
        />
        <TextField
          className="select"
          id="outlined-select-language"
          select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
          helperText="Please select language"
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
            ))}
        </TextField>
      </ThemeProvider>
      </div>
    </div>
  )
}

export default Header;