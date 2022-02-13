import React from 'react';
import { useSelector } from 'react-redux';
import { SliderStyleChanger } from '../logic/ThemeChanges';

import '../styles/page.css';

const PageContainer = (props) => {
    const selector = useSelector((state) => state.sidebar);
    return (
        <div className={'page'}>
            <div style={props.style} className={SliderStyleChanger(selector.sliderState, 'page-content-secondary', 'page-content-primary')} >
              {props.children}
            </div>
        </div>
    );
};

export default PageContainer;