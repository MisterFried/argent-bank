export default function Hero() {
	return (
		<section className="grow flex justify-center sm:justify-end items-start p-20 bg-[url('/public/images/bank-tree.jpeg')] bg-no-repeat bg-cover bg-center">
			<article className="flex flex-col gap-4 sm:gap-6 w-80 p-4 sm:p-6 bg-white">
				<h1 className="font-bold text-xl sm:text-2xl">
					No fees. <br />
					No minimum deposit. <br />
					High interest rates
				</h1>
				<span className="text-base sm:text-xl">Open a savings account with Argent Bank today!</span>
			</article>
		</section>
	);
}
