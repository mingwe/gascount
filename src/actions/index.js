export const select = (event)=> {
    return {
        type: "EVENT_SELECTED",
        payload: event
    }
}

export const add = (event)=> {
    return {
        type: "EVENT_ADD",
        payload: event
    }
}

export const remove = (event)=> {
    return {
        type: "EVENT_REMOVE",
        payload: event
    }
}