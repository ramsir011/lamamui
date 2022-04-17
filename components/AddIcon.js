import { Add } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import React from 'react';

const AddIcon = () => {
  return (
    <Tooltip title="Add" sx={{ position: 'fixed', bottom:30, right: 20 }}>
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>
    </Tooltip>
  );
};

export default AddIcon;
