import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Login from "./pages/login.tsx";
import Profile from "./pages/profile.tsx";
import { store } from "./state/store.ts";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

root.render(<App />);
