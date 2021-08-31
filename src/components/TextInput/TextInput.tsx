import React from 'react';
import './TextInput.css';

type TextInputTypeProp = {
  size?: 'large' | 'medium' | 'small';
  placeholder?: string;
}
export const TextInput: React.FC<TextInputTypeProp> = ({ size, ...res }) => {
  return (
    <input className={`input ${size}`}{...res} />
  )
}
