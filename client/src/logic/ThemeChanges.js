import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const ButtonStyleChanger = (button, theme1, theme2) => {
    const selector = useSelector((state) => state.sidebar);
    const [style, setStyle] = useState(theme1);

    useEffect(() => {
        if(selector.active === button) {
            setStyle(theme1);
        } else {
            setStyle(theme2);
        }
    }, [selector]);

    return style;
}

export const SliderStyleChanger = (state, theme1, theme2) => {
    return state ? theme1 : theme2;
}