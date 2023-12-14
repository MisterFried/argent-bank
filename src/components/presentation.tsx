export default function Presentation() {
	return (
		<section className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-12 p-12">
			<article className="flex flex-col items-center gap-4">
				<img
					className="w-[150px] h-[150px] border-8 rounded-full border-primary-400"
					src="/images/icon-chat.png"
					alt="Icone chat"
				/>
				<h2 className="font-bold text-2xl text-black text-center">You are our #1 priority</h2>
				<p className="text-center">
					Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call
					in less than 5 minutes.
				</p>
			</article>
			<article className="flex flex-col items-center gap-4">
				<img
					className="w-[150px] h-[150px] border-8 rounded-full border-primary-400"
					src="/images/icon-money.png"
					alt="Icone money"
				/>
				<h2 className="font-bold text-2xl text-black text-center">More savings means higher rates</h2>
				<p className="text-center"> The more you save with us, the higher your interest rate will be! </p>
			</article>
			<article className="flex flex-col items-center gap-4">
				<img
					className="w-[150px] h-[150px] border-8 rounded-full border-primary-400"
					src="/images/icon-security.png"
					alt="Icone security"
				/>
				<h2 className="font-bold text-2xl text-black text-center">Security you can trust</h2>
				<p className="text-center">
					We use top of the line encryption to make sure your data and money is always safe.
				</p>
			</article>
		</section>
	);
}
