import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions';
import {remove} from '../actions';
import Title from '../components/Title';

class EventsList extends Component {

    timeFormat (unix_tm) {
        var dt = new Date(unix_tm*1000);
        return (dt.getDate() + '/' + (dt.getMonth() +1) + '/' + dt.getFullYear());
    }


    compareDate (eventA, eventB) {
        return eventA.date - eventB.date;
    }


    showList () {

        return this.props.mileage.sort(this.compareDate).map( (event) => {
            return (
                    <tr key={event.ID} className={'cursor-pointer'}>
                        {/*<tr key={event.ID} onClick={() => this.props.select (event)} className={'cursor-pointer'}>*/}
                        <td>{event.ID}</td>
                        <td>{event.mileage}</td>
                        <td>{event.ltrs}</td>
                        <td>{this.timeFormat(event.date)}</td>
                        {/*<td><button className={'btn btn-primary1'} onClick={() => this.props.select (event)}>details</button></td>*/}
                        <td><button className={'btn btn-outline-danger btn-sm'} onClick={() => this.props.remove (event.ID)}>Remove</button></td>
                    </tr>
            )
        })
    }
    render () {
        return (
            <div>
                <Title title={'Events history'} />
                <table className={'w-100 table-bordered1 table table-striped table-hover'}>
                    <thead className={'thead-dark'}>
                        <tr>
                            <th className={'font-weight-normal'}>id</th>
                            <th className={'font-weight-normal'}>mileage</th>
                            <th className={'font-weight-normal'}>liters</th>
                            <th className={'font-weight-normal'}>date</th>
                            <th className={'font-weight-normal'} colSpan={'2'}>actions</th>
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