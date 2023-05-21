import { Box, Modal as MuiModal, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { ITextModalProps } from './Modal.types';
import { EditIcon, TextModalWrapper } from './Modal.styles';
import { updatePost } from '../../api/Post.api';
import { Textarea, Button, PublishIcon } from '../PostEditor/PostEditor.styles';

export default function TextModal(props: ITextModalProps) {
  const { title, data, postId } = props;
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
    const res = await updatePost({ content, id: postId });
    handleClose();
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
        <TextModalWrapper>
          <h2 id="modal-title">{title}</h2>
          <Textarea
            spellCheck='false'
            name='content'
            onChange={handleContentChange}
          />
          <Button
            onClick={handleClick}
            form='postForm'
            type='submit'
            variant='text'
            color='primary'
            endIcon={<PublishIcon />}>
            Zatwierdź
          </Button>
        </TextModalWrapper>
      </MuiModal>
    </Box>
  );
}