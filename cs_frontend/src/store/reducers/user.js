import * as actions from '../actions';

const initState = {
    email: undefined,
    auth_token: undefined
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            console.log(action.payload);
            return {
                email: action.payload.email,
                auth_token: action.payload.auth_token
            };
        case actions.LOGOUT:
            return {
                email: undefined,
                auth_token: undefined
            }
        default:
            return state;
    };
}

export default reducer;