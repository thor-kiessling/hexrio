import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleClick = () => {
        //console.log("Hello, world!");
        fetch('https://9d1xmdp3qi.execute-api.us-west-1.amazonaws.com/graphql/')
        .then(response => response.json())
        .then(json => console.log(json))
        };

    return (
        <Box 
            component="form" 
            sx={{'& .MuiTextField-root': { m: 5, width: '60ch'}, }}
            noValidate
            autoComplete="off"
        >

        <FormControl sx={{ m: 5, width: '60ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password"
                style={{fontSize: 30, fontFamily: 'Merriweather'}}>
                    Enter SSN...</InputLabel>
                <OutlinedInput
                    id="standard-adornment-password"
                    style={{ background: 'white', fontSize: 40, fontFamily: 'Merriweather'}}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{p: 4}}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            
                            <IconButton
                            size='large'
                            onClick={handleClick}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            <SearchIcon/>
                            </IconButton>

                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        </Box>
    );
    
}
