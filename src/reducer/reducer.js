import {DECREMENT_VALUE, INCREMENT_VALUE} from "../actions";

let initialState = {
    count: 0,
}

export function counter (state = initialState, action) {
    switch (action.type) {
        case INCREMENT_VALUE:
            return { count: state.count + 1 }
        case DECREMENT_VALUE:
            return { count: state.count - 1 }
        default:
            return state
    }
}