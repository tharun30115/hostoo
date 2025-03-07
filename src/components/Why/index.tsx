import hardware from "../../assets/images/hardware.jpg";

const Why = () => {
	return (
		<div className="w-full flex md:flex-row flex-col items-center bg-[#1f2737]">
			<div className="w-full md:w-[50%] md:p-0 p-8 flex items-center justify-center">
				<div className="flex flex-col">
					<span className="text-indigo-200 tracking-widest">INTRODUCTION</span>
					<div className="text-white font-bold text-[50px]">Why CHoose Us ?</div>
					<p className="text-gray-200 leading-8 max-w-[600px] text-justify">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nulla quam eaque
						officia molestiae ad eos aspernatur, hic quis eum provident voluptatibus
						laboriosam facilis necessitatibus, delectus pariatur est nemo! Officiis. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit ad saepe, odio
						corporis eius expedita nihil non laborum veritatis ipsum, est possimus dolor
						sapiente maxime unde illum impedit optio.
					</p>
					<a
						href="#"
						className="mt-7 text-indigo-200"
					>
						Learn More
					</a>
				</div>
			</div>
			<img
				src={hardware}
				alt="hardware"
				className="md:w-[50%] w-full"
			/>
		</div>
	);
};

export default Why;
