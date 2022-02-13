import React from 'react';

import '../styles/paragraph.css';

const Element = ({ icon: Icon, iconStyle }) => {
    if (React.isValidElement(Icon)) {
        return (
            <div className={'element-container'}>
                <div className={'element-icon'}>
                    {(Icon !== undefined) && Icon}
                </div>
                <div className={'element-title'}>
                    <h2>Title</h2>
                </div>
                <div className={'element-text'}>
                    Content
                </div>
            </div>
        );
    } else {
        return (
            <div className={'element-container'}>
                <div className={'element-icon'}>
                    <Icon style={iconStyle} />
                </div>
                <div className={'element-title'}>
                    <h2>Title</h2>
                </div>
                <div className={'element-text'}>
                    Content
                </div>
            </div>
        );
    }
};

export default Element;
