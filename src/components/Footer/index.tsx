const Footer = () => {
	return (
		<div className="w-full flex items-center md:flex-row flex-col md:gap-0 gap-3 justify-between px-10 bg-[#1f2737] py-3">
			<span className="text-white font-bold text-[28px] cursor-pointer z-50">Hostoo</span>
			<div className="flex items-center gap-5">
				<a
					href="#"
					className="text-white no-underline font-medium text-[15px] transition-all duration-300 hover:text-violet-300"
				>
					Terms and Conditions
				</a>
				<a
					href="#"
					className="text-white no-underline font-medium text-[15px] transition-all duration-300 hover:text-violet-300"
				>
					Services
				</a>
				<a
					href="#"
					className="text-white no-underline font-medium text-[15px] transition-all duration-300 hover:text-violet-300"
				>
					Contact
				</a>
				<a
					href="#"
					className="text-white no-underline font-medium text-[15px] transition-all duration-300 hover:text-violet-300"
				>
					FAQ
				</a>
			</div>
		</div>
	);
};

export default Footer;
