import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions';

class Addevent extends Component {

    constructor(props) {
        super(props);
        this.state = {
           form: {}
        };
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState( prevState => ({
            form: {
                ...prevState.form,
                [name]: value,
            }
        }));
    };
    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        this.props.add(this.state.form);
    }

    render() {
        return (
            <div>
                <form className={'form-vertical'} onSubmit={ this.handleSubmit.bind(this) }>
                    <h3>new event</h3>
                    <p>
                        <label>Mileage</label><br/>
                        <input onChange={this.handleChange} type="number" name={'mileage'} id={'mileage'} className={'form-control'} required/>
                    </p>
                    <p>
                        <label>Date
                        </label><br/>
                        <input onChange={this.handleChange} type="date" name={'date'} id={'date'} className={'form-control'} required/>
                    </p>
                    <p>
                        <label>Volume</label><br/>
                        <input onChange={this.handleChange} type="number" name={'volume'} id={'volume'} className={'form-control'} required/>
                    </p>
                    <p>
                        <label>Is full?</label><br/>
                        <input onChange={this.handleChange} type="checkbox" name={'isfull'} id={'isfull'} className={'form-control'} checked='1'/>
                    </p>
                     <p><input type="submit" className={'btn btn-primary'}/></p>
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