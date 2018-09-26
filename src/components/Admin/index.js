import React, {Component} from 'react';


import NavBar from './NavBar';
import Body from './Body'

class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <NavBar/>
                <Body/>
            </div>
        );
    }
}

export default Admin;