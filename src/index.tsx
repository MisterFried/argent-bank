import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import SignIn from "./pages/signIn.tsx";
import User from "./pages/user.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/user" element={<User />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	);
}

root.render(<App />);
