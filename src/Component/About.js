import React from "react";
import {ABOUT_US} from "../Constants";


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

        

        return (
            <>
            <div class="font-bold  tracking-wide px-36 ">
                <h1 class="text-3xl pt-6 pb-4">AboutUs</h1>
                <h3 class="text-xl ">Created using Class based components</h3>
            </div>
            <div class="pt-10 pb-28 text-[18px] tracking-wide font-[100] px-36">
                <h1>{ABOUT_US}</h1>                
            </div>

            
            </>
        )
    }
}

export default About;