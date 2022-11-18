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
import { createVendiaClient } from '@vendia/client';

// DMV Node apiUrl/websocketUrl/apiKey
const client = createVendiaClient({
    apiUrl: `https://rhpsthbngc.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://phqj0olq59.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: 'BH7U5toxb4qPcdDa1yNd2ab1riZ9xkfP3cGtU5VAz79c', // <---- API key
});

const { entities } = client;

export default function SearchBar() {

const responseAsync = async () => {
    //return await entities.citizen.get('01847d0d-7e60-ca08-8746-6cec70768a68');
    return await entities.citizen.list(
        {
            filter: {
                socialSecurityNum:  {
                    eq: parseInt(values.password, 10),
                },

            },
        }
    );
}

    const [values, setValues] = React.useState({    // values.password = SSN, setValues = setSSN 
        password: '',
        showPassword: false,
      });

    //const [ssn, setSSN] = React.useState(parseInt(values.password, 10));

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

      const handleClick = () => {
        console.log('SSN: ', parseInt(values.password, 10));
        console.log(responseAsync());
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
