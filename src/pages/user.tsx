import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function User() {
	const tokenState = useSelector((state: RootState) => state.userToken);
	const userInfo = useSelector((state: RootState) => state.userInfo);
	const navigate = useNavigate();

	// redirect the user if he's not logged in
	useEffect(() => {
		if (tokenState.token === "") {
			navigate("/login");
		}
	}, []);

	if (tokenState.token != "") {
		return (
			<main className="grow flex flex-col items-center gap-6 py-6 px-24 bg-[#12002b]">
				<h1 className="text-4xl text-white text-center">
					Welcome back {userInfo.firstName + " " + userInfo.lastName} !
				</h1>
				<button className="p-2 bg-primary-400 text-white hover:bg-primary-600 transition-all">Edit Name</button>
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
