import {FETCH_LOCATIONS} from './../actions/types';

const initialState = {
  locations: {}
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return {
                ...state,
                locations: action.payload.locations
            };
        default:
            return state;
    }
}