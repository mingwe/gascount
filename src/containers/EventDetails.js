import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
    render () {
        if (!this.props.event) {
            return ('')
        }
        return (
            <div>
                <h3>Fuel event details:</h3>
                <h4>Date: {this.props.event.date}</h4>
                <h4>Liters filled: {this.props.event.ltrs}</h4>
                <h4>Moment mileage: {this.props.event.mileage}</h4>
                <h4>{this.props.event.isfull ? 'Full tank' : 'Not full'}</h4>
                {/*{this.props.event.comment ? <code>Comment: {this.props.event.comment}</code> : false}*/}
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