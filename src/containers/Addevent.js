import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions';

class Addevent extends Component {

    render() {
        return (
            <div>
                <form action={''} className={'form-vertical'}>
                    <h3>new event</h3>
                    <p>
                        <label>millage</label><br/>
                        <input type="number" id={'millage'} className={'form-control'} required/>
                    </p>
                    <p>
                        <label>date</label><br/>
                        <input type="date" id={'eventdate'} className={'form-control'} required/>
                    </p>
                    <p>
                        <label>ltrs</label><br/>
                        <input type="number" id={'liters'} className={'form-control'} required/>
                    </p>
                    <p><input onClick={ () => this.props.add('777')} type="submit" className={'btn btn-primary'}/></p>
                </form>
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
        add: add
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Addevent);