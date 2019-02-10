export default function (state=null, action) {
    switch (action.type) {
        case "EVENT_ADD":

            let newId = (state.length) + 1;
            console.log(newId);
            console.log(newId);
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
            return [
                {
                    ID: '1',
                    mileage: '100',
                    ltrs: '5',
                    date: '112200',
                    isfull: '0',
                    comment: '444'
                },
                {
                    ID: '2',
                    mileage: '200',
                    ltrs: '4',
                    date: '112210',
                    isfull: '0',
                    comment: '444'
                },
                {
                    ID: '3',
                    mileage: '350',
                    ltrs: '6',
                    date: '112230',
                    isfull: '0',
                    comment: '444'
                },
                {
                    ID: '4',
                    mileage: '750',
                    ltrs: '15',
                    date: '113310',
                    isfull: '1',
                    comment: '444'
                }
            ]
    }
}