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
import { Header } from "./Component/HeaderF";
import { Body } from "./Component/Body";
import { Footer } from "./Component/Footer";
import About from "./Component/About";
import ErrorElement from "./Component/ErrorElement";
import RestaurantPage from "./Component/RestaurantPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import Instamart from "./Component/Instamart";
import { Provider } from "react-redux";
import store from "./utils.js/store";
import Cart from "./Component/Cart1";
import { UserContext } from "./utils.js/UserContext";
import Shimmmer from "./Component/Shimmer";
import ThankyouPage from "./Component/ThankyouPage";

const Instamart = lazy(() => import("./Component/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ramyaa",
    email: "ramyaa123@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmmer />}>
            <Instamart />
          </Suspense>
        ),
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/thank-you",
        element: <ThankyouPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing the react element inside root

root.render(<RouterProvider router={appRouter} />);
