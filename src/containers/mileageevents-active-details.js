import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render () {
        if (!this.props.event) {
            return ('')
        }
        return (
            <div>
                <h2>Fuel event details:</h2>
                <h3>Date: {this.props.event.date}</h3><br/>
                <h3>Liters filled: {this.props.event.ltrs}</h3><br/>
                <h3>Moment mileage: {this.props.event.mileage}</h3><br/>
                {this.props.event.comment ? <blockqoute>Comment: {this.props.event.comment}</blockqoute> : false}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        event: state.active
    }
}

export default connect (mapStateToProps)(Details);