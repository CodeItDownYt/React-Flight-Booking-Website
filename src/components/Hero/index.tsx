import plane from "../../assets/images/plane.png";

const Hero = () => {
	return (
		<div className="hero z-[1] w-full h-[100vh] grid place-items-center bg-[#141b2b] relative">
			<div className="flex md:flex-row flex-col items-center w-full md:px-[200px] px-8 justify-between md:gap-0 gap-28">
				<div className="flex flex-col gap-3 left-animation w-full">
					<span className="text-blue-400 text-[28px] font-medium">
						Welcome To Our Website!
					</span>
					<span className="text-white font-medium md:text-[60px] text-[45px]">
						Luxury Experience <br /> With Our Services.
					</span>
					<span className="text-white font-medium text-[60px]"></span>
					<span className="text-white leading-7 max-w-[500px] text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla ipsa unde
						inventore minus commodi saepe? Eos cumque aliquam consequatur id optio dolorum
						modi quod?
					</span>
					<div className="flex items-center gap-7 mt-5">
						<button className="bg-blue-400 px-6 py-3 text-gray-900 font-semibold rounded-full">
							Book Flight
						</button>
						<button className="border-[2px] border-blue-400 px-6 py-3 text-white font-semibold rounded-full">
							Contact Us
						</button>
					</div>
				</div>
				<img
					src={plane}
					className="md:w-[53%] w-full right-animation"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Hero;
