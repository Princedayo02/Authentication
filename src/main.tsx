import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import About from "./pages/About.tsx";
import Contacts from "./pages/Contacts.tsx";
import Blog from "./pages/Blog.tsx";
import Help from "./pages/Help.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/home", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/signup", element: <Signup /> },
			{ path: "/help", element: <Help /> },
			{ path: "/contacts", element: <Contacts /> },
			{ path: "/blog", element: <Blog /> },
			{ path: "/login", element: <Login /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
