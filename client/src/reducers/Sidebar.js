
import {
    HOME_BUTTON,
    LISTS_BUTTON,
    ADD_BUTTON,
    UPDATE_SELECTED_BUTTON, 
    UPDATE_SLIDER_STATE
} from '../constants';

const initState = {
    active: HOME_BUTTON,
    sliderState: false
}

export default (sidebar = initState, action) => {
    switch(action.type) {
        case UPDATE_SELECTED_BUTTON:
            return {
                active: action.payload,
                sliderState: action.payload.hasSlider
            };
        case UPDATE_SLIDER_STATE:
            return {
                active: sidebar.active,
                sliderState: sidebar.active.hasSlider? !sidebar.sliderState : false
            };
        default:
            return sidebar;
    }
}