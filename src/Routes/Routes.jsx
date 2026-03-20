import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Components/AppDetails/AppDetails";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([

    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [{
            index: true,
            loader: () => fetch("AppData.json"),
            path: "/",
            Component: Home,
        },
        {
            index: true,
            loader: () => fetch("AppData.json"),
            path: "/all-app",
            Component: AllApps,
        },
        {
            index: true,
            loader: () => fetch("AppData.json"),
            path: "details/:id",
            Component: AppDetails,
        },
        {
            index: true,
            loader: () => fetch("AppData.json"),
            path: "Installation",
            Component: Installation,
        }
        ]
    },
]);