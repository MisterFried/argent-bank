export default function User() {
	return (
		<main className="grow flex flex-col items-center gap-6 py-6 px-24 bg-[#12002b]">
			<h1 className="text-4xl text-white text-center">Welcome back Tony Jarvis!</h1>
			<button className="p-2 bg-[#00bc77] text-white">Edit Name</button>
			<section className="flex flex-col gap-8 w-full max-w-[128rem]">
				<article className="relative flex flex-col p-4 bg-white">
					<span className="font-light text-lg">Argent Bank Checking</span>
					<span className="text-4xl font-bold">$2,082.79</span>
					<span className="font-light text-lg">Available Balance</span>
					<button className="static sm:absolute bottom-6 right-6 px-4 py-1 mt-4 sm:mt-0 bg-[#00bc77] text-white text-lg">
						View transactions
					</button>
				</article>
				<article className="relative flex flex-col p-4 bg-white">
					<span className="font-light text-lg">Argent Bank Checking</span>
					<span className="text-4xl font-bold">$2,082.79</span>
					<span className="font-light text-lg">Available Balance</span>
					<button className="static sm:absolute bottom-6 right-6 px-4 py-1 mt-4 sm:mt-0 bg-[#00bc77] text-white text-lg">
						View transactions
					</button>
				</article>
				<article className="relative flex flex-col p-4 bg-white">
					<span className="font-light text-lg">Argent Bank Checking</span>
					<span className="text-4xl font-bold">$2,082.79</span>
					<span className="font-light text-lg">Available Balance</span>
					<button className="static sm:absolute bottom-6 right-6 px-4 py-1 mt-4 sm:mt-0 bg-[#00bc77] text-white text-lg">
						View transactions
					</button>
				</article>
			</section>
		</main>
	);
}
