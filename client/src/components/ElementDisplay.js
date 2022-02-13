import React from 'react';
import '../styles/paragraph.css';

const ElementDisplay = (props) => {
    const kids = React.Children.toArray(props.children);

    return (
        <div className={`element-display-container element-display-${kids.length}`}>
            <div className={'element-display'}>
                {props.children}
            </div>
        </div>
    );
};

export default ElementDisplay;
