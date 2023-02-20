import {Outlet} from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";
import React from "react";
import UserContext from "../utils.js/UserContext";


class About extends React.Component{
    constructor(props){
        super(props);
        
        //console.log("Parent - Constructor");
    }

    componentDidMount(){
        
        //console.log("Parent - Component Did Mount");
    }
    render(){
        //console.log("Parent - render");

        <UserContext.Consumer>
            {({user}) => {
                <h1 className="font-bold p-2">{user.name} - {user.email}</h1>
            }}
        </UserContext.Consumer>

        return (
            <div>
            <h1>About Us</h1>
            <p>Get food delivery to your doorstep from thousands of amazing local and national restaurants. Find the meal you crave and order food from restaurants easily</p>
            
            <Profile name={" First Child"}/>
            
            </div>
        )
    }
}

export default About;