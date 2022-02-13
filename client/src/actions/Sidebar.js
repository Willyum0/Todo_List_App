import { UPDATE_SELECTED_BUTTON, UPDATE_SLIDER_STATE } from '../constants';

export const setButton = (button) => (dispatch) => {
    dispatch({ type: UPDATE_SELECTED_BUTTON, payload: button });
}
export const setSlider = (button) => (dispatch) => {
    dispatch({ type: UPDATE_SLIDER_STATE, payload: button });
}