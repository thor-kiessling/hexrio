import React from 'react';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';


export default function AppFooter() {
    return (
        <Typography
        variant='h1'
        style={{fontSize: 27, fontFamily: 'Merriweather'}}
        align='left'>
            <Box
            sx={{paddingLeft: 4, paddingTop: 3}}>
                    
                    <HelpIcon
                    style={{fontSize:'40'}} 
                    />
                    &nbsp;&nbsp;&nbsp;
                    Why do I have to enter my SSN?
            </Box>

            <Box
                style={{fontSize: 17}}
                align='left'
                width='75%'
                sx={{paddingLeft: 12, paddingTop: 5}}>   
                    This search service allows you to retrieve crucial information that would verify your identity. This works in
                    collaboration with databases from the Deparment of Motor Vehicles, the Social Security Department, and the Department of State.
            </Box>
        </Typography>

    );
}