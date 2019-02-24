import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions';
import Title from '../components/Title';

class EventAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
           form: {},
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
                <Title title={'New event'} />
                <div className={'text-center row'}>
                    <form className={'form-vertical col-xs-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4'} onSubmit={ this.handleSubmit.bind(this) }>
                        <div className="form-group">
                            <label className={'letter-spacing-2 text-uppercase font-weight-light'}>Mileage</label><br/>
                            <input onChange={this.handleChange} type="number" name={'mileage'} id={'mileage'} className={'form-control'} required/>
                        </div>
                        <div className="form-group">
                            <label className={'letter-spacing-2 text-uppercase font-weight-light'}>Date
                            </label><br/>
                            <input onChange={this.handleChange} type="date" name={'date'} id={'date'} className={'form-control'} required/>
                        </div>
                        <div className="form-group">
                            <label className={'letter-spacing-2 text-uppercase font-weight-light'}>Volume</label><br/>
                            <input onChange={this.handleChange} type="number" name={'volume'} id={'volume'} className={'form-control'} required/>
                        </div>
                        {/*<div className="form-group">*/}
                        {/*<label>Is full?</label><br/>*/}
                        {/*<input onChange={this.handleChange} type="checkbox" name={'isfull'} id={'isfull'} className={'form-control'} defaultChecked={'true'}/>*/}
                        {/*</div>*/}
                        <hr className={'mt-4 mb-4'}/>
                        <div className="form-group">
                            <input type="submit" className={'btn btn-secondary btn-block'}/>
                        </div>
                    </form>
                </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(EventAddForm);