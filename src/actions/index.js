import * as axios  from 'axios';
import {thunk} from 'redux-thunk';

const apiUrl = 'http://localhost/fuel';

export const select = (event)=> {
    return {
        type: "EVENT_SELECTED",
        payload: event
    }
}

export const remove = (event)=> {
    return {
        type: "EVENT_REMOVE",
        payload: event
    }
}


export const addEventSuccess = (data) => {
    return {
        type: "EVENT_ADD_SUCCESS",
        payload: data
    }
}

export const loadRemoteMileageSuccess = (data) => {
    return {
        type: "LOAD_REMOTE_SUCCESS",
        payload: data
    }
}

export const addEventFail = (data) => {
    return {
        type: "EVENT_ADD_FAIL",
        payload: data
    }
}

export const add = ( event ) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/setevent.php`, event)
            .then(response => {
                dispatch(addEventSuccess(response.data))
            })
            .catch(error => {
                dispatch(addEventFail(error));
                throw(error);
            });
    };
};

export const loadRemoteMileage = ( ) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/getevent.php`)
            .then(response => {
                dispatch(loadRemoteMileageSuccess(response.data))
            })
            // .catch(error => {
            //     dispatch(loadRemoteMileageFail(error));
            //     throw(error);
            // });
    };
};