import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function Progress(props) {
  const {open , onClose} = props  

  return (
    <div>
      <Backdrop
        sx={{ color: '#hhh', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={onClose}
        invisible={true}
      >
        <CircularProgress color="primary"  size={100}
/>
      </Backdrop>
    </div>
  );
}

