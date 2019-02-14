export default function (state=null, action) {

    console.log(action);
    switch (action.type) {
        case "EVENT_ADD_SUCCESS":

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

        case "EVENT_ADD_FAIL":
            alert('failed to add event');
            return state;

        case "EVENT_REMOVE":

            let removeID = action.payload;
            return state.filter(mileage => mileage.ID !== removeID);

            break;
        default:
            return state;
    }
}