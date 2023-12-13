import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import updateUser from "../lib/updateUser";
import { retrieveUserInfo } from "../lib/retrieveUserInfo";
import { updateUserInfo } from "../state/userInfo";

export default function User() {
	const tokenState = useSelector((state: RootState) => state.userToken);
	const userInfo = useSelector((state: RootState) => state.userInfo);
	const dispatch = useDispatch();
	const [editUser, setEditUser] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// redirect the user if he's not logged in
	useEffect(() => {
		if (tokenState.token === "") {
			navigate("/login");
		}
	}, []);

	function toogleEdit() {
		setEditUser(!editUser);
	}

	async function onSubmit(data: FieldValues) {
		updateUser(data.firstName, data.lastName, tokenState.token);
		const updatedUserInfo = await retrieveUserInfo(tokenState.token);
		if (updatedUserInfo) {
			dispatch(updateUserInfo(updatedUserInfo));
		}
		reset();
		setEditUser(false);
	}

	if (tokenState.token != "") {
		return (
			<main className="grow flex flex-col items-center gap-6 py-6 px-24 bg-[#12002b]">
				<h1 className="text-4xl text-white text-center">
					Welcome back {userInfo.firstName + " " + userInfo.lastName} !
				</h1>
				{editUser ? (
					<>
						<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
							<label className="flex flex-col gap-1">
								<input
									type="text"
									{...register("firstName", { required: true })}
									placeholder={userInfo.firstName}
									className="px-2 py-1 text-lg"
								/>
								{errors["firstName"]?.type === "required" && (
									<span className="text-red-400">Please enter your new first name</span>
								)}
							</label>
							<label className="flex flex-col gap-1">
								<input
									type="text"
									{...register("lastName", { required: true })}
									placeholder={userInfo.lastName}
									className="px-2 py-1 text-lg"
								/>
								{errors["lastName"]?.type === "required" && (
									<span className="text-red-400">Please enter your new last name</span>
								)}
							</label>
							<button className="p-2 w-24 justify-self-end bg-primary-400 text-white hover:bg-primary-600 transition-all">
								Save
							</button>
							<button
								onClick={toogleEdit}
								className="p-2 w-24 bg-primary-400 text-white hover:bg-primary-600 transition-all"
							>
								Cancel
							</button>
						</form>
					</>
				) : (
					<button
						onClick={toogleEdit}
						className="p-2 bg-primary-400 text-white hover:bg-primary-600 transition-all"
					>
						Edit Name
					</button>
				)}
				<section className="flex flex-col gap-8 w-full max-w-[128rem]">
					<article className="relative flex flex-col p-4 bg-white">
						<span className="font-light text-lg">Argent Bank Checking</span>
						<span className="text-4xl font-bold">$2,082.79</span>
						<span className="font-light text-lg">Available Balance</span>
						<button className="static sm:absolute bottom-6 right-6 px-4 py-1 mt-4 sm:mt-0 bg-primary-400 text-white text-lg hover:bg-primary-600 transition-all">
							View transactions
						</button>
					</article>
					<article className="relative flex flex-col p-4 bg-white">
						<span className="font-light text-lg">Argent Bank Checking</span>
						<span className="text-4xl font-bold">$2,082.79</span>
						<span className="font-light text-lg">Available Balance</span>
						<button className="static sm:absolute bottom-6 right-6 px-4 py-1 mt-4 sm:mt-0 bg-primary-400 text-white text-lg hover:bg-primary-600 transition-all">
							View transactions
						</button>
					</article>
					<article className="relative flex flex-col p-4 bg-white">
						<span className="font-light text-lg">Argent Bank Checking</span>
						<span className="text-4xl font-bold">$2,082.79</span>
						<span className="font-light text-lg">Available Balance</span>
						<button className="static sm:absolute bottom-6 right-6 px-4 py-1 mt-4 sm:mt-0 bg-primary-400 text-white text-lg hover:bg-primary-600 transition-all">
							View transactions
						</button>
					</article>
				</section>
			</main>
		);
	}

	return <main className="grow bg-[#12002b]"></main>;
}
