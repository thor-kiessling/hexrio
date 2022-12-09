import './App.css';
import React from 'react';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';

export default function Match() {

    return (
        <Stack direction="row" justifyContent="center" spacing={2} style={{ background: 'white' }}>
             <Typography
                  variant='h1'
                 style={{fontSize: 40, fontFamily: 'Merriweather', background: 'white', color: '#00FF80' }}
                  align='center'
                  sx={{ fontWeight: 'bold', paddingTop: 4 }}>
                    Match 
            </Typography>
            <CheckIcon style={{ fill: '#00FF80', fontSize: 40 }} sx={{ paddingTop: 4}} />
        </Stack>        
    );

}