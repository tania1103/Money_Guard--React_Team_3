import React from 'react';
import { Modal, Box, Typography, Avatar } from '@mui/material';
import s from './CollaboratorsModal.module.css';

const collaborators = [
  { name: 'Alexandra Moldovan', pic: 'path/to/alexandra-pic.jpg' },
  { name: 'John Doe', pic: 'path/to/john-pic.jpg' },
  { name: 'Jane Smith', pic: 'path/to/jane-pic.jpg' },
];

const CollaboratorsModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="collaborators-modal">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 400,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Collaborators
        </Typography>
        <div className={s.collaboratorsList}>
          {collaborators.map((collaborator, index) => (
            <div key={index} className={s.collaborator}>
              <Avatar
                src={collaborator.pic}
                alt={collaborator.name}
                sx={{ width: 50, height: 50, mr: 2 }}
              />
              <Typography>{collaborator.name}</Typography>
            </div>
          ))}
        </div>
      </Box>
    </Modal>
  );
};

export default CollaboratorsModal;
