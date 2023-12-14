import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import loginUser from "../lib/loginUser";
import { useEffect, useState } from "react";
import { RootState } from "../types/types";
import { updateToken } from "../state/userToken";
import { retrieveUserInfo } from "../lib/retrieveUserInfo";
import { updateUserInfo } from "../state/userInfo";

export default function Login() {
	// Global states
	const userTokenState = useSelector((state: RootState) => state.userToken);
	const dispatch = useDispatch();

	// Local states
	const [errorState, setErrorState] = useState<string | undefined>(undefined);

	// Navigation
	const navigate = useNavigate();

	//Form handling
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Login the user and retrieve a JWT token
	async function onSubmit(data: FieldValues) {
		const { token, error } = await loginUser(data.email, data.password);
		if (error) {
			setErrorState(error);
		}
		// Token successfully retrieved
		if (token != "") {
			dispatch(updateToken(token));
			// Fetch user infos corresponding the the token
			const retrievedUserInfo = await retrieveUserInfo(token);
			if (retrievedUserInfo) {
				dispatch(updateUserInfo(retrievedUserInfo));
			}
			navigate("/user");
		}
	}

	// Redirect the user to the user page if already connected
	useEffect(() => {
		if (userTokenState.token != "") {
			navigate("/user");
		}
	}, []);

	if (userTokenState.token === "") {
		return (
			<main className="grow grid place-items-center bg-background">
				<section className="flex flex-col items-center gap-4 p-8 bg-white">
					<FaUserCircle />
					<h1 className="text-2xl">Sign In</h1>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
						<p className="flex flex-col">
							<label htmlFor="email">Username</label>
							<input
								className="w-38 border-gray-400 border text-xl"
								type="text"
								id="email"
								{...register("email", { required: true })}
							/>
							{errors["email"]?.type === "required" && (
								<span className="text-red-400">Please enter your email</span>
							)}
						</p>
						<p className="flex flex-col">
							<label htmlFor="password">Password</label>
							<input
								className="w-38 border-gray-400 border text-xl"
								type="password"
								id="password"
								{...register("password", { required: true })}
							/>
							{errors["password"]?.type === "required" && (
								<span className="text-red-400">Please enter your password</span>
							)}
						</p>
						<p className="self-start flex justify-center items-center gap-1">
							<input {...register("rememberMe")} type="checkbox" name="rememberMe" id="rememberMe" />
							<label htmlFor="rememberMe">Remember me</label>
						</p>
						{errorState && <span className="text-red-400">{errorState}</span>}
						<button className="w-full p-2 bg-primary-400 text-white text-xl font-semibold hover:underline hover:bg-primary-600 transition-all">
							Sign In
						</button>
					</form>
				</section>
			</main>
		);
	}

	return <main className="grow bg-[#12002b]"></main>;
}
