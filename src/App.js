/*
    Header
        logo
        Nav items(right side)
        cart
    Body
        Restaurant List
            Restaurant Card(many cards)
                Image
                Name
                Rating
                Cusines
    Footer
        Links
        Copyright 
     */


import React, { Children, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Component/Header";
import { Body } from "./Component/Body";
import { Footer } from "./Component/Footer";
import About from "./Component/About";
import Contact from "./Component/Contact";
import ErrorElement from "./Component/ErrorElement";
import RestaurantMenu from "./Component/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./Component/Profile";
import Shimmmer from "./Component/Shimmer";
import Instamart from "./Component/Instamart";
import UserContext from "./utils.js/UserContext";
import { Provider } from "react-redux";
import store from "./utils.js/store";
import Cart from "./Component/Cart";


//const Instamart = lazy(() =>import("./Component/instamart") )

    //Component Composition - calling Func. comp. inside func. comp.
    const AppLayout = () => {

        const [modifiedUser, setModifiedUser] = useState({
            name: "Ramyaa",
            email: "ramyaa123@gmail.com",
        });

        const [modifiedUser2, setModifiedUser2] = useState({
            name: "Ramyaa Dhanasekaran",
            email: "dramyaa307@gmail.com",
        });
        

        return (
            <Provider store ={store}>
            <UserContext.Provider 
                value={{
                    user:modifiedUser,
                }}
            >
            <Header/>
            <Outlet />
            </UserContext.Provider>
            <UserContext.Provider 
                value ={{
                    user:modifiedUser2
                }}
            >
                 <Footer />
            </UserContext.Provider>
           
            
            </Provider>
        )
    }

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            errorElement: <ErrorElement/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>,
                    },
                ], 
            },
            {

                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: 
                //<Suspense fallback = {<Shimmmer/>}>
                    <Instamart/>
                //</Suspense>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
    },
    ]);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    //passing the react element inside root

    root.render(<RouterProvider router={appRouter}/>);