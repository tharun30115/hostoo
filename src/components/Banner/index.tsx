import banner from "../../assets/images/bg.jpg";

const Banner = () => {
	return (
		<div className="w-full md:px-[80px] px-8 py-16 flex flex-col gap-16 items-center justify-center md:h-[65vh] h-[60vh]">
			<div
				className="w-full h-full rounded-xl bg-center bg-cover relative grid place-items-center"
				style={{ backgroundImage: `url(${banner})` }}
			>
				<div className="font-bold md:text-[65px] text-[35px] z-50 text-center max-w-[800px]">
					Best Way To Make Sure Your Business Is Successfull And Safe
				</div>
				<div className="absolute left-0 top-0 w-full h-full rounded-xl bg-black opacity-50 z-20"></div>
			</div>
		</div>
	);
};

export default Banner;
