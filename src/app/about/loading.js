import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    {console.log("test")}
    return ( 
  
    <Box sx={{ display: 'flex' , zIndex:99}}>
    <CircularProgress />
  </Box>)
  }