import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../types/types";
import { PiSignOutBold } from "react-icons/pi";
import { logout } from "../state/user";

export default function Header() {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	function logoutUser() {
		dispatch(logout());
		navigate("/");
	}

	return (
		<header className="flex justify-between items-center px-4 sm:px-6 sm:py-2">
			<img
				onClick={() => navigate("/")}
				className="w-[200px] h-[55px] cursor-pointer"
				src="images/argentBankLogo.png"
				alt="Argent Bank Logo"
			/>
			{user.logged ? (
				<div className="flex justify-items-center items-center gap-4">
					<button
						onClick={() => navigate("/user")}
						className="flex justify-items-center items-center gap-1 text-lg hover:underline"
					>
						<FaUserCircle /> {user.fullname}
					</button>
					<button
						onClick={logoutUser}
						className="flex justify-items-center items-center gap-1 text-lg hover:underline"
					>
						<PiSignOutBold /> Sign out
					</button>
				</div>
			) : (
				<button
					onClick={() => navigate("/login")}
					className="flex justify-items-center items-center gap-1 text-lg hover:underline"
				>
					<FaUserCircle /> Sign in
				</button>
			)}
		</header>
	);
}
