import { Box, Modal as MuiModal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { IModalProps } from './Modal.types';
import { ModalWrapper } from './Modal.styles';
import { Button } from '../PostEditor/PostEditor.styles';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

export default function Modal(props: IModalProps) {
  const { actionFunction, title, description, buttonText } = props;
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
      <Button onClick={handleOpen} variant='text' color='warning'>{buttonText}</Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalWrapper>
          <Typography variant='h2' id="modal-title" sx={(theme) => ({ color: theme.palette.text.dark, fontWeight: 500 })}>{title}</Typography>
          <Typography variant='body1' id="modal-description">
            {description}
          </Typography>
          <Button
            sx={{ position: 'absolute', bottom: -70, left: '50%', transform: 'translateX(-50%)', fontSize: 16 }}
            onClick={handleClick}
            form='postForm'
            type='submit'
            variant='text'
            color='warning'
            endIcon={<DeleteIcon color='warning' sx={{ width: 30, height: 30 }} />}>
            Zatwierdź
          </Button>
        </ModalWrapper>
      </MuiModal>
    </Box >
  );
}