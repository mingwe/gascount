import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions';

class EventsList extends Component {
    showList () {

        return this.props.mileage.map( (event) => {
            return (
                <tr key={event.ID} onClick={() => this.props.select (event)}>
                    <td>{event.ID}</td>
                    <td>{event.mileage}</td>
                    <td>{event.ltrs}</td>
                    <td>{event.isfull}</td>
                    <td>{event.date}</td>
                </tr>
            )
        })
    }
    render () {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>mileage</th>
                        <th>liters</th>
                        <th>is full</th>
                        <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        mileage: state.mileage
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        select: select
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventsList);