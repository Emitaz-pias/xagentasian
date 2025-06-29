import {React,useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
// import { AppContext } from '../../AppContext';
import SubmitForm from '../submitForm/SubmitForm'
import Grid from '@mui/material/Grid2';


const style = {
  backgroundColor: 'transparent', // Background of the modal
  width: { xs: '100vw', sm: '100vw', md: '60vw' }, // Full width on mobile, 60vw on desktop
  height: { xs: '70vh', sm: '100vh', md: '80vh' }, // Full height on mobile, 80vh on desktop
  position: 'absolute', // Ensure absolute positioning
  top:{md:'60%',xs:'60%',sm:'60%'}, // Center vertically
  left:{md:'60%',xs:'50%',sm:'60%'}, // Center horizontally
  transform: 'translate(-50%, -50%)', // Offset by half width/height to truly center
  outline: 'none',
   // Remove default modal outline
  
};

export default function BasicModal({ open, handleClose }) {
//   const { success } = React.useContext(AppContext);
const [success,setSuccess] = useState(false)
  return (

      <Modal  open={open} onClose={handleClose}>
      <Grid container>
      <Grid>
        <Box sx={style}>
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
          {success ? (
         <Box sx={{margin:{xs:'0em 0.2em'}}}>
             <Box sx={{width:{xs:'85vw'}}}>
              <h2>Thanks</h2>
              <p>modal para</p>
            </Box>
         </Box>
          ) : (                        
                <SubmitForm handleClose={handleClose} />                     
          )}
          </Box>
         
        </Box>
        </Grid>
        </Grid>
      </Modal>

  );
}