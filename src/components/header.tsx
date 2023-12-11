import { FaUserCircle } from "react-icons/fa";

export default function Header() {
	return (
		<header className="flex justify-between items-center px-4 sm:px-6 sm:py-2">
			<img className="w-[200px] h-[55px]" src="public/images/argentBankLogo.png" alt="Argent Bank Logo" />
			<button className="flex justify-items-center items-center gap-1 text-lg hover:underline">
				<FaUserCircle /> Sign in
			</button>
		</header>
	);
}
