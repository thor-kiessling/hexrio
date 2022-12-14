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

export default function EntryBar(clients) {
    // add a new citizen
    const add = async (prop) => {
        const addResponse = await clients.clients.clients.DMVclient.entities.citizen.add({
            firstName: "hank",
            lastName: "hill",
            dl: 1234567,
            dob: "12/1/1965",
            passportNum: 2345678,
            passportExp: "12/1/2024",
            socialSecurityNum: Number(prop),
        });
        console.log(addResponse);
        alert(JSON.stringify(addResponse['result']));
    }
    // const settings = async () => {
    //     clients.clients.clients.DMVclient.uniInfo.update({localNodeName: "DMV"})
    //     const settingsResponse = await clients.clients.clients.DMVclient.uniInfo.get();
    //     console.log(settingsResponse);
    //     alert(JSON.stringify(settingsResponse['result']));
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        // settings()
        add(values.password);
    }

    const [values, setValues] = React.useState({
        password: '', showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values, showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (<Box
            component="form"
            sx={{'& .MuiTextField-root': {m: 5, width: '60ch'},}}
            noValidate
            autoComplete="off"
        >

            <FormControl sx={{m: 5, width: '60ch'}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password"
                            style={{fontSize: 30, fontFamily: 'Merriweather'}}>
                    Enter SSN...</InputLabel>
                <OutlinedInput
                    id="standard-adornment-password"
                    style={{background: 'white', fontSize: 40, fontFamily: 'Merriweather'}}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={<InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{p: 4}}
                        >
                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>

                        <IconButton
                            size='large'
                            onClick={handleSubmit}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            <SearchIcon/>
                        </IconButton>

                    </InputAdornment>}
                    label="Password"
                />
            </FormControl>
        </Box>);

}