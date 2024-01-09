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
	const [fetchingError, setFetchingError] = useState(false);

	// Navigation
	const navigate = useNavigate();

	// Email validation regex
	const validationPattern = /^[a-z,A-Z,0-9]+([-,.,_]?[a-z,A-Z,0-9]+)*@{1}[a-z,A-Z]{2,}\.{1}[a-z,A-Z]{2,}$/;

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
		if (token !== "") {
			setFetchingError(false);
			dispatch(updateToken(token));
			// Fetch user infos corresponding the the token
			const retrievedUserInfo = await retrieveUserInfo(token);
			if (retrievedUserInfo) {
				dispatch(updateUserInfo(retrievedUserInfo));
				navigate("/profile");
			} else {
				setFetchingError(true);
			}
		}
	}

	// Redirect the user to the user page if already connected
	useEffect(() => {
		if (userTokenState.token !== "") {
			navigate("/profile");
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
								{...register("email", { required: true, pattern: validationPattern })}
							/>
							{errors["email"]?.type === "required" && (
								<span className="text-red-400">Please enter your email</span>
							)}
							{errors["email"]?.type === "pattern" && (
								<span className="text-red-400">Please enter a correct email</span>
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
						{fetchingError && (
							<span className="text-red-400">Une erreur est survenue, merci de réessayer</span>
						)}
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
