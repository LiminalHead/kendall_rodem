import React from 'react';
import Button from './Button';

interface PaneProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    style?: React.CSSProperties;
}

const Pane: React.FC<PaneProps> = ({ children, className, style, title }) => {
    return (
        <div className={`pane ${className}`} style={style}>
            <div className='pane__content'>
                <div className="pane__header">
                    <Button label="-" />
                    <span className='pane__title'>{title}</span>
                    <Button label="X" />
                </div>
                <div className="pane__body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Pane;