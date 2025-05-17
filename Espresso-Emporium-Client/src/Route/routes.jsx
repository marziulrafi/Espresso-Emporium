import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                Component: Home
            },
            {
                path: '/add-coffee',
                Component: AddCoffee
            },
            {
                path: '/update-coffee',
                Component: UpdateCoffee
            }
        ]

    },
]);



export default router