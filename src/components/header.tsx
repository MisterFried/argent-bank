import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../types/types";
import { PiSignOutBold } from "react-icons/pi";
import { deleteToken } from "../state/userToken";
import { deleteUserInfo } from "../state/userInfo";

export default function Header() {
	// Global states
	const tokenState = useSelector((state: RootState) => state.userToken);
	const userInfo = useSelector((state: RootState) => state.userInfo);
	const dispatch = useDispatch();

	// Navigation
	const navigate = useNavigate();

	// Logout the user, clear the token and user data then redirect the user
	function logoutUser() {
		dispatch(deleteToken());
		dispatch(deleteUserInfo());
		navigate("/");
	}

	return (
		<header className="flex justify-between items-center px-4 sm:px-6 py-2">
			<img
				onClick={() => navigate("/")}
				className="w-[150px] h-[40px] sm:w-[200px] sm:h-[55px] cursor-pointer"
				src="images/argentBankLogo.png"
				alt="Argent Bank Logo"
			/>
			{tokenState.token === "" ? (
				<button
					onClick={() => navigate("/login")}
					className="flex justify-items-center items-center gap-1 text-lg hover:underline"
				>
					<FaUserCircle /> Sign in
				</button>
			) : (
				<div className="flex justify-items-center items-center gap-4">
					<button
						onClick={() => navigate("/user")}
						className="flex justify-items-center items-center gap-1 text-lg hover:underline"
					>
						<FaUserCircle /> {userInfo.firstName}
					</button>
					<button
						onClick={logoutUser}
						className="flex justify-items-center items-center gap-1 text-lg hover:underline"
					>
						<PiSignOutBold /> Sign out
					</button>
				</div>
			)}
		</header>
	);
}
