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
                {this.props.event.comment ? <code>Comment: {this.props.event.comment}</code> : false}
            {/*<div className="modal show d-block" tabIndex="-1" role="dialog">*/}
                {/*<div className="modal-dialog" role="document">*/}
                    {/*<div className="modal-content">*/}
                        {/*<div className="modal-header">*/}
                            {/*<h5 className="modal-title">Modal title</h5>*/}
                            {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                                {/*<span aria-hidden="true">&times;</span>*/}
                            {/*</button>*/}
                        {/*</div>*/}
                        {/*<div className="modal-body">*/}
                            {/*<p>Modal body text goes here.</p>*/}
                        {/*</div>*/}
                        {/*<div className="modal-footer">*/}
                            {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
                            {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
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