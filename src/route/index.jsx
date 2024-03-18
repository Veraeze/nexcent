import Layout from "../components/layout/index";
import Home from "../features/Home";

export const Routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element:<Home/>
            }

        ]
    },
    {

    }
]