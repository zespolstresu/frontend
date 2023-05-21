import { Button, Box, Modal as MuiModal, TextField, IconButton } from '@mui/material';
import React, { useState } from 'react';
import {  ITextModalProps } from './Modal.types';
import { EditIcon } from './Modal.styles';
import { updatePost } from '../../api/Post.api';

export default function TextModal(props: ITextModalProps) {
  const { title, data } = props;
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(data);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = async () => {
    // actionFunction(content);
    const res = await updatePost(content);
    handleClose();
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  return (
    <Box>
      <IconButton
        type='submit'
        onClick={handleOpen}
        color='third'>
        <EditIcon />
      </IconButton>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
      >
        <Box>
          <h2 id="modal-title">{title}</h2>
          <TextField
            id=""
            label=""
            value={content}
            onChange={handleContentChange}
            required
            fullWidth
          />
          <Button onClick={handleClick}>Potwierdź</Button>
        </Box>
      </MuiModal>
    </Box>
  );
}