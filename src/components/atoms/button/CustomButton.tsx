import React from 'react';
import ButtonStyles from './ButtonStyles';
import {Button} from '@mui/material'
import { ButtonProps } from '@mui/material';

const CustomButton = (p:ButtonProps) => {
  const classes = ButtonStyles();
  return (
    <div className={classes.button}>
      <Button
        className={p.className}
        variant={p.variant}
        style={p.style}
        disabled={p.disabled}
        onClick={p.onClick}
      >
        {p?.name}
      </Button>
    </div>
  );
};

export default CustomButton;