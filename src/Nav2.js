import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AssessmentIcon from '@mui/icons-material/Assessment';

export default function Nav2() {
    return (
        <div className="nav2">
          <Stack direction="row" spacing={5} justifyContent="flex-end">
          <a href="./Help" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'black' }} style={{ textTransform: 'none' }}>
              <HelpIcon style={{ fill: '#212121' }} />
              Help
            </Button></a>
          <a href="/" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'black' }} style={{ textTransform: 'none' }}>
              <HomeIcon style={{ fill: '212121' }} />
              Home
            </Button></a>
          <a href='/About' style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'black' }} style={{ textTransform: 'none' }}>
              <InfoIcon style={{ fill: '212121' }} />
              About
            </Button></a>
          <a href='/DataEntry' style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'black' }} style={{ textTransform: 'none' }}>
              <AssessmentIcon style={{ fill: '212121' }} />
              Data Entry
            </Button></a>
            </Stack>
        </div>
    );
}

