import { useContext } from "react";
import UserContext from "../utils.js/UserContext";

export const Footer = () => {

    const {user} = useContext(UserContext);
    return (
        <h1 className="p-5 m-0">This site is developed by {user.name} - {user.email}</h1>
    );
};