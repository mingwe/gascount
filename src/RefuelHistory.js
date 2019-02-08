import React, { Component } from 'react';

class RefuelHistory extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>mileage</th>
                            <th>liters</th>
                            <th>is full</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.events.map(event =>
                        <tr key={event.ID}>
                            <td>{event.ID}</td>
                            <td>{event.mileage}</td>
                            <td>{event.ltrs}</td>
                            <td>{event.isfull}</td>
                            <td>{event.date}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RefuelHistory;
