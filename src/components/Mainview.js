import React, { Component } from 'react';
import {connect} from "react-redux";


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
        if (this.props.mileage.length) {
            return (
                <div>
                    <p className={'h3 my-3'}>Count from: <b>{this.showStartMileage()}</b></p>
                    <p className={'h3 my-3'}>Total mileage: <b>{this.showTotalMileage()}</b></p>
                    <p className={'h3 my-3'}>Total passed: <b>{this.showPassedMileage()}</b></p>
                    <p className={'h3 my-3'}>Total filled: <b>{this.showTotalFilled()}</b></p>
                    <p className={'h2 my-3'}><strong>Total consumption: {this.showConsumption()} / 100</strong></p>
                </div>
            );
        }
        else {
            return <div>no data</div>
        }
    }
}

function mapStateToProps (state) {
    return {
        mileage: state.mileage
    }
}

export default connect(mapStateToProps)(Mainview);