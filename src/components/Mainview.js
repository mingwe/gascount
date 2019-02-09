import React, { Component } from 'react';
import * as axios  from 'axios';
import RefuelHistory from "./RefuelHistory";


// export class EventsList extends Component {

    // displayName: 'List of events';


    // render() {
    //     return (
    //         {/*<div>*/}
                {/*<RefuelHistory events={this.state.events}/>*/}
            // </div>
        // )
    // }
// }


class Mainview extends Component {
    render() {
        return (
            <div>
                <p>Count from: 432000</p>
                <p>Total passed: 12345</p>
                <p>Total filled: 321</p>
                {/*<EventsList/>*/}
            </div>
        );
    }
}

export default Mainview;
