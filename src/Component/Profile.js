import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    //const [count2, setCount2] = useState(0);
    /*useEffect(() => {
        console.log("useEffect");
    });

    console.log("render");*/

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer");
        }, 1000)

        return () => {
            clearInterval(timer);
            console.log("clear Interval");
        }
    })

    return (
        <div>
            <h1>Profile Functional Component</h1>
            <h2>Name : {props.name}</h2>
            <h3>Count :{count}</h3>
            <button onClick={() => 
            {setCount(1);
            //setCount2(1);
            }
            }>SetCount</button>
        </div>
    )
}

export default Profile;