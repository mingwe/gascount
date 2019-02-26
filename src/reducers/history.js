import {LOAD_REMOTE_SUCCESS, EVENT_ADD_SUCCESS, EVENT_ADD_FAIL, EVENT_REMOVE, EVENT_REMOVE_SUCCESS, EVENT_REMOVE_FAIL} from '../constants/index';

export default function (state=null, action) {

    console.log(action);
    switch (action.type) {
        case LOAD_REMOTE_SUCCESS:

            return action.payload
            break;

        case EVENT_ADD_SUCCESS:

            let newID = (state.length) + 1;
            return [
                ...state,
                {
                    ID: newID,
                    mileage: action.payload.mileage,
                    ltrs: action.payload.volume,
                    date: action.payload.date,
                    isfull: '0',
                    comment: '444'
                },
            ]

            break;

        case EVENT_ADD_FAIL:
            alert('failed to add event');
            return state;

        case EVENT_REMOVE_FAIL:
            alert('failed to remove event');
            return state;

        case EVENT_REMOVE_SUCCESS:

            let removeID = action.payload;
            return state.filter(mileage => mileage.ID !== removeID);

            break;
        default:
            return state;
    }
}