import React from 'react';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';



export default function AppBodyPlus() {
    return (

        <Typography
        variant='body1'
        style={{fontSize: 17, fontFamily: 'Merriweather'}}
        align='left'>
            <Stack
            direction='column'
            spacing={2}>
                <div>
                    <PrivacyTipIcon /> 
                    Please do not share your SSN with anyone other than yourself
                </div>

                <div>
                    <CheckIcon /> 
                    Government sanctioned for your security
                </div>
            </Stack>
        </Typography>

    );
}