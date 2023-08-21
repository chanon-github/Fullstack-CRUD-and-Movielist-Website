import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarAlert(props) {
  const {openModal,handleCloseModal,modalMessage,alertSeverity } = props

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openModal} autoHideDuration={2000} onClose={handleCloseModal}    anchorOrigin={{ vertical:'top', horizontal:'center' }}>
        <Alert onClose={handleCloseModal} severity={alertSeverity} sx={{ width: '300px'  }}>
          {modalMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}