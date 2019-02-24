import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadRemoteMileage} from '../actions';

class LoadRemote extends Component {


    componentWillMount() {
        this.props.loadRemoteMileage();
    }

    loadRemoteFunc() {
        this.props.loadRemoteMileage();
    }

    render() {
        return (
            <div>
                <button className={'btn btn-dark'} onClick={this.loadRemoteFunc.bind(this)}>Update from db</button>
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
        loadRemoteMileage: loadRemoteMileage
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoadRemote);