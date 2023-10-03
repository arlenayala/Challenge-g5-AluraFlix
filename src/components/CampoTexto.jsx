import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const Input = styled.div`
margin-bottom: 50px;
  
`;

const TextInput = ({ label, value, onChange,helperText,error,onBlur}) => {
  return (
    <Input>
      <TextField
        label={label}  
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        helperText={helperText}
        error={error}
        onBlur={onBlur}
      />
    </Input>
  );
};

export default TextInput;








