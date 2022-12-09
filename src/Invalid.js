import './App.css';
import React from 'react';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import Stack from '@mui/material/Stack';

export default function Invalid() {

    return (
        <Stack direction="row" justifyContent="center" spacing={2} style={{ background: 'white' }}>
             <Typography
                  variant='h1'
                 style={{fontSize: 40, fontFamily: 'Merriweather', background: 'white', color: 'red' }}
                  align='center'
                  sx={{ fontWeight: 'bold', paddingTop: 4 }}>
                    Invalid 
            </Typography>
            <ClearIcon style={{ fill: 'red', fontSize: 40 }} sx={{ paddingTop: 4}} />
        </Stack>        
    );

}