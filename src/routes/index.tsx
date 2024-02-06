import { RouteObject } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <Home />,
					},
				],
			},
		],
	},
];

export default routes;
