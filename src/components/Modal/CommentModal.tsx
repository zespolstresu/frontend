import { Modal as MuiModal, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ITextModalProps } from './Modal.types';
import { Container, EditIcon, ModalWrapper } from './Modal.styles';
import { Textarea, Button, PublishIcon } from '../PostEditor/PostEditor.styles';
import { updateComment } from '../../api/Comment.api';

export default function TextModal(props: ITextModalProps) {
  const { title, data, postId: commentId } = props;
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(data);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = async () => {
    await updateComment({ content, id: commentId });
    handleClose();
    document.location.reload();
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <Container>
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
        <ModalWrapper>
          <Typography variant='h3' id="modal-title" sx={(theme) => ({ marginBottom: theme.spacing(2), fontWeight: 700, color: theme.palette.text.dark })}>{title}</Typography>
          <Textarea
            sx={{ paddingBottom: '40px' }}
            spellCheck='false'
            name='content'
            value={content}
            onChange={handleContentChange}
          />
          <Button
            sx={{ position: 'absolute', bottom: -50, left: 0, fontSize: 16 }}
            onClick={handleClick}
            form='postForm'
            type='submit'
            variant='text'
            color='primary'
            endIcon={<PublishIcon />}>
            Zatwierdź
          </Button>
        </ModalWrapper>
      </MuiModal>
    </Container >
  );
}