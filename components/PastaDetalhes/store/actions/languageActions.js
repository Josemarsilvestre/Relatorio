export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguages = languages => dispatch => {
    dispatch({
        type: SET_LANGUAGE,
        payload: languages,
    });
}; 
