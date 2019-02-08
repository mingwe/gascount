import React, { Component } from 'react';

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
                    <p><input type="submit" className={'btn btn-primary'}/></p>
                </form>
            </div>
        );
    }
}

export default Addevent;
