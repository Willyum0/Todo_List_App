import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_BUTTON, LISTS_BUTTON, ADD_BUTTON } from '../constants';
import { setButton, setSlider } from '../actions/Sidebar';
import { ButtonStyleChanger, SliderStyleChanger } from '../logic/ThemeChanges';

import '../styles/sidebar.css';

export const Sidebar = () => {
    const selector = useSelector((state) => state.sidebar);
    return (
    <>
        <div className={'sidebar'} >
            <SidebarButtons />
        </div>
        <SidebarSlider visible={selector.sliderState} links={selector.active.sliderContent} dpStyle={selector.active.sliderContentStyle} />
    </>
    );
};

const SidebarSlider = ({visible, links, dpStyle}) => {
    return (
        <div className={SliderStyleChanger(visible, 'sidebar-slider-visible', 'sidebar-slider-hidden')} >
            <div className={`sidebar-slider-content sidebar-slider-content-${dpStyle}`}>
                <ul>
                    {links.map((link, index) => (
                        <Link key={index} to={link.link}><li>{link.title}</li></Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const SidebarButtons = () => {
    const selector = useSelector((state) => state.sidebar);
    const dispatch = useDispatch();

    function selectButton(button) {
        if(selector.active === button) {
            dispatch(setSlider(button));
        } else {
            dispatch(setButton(button));
        }
    }

    return (
        <div className={'sidebar-buttons-container'}>
            <SidebarButton 
                icon={
                    <HomeIcon style={{fill: 'rgb(90, 16, 124)', fontSize: '40px'}} 
                />}
                text={'Home'}
                button={HOME_BUTTON}
                color={'rgb(90, 16, 124)'}
                onClick={() => selectButton(HOME_BUTTON)}
            />
            <SidebarButton 
                icon={
                    <FormatListBulletedIcon style={{fill: 'rgb(202, 98, 61)', fontSize: '40px'}} />
                }
                text={'Lists'}
                button={LISTS_BUTTON}
                color={'rgb(202, 98, 61)'}
                onClick={() => selectButton(LISTS_BUTTON)}
            />
            <SidebarButton 
                icon={
                    <AddIcon style={{fill: 'rgb(53, 184, 85)', fontSize: '40px'}}/>
                }
                text={'Add'}
                button={ADD_BUTTON}
                color={'rgb(53, 184, 85)'}
                onClick={() => selectButton(ADD_BUTTON)}
            />
        </div>
    );
}
const SidebarButton = ({icon, text, button, color, onClick}) => {
    return (
        <div className={'sidebar-button'} onClick={onClick} style={{ backgroundColor: ButtonStyleChanger(button, 'rgb(20, 20, 32)', 'rgb(6, 7, 12)')}}>
            <div className={'sidebar-button-icon'}>
                {icon}
            </div>
            <div className={'sidebar-button-text'}>
                {text}
            </div>
            <div className={
                    ButtonStyleChanger(button, 'sidebar-button-glow-visible', 'sidebar-button-glow-hidden')
                }
                style={{ backgroundColor: color }}
            ></div>
        </div>
    );
}
