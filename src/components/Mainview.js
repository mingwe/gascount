import React, { Component } from 'react';
import {connect} from "react-redux";
import Title from '../components/Title';


class Mainview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            units: 'miles',
            multiplier: '1',
        };
    }

    showTotalMileage() {
        return ((this.props.mileage[this.props.mileage.length - 1].mileage) * this.state.multiplier).toFixed(0)
    }

    showStartMileage() {
        return ((this.props.mileage[0].mileage) * this.state.multiplier).toFixed(0)
    }

    showPassedMileage() {
        return (this.showTotalMileage() - this.showStartMileage())
    }

    showTotalFilled() {
        let liters = 0;

        this.props.mileage.map( (event) => {
            liters += +event.ltrs
        })
        liters = liters  - this.props.mileage[0].ltrs //removing first fill as start point

        return liters
    }


    showConsumption() {
        return (+this.showTotalFilled() / +this.showPassedMileage() * 100).toFixed(2);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.units != this.state.units) {
            if (nextState.units == 'km') {
                this.setState((state, props) => {
                    return {
                        multiplier: '1.6'
                    }
                })
            } else {
                this.setState((state, props) => {
                    return {
                        multiplier: '1'
                    }
                })
            }
        }
    }



    render() {
        if (this.props.mileage.length) {
            return (
                <div>
                    <Title title={'Total'} />
                    <div className={'col-xs-12 col-md-6 offset-md-3'}>
                        <div className={'bg-dark text-light py-3 rounded border-0 text-uppercase'}>
                            <div className="form-check form-check-inline">
                                <input className={'form-check-input'} type="radio" value="miles" name="unitmiles" checked={this.state.units === 'miles'} onChange={(e) => this.setState({ units: e.target.value })} />
                                <label className="form-check-label" htmlFor="unitmiles">Miles</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className={'form-check-input'} type="radio" value="km" name="unit" checked={this.state.units === 'km'} onChange={(e) => this.setState({ units: e.target.value })} />
                                <label className="form-check-label" htmlFor="unitmiles">Kilometers</label>
                            </div>
                        </div>
                        <p className={'test-grey my-3 mt-5'}>Passed <b>{this.showPassedMileage()}</b> from <b>{this.showStartMileage()} <span className={'small'}>{this.state.units}</span></b></p>
                        <p className={'my-3'}>Total mileage: <b>{this.showTotalMileage()} <span className={'small'}>{this.state.units}</span></b></p>
                        <p className={'my-3'}>Total filled <b>{this.showTotalFilled()} <span className={'small'}>liters of gas</span></b></p>
                        <hr/>
                        <p className={'h3 my-3'}><strong>Consumption:<br/> <span className={'text-info'}>{this.showConsumption()}</span> liters / <span className={'text-info'}>100</span> <span className={'small'}>{this.state.units}</span></strong></p>
                        <hr/>
                    </div>
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