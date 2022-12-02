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
import {useNavigate} from 'react-router-dom';

export default function SearchBar() {

// used in cooperation with toDataDisplay
const navigate = useNavigate();

// Sends the SSN to DataDisplay
const toDataDisplay=()=>{
    navigate('/DataDisplay',{state:{ssn:values.password}});
      }


    const [values, setValues] = React.useState({    // values.password = SSN, setValues = setSSN 
        password: '',
        showPassword: false,
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        //parseInt(values.password, 10);
        
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
                            <a onClick={()=>{toDataDisplay()}}>
                            <IconButton
                            size='large'
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            <SearchIcon/>
                            </IconButton>
                            </a>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        </Box>
    );
    
}
