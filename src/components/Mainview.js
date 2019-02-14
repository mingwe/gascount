import React, { Component } from 'react';
import * as axios  from 'axios';
import {connect} from "react-redux";


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

    showTotalMileage() {
        return this.props.mileage[this.props.mileage.length - 1].mileage
    }

    showStartMileage() {
        return this.props.mileage[0].mileage
    }

    showPassedMileage() {
        return this.showTotalMileage() - this.showStartMileage();
    }

    showTotalFilled() {
        let liters = 0;

        this.props.mileage.map( (event) => {
            liters += +event.ltrs
        })

        return liters
    }

    showConsumption() {
        return (+this.showTotalFilled() / +this.showPassedMileage() * 100).toFixed(2);
    }



    render() {
        return (
            <div>
                <p><small>Count from: {this.showStartMileage()}</small></p>
                <p><small>Total mileage: {this.showTotalMileage()}</small></p>
                <p>Total passed: {this.showPassedMileage()}</p>
                <p>Total filled: {this.showTotalFilled()}</p>
                <p><strong>Total consumption: {this.showConsumption()} / 100</strong></p>
                {/*<EventsList/>*/}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        mileage: state.mileage
    }
}

// export default Mainview;

export default connect(mapStateToProps)(Mainview);