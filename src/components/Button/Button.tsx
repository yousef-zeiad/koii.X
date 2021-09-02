import React from 'react';
import './Button.css';
type ButtonTypeProp = {
    type?: 'primary' | 'danger' | 'default'
    onPress: () => void;
}
/**
 * this only an example fot how to use the storybook
 */
export const Button: React.FC<ButtonTypeProp> = ({ onPress, type, children, ...res }) => {
    return <div onClick={onPress} className={`button ${type}`}{...res} >{children}</div>
}
