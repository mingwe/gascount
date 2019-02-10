export default function (state=null, action) {

    console.log(action);
    switch (action.type) {
        case "EVENT_ADD":

            let newId = (state.length) + 1;
            return [
                ...state,
                {
                    ID: newId,
                    mileage: '400',
                    ltrs: '5',
                    date: '112200',
                    isfull: '0',
                    comment: '444'
                },
            ]

            break;
        default:
            return state;
    }
}