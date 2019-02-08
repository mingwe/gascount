import React, { Component } from 'react';
import * as axios from "axios";

class Addevent extends Component {

    // postEvent(data) {
    //
    //     let getParams = '?test=true';
    //
    //     axios.get(`//localhost/fuel/setevent.php`+getParams)
    //         .then(res => {
    //             const events = res.data;
    //             this.setState({ events });
    //         })
    // }


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
