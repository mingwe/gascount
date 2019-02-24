import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className={'col-12'}>
                <div className={'row mx-n5'}>
                    <h1 className={'mx-3 w-100 h2 bg-dark-custom text-light py-3 font-weight-light mt-0 mb-5 letter-spacing-2 text-uppercase'}>{this.props.title}</h1>
                </div>
            </div>)
    }
}

export default Title;