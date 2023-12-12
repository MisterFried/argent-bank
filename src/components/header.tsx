import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	return (
		<header className="flex justify-between items-center px-4 sm:px-6 sm:py-2">
			<img
				onClick={() => navigate("/")}
				className="w-[200px] h-[55px] cursor-pointer"
				src="images/argentBankLogo.png"
				alt="Argent Bank Logo"
			/>
			<button
				onClick={() => navigate("/signin")}
				className="flex justify-items-center items-center gap-1 text-lg hover:underline"
			>
				<FaUserCircle /> Sign in
			</button>
		</header>
	);
}
