import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions';
import {remove} from '../actions';

class EventsList extends Component {
    showList () {

        return this.props.mileage.map( (event) => {
            return (
                <tr key={event.ID}>
                    <td>{event.ID}</td>
                    <td>{event.mileage}</td>
                    <td>{event.ltrs}</td>
                    <td>{event.date}</td>
                    <td><button onClick={() => this.props.select (event)}>details</button></td>
                    <td><button onClick={() => this.props.remove (event.ID)}>remove</button></td>
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
                        <th>date</th>
                        <th>details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.mileage ? this.showList() : ''}
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
        select: select,
        remove: remove
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EventsList);