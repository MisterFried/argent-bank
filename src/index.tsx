import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero.tsx";
import Presentation from "./components/presentation.tsx";
import Footer from "./components/footer.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Hero />
				<Presentation />
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	);
}

root.render(<App />);
