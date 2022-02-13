export const SLIDER_HOME_HOME = { title: 'Home', link: '/', dpColor: 'rgb(114, 22, 156)' };
export const SLIDER_HOME_ABOUT = { title: 'About', link: '/about', dpColor: 'rgb(114, 22, 156)' };
export const SLIDER_LISTS_LISTS = { title: 'Lists', link: '/lists', dpColor: 'rgb(202, 98, 61)' };
export const SLIDER_LISTS_LIST = { title: 'List', link: '/list/#id', dpColor: 'rgb(202, 98, 61)' };

export const HOME_BUTTON = {
    title: 'HOME_BUTTON',
    hasSlider: true,
    sliderContentStyle: 1,
    sliderContent: [
        SLIDER_HOME_HOME,
        SLIDER_HOME_ABOUT
    ]
};
export const LISTS_BUTTON = {
    title: 'LISTS_BUTTON',
    hasSlider: true,
    sliderContentStyle: 2,
    sliderContent: [
        SLIDER_LISTS_LISTS,
        SLIDER_LISTS_LIST
    ]
};
export const ADD_BUTTON = {
    title: 'ADD_BUTTON',
    hasSlider: false,
    sliderContentStyle: 3,
    sliderContent: []
};

export const UPDATE_SELECTED_BUTTON = 'UPDATE_SELECTED_BUTTON';
export const UPDATE_SLIDER_STATE = 'UPDATE_SLIDER_STATE';