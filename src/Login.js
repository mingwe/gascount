import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div>
                <form action={'login'} className={'form-vertical'}>
                    <h3>log in</h3>
                    <p>
                        <label>login</label><br/>
                        <input type="text" id={'login'} className={'form-control'} required/>
                    </p>
                    <p>
                        <label>pass</label><br/>
                        <input type="password" id={'pass'} className={'form-control'} required/>
                    </p>
                    <p><input type="submit" className={'btn btn-primary'}/></p>
                </form>
            </div>
        );
    }
}

export default Login;
