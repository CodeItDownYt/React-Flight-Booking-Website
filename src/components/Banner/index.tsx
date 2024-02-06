import banner from "../../assets/images/sky3.jpg";
const Banner = () => {
	return (
		<div
			className="w-full md:h-[400px] h-[460px] my-20 bg-fixed bg-cover relative z-[1]"
			style={{ backgroundImage: `url(${banner})`, backgroundPosition: "bottom" }}
		>
			<div className="w-full h-full md:flex-row flex-col flex items-center justify-between px-10 banner z-[2] md:py-0 py-5 text-center">
				<span className="text-white md:text-[55px] text-[40px] font-semibold">
					It's Time To Enjoy Your Freedom!
				</span>
				<div className="flex md:flex-row flex-col items-center gap-10 md:mb-0 mb-2">
					<input
						type="text"
						placeholder="Email address"
						className="md:w-[500px] w-[400px] border border-slate-400 outline-none px-3 rounded-[10px] py-3"
					/>
					<button className="bg-blue-400 px-6 py-3 text-white font-semibold shadow-md rounded-[10px] max-w-[250px]">
						Join To Our Newspaper
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
