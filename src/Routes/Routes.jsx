import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Components/AppDetails/AppDetails";
import Installation from "../Pages/Installation/Installation";
import { appDataLoader } from "../Pages/AppDataLoader/AppDataLoader";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        // This is still here for catastrophic errors
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: appDataLoader,
                Component: Home,
            },
            {
                path: "/all-app",
                loader: appDataLoader,
                Component: AllApps,
            },
            {
                path: "/details/:id", // Standardized path
                loader: appDataLoader,
                Component: AppDetails,
            },
            {
                path: "/installation",
                Component: Installation,
            },
            // 2. Add a Wildcard route inside children to catch 404s 
            // while staying inside the Root (Header/Footer) layout
            {
                path: "*",
                Component: ErrorPage,
            }
        ],
    },
]);