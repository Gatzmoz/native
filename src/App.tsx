import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landpage from "./sections/Landpage";

function App() {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landpage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
