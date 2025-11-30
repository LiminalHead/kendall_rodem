import React from 'react';

type ButtonProps = {
    label: string | React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className, disabled }) => (
    <button className={`pane__button ${className}`} onClick={onClick} disabled={disabled}>
        {typeof label === 'string' ? label : label}
    </button>
);

export default Button;