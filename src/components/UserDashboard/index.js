import React, {Component} from 'react';

import NavBar from './NavBar';
import Body from './Body';

class Root extends Component{

    state = {
        user: {
            username: "Shad"
        }
    };

    render(){
        const {username} = this.state.user;
        return (
            <div>
                <NavBar username={username}/>
                <Body/>
            </div>
        );
    }
}

export default Root;