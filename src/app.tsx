import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<ToastContainer />
			<Header />
			<main className="min-h-[700px]">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
