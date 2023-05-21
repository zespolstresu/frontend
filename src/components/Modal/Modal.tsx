import { Button, Box, Modal as MuiModal } from '@mui/material';
import React, { useState } from 'react';
import {IModalProps} from './Modal.types';

export default function Modal(props: IModalProps) {
  const {actionFunction, title, description, buttonText} = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    handleClose();
    actionFunction();
  };

  return (
    <Box>
      <Button onClick={handleOpen} variant='contained' color='secondary'>{buttonText}</Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box>
          <h2 id="modal-title">{title}</h2>
          <p id="modal-description">
            {description}
          </p>
          <Button onClick={handleClick}>Potwierdź</Button>
        </Box>
      </MuiModal>
    </Box>
  );
}