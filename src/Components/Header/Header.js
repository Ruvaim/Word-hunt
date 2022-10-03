import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import "./Header.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const Header = ({word,setWord}) => {

    const darkTheme = createTheme({
        palette: {
            primary:{
                main:"#fff",
            },
          mode: 'dark',
        },
      });

    return(
        <div className="header">
            <span className="title">{word ? word :"Word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                    className='search'
                    label="Search a word" variant="standard" 
                    value={word}
                    onChange={(e)=> setWord(e.target.value)}
                    />

                </ThemeProvider>

            </div>
        </div>
    )
}

export default Header;