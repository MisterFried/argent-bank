import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../state/user";

export default function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function loginUser() {
		dispatch(login());
		navigate("/user");
	}
	return (
		<main className="grow grid place-items-center bg-background">
			<section className="flex flex-col items-center gap-4 p-8 bg-white">
				<FaUserCircle />
				<h1 className="text-2xl">Sign In</h1>
				<form className="flex flex-col items-center gap-4">
					<p className="flex flex-col">
						<label htmlFor="username">Username</label>
						<input
							className="w-38 border-gray-400 border text-xl"
							type="text"
							name="username"
							id="username"
						/>
					</p>
					<p className="flex flex-col">
						<label htmlFor="password">Password</label>
						<input
							className="w-38 border-gray-400 border text-xl"
							type="password"
							name="password"
							id="password"
						/>
					</p>
					<p className="self-start flex justify-center items-center gap-1">
						<input type="checkbox" name="rememberMe" id="rememberMe" />
						<label htmlFor="rememberMe">Remember me</label>
					</p>
					<button
						type="button"
						onClick={loginUser}
						className="w-full p-2 bg-primary-400 text-white text-xl font-semibold hover:underline hover:bg-primary-600 transition-all"
					>
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
}
