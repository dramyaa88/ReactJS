import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dunmmy location", 
            }
        }
        console.log("Child - Constructor" + this.props.name);
    }

    /*async componentDidMount(){
        const data = await fetch ("https://api.github.com/users/dramyaa88");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
        console.log("Child - Component Did Mount"+ this.props.name);
    }*/

    /*componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Timer");
        }, 1000);
    }*/

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component will unmount");
    }

    componentDidUpdate(){
        console.log("ComponentDid Update");
    }

    render(){
        console.log("Child - render"+ this.props.name);
        const {count, count2} = this.state;
        return(
            <div>
                
            <h1>Profile Class Component</h1>
            <img src = {this.state.userInfo.avatar_url}/>
            <h2>Name : {this.state.userInfo.name}</h2>
            <h2>Location : {this.state.userInfo.location}</h2>
            
            </div>
        )
    }
}

export default Profile;