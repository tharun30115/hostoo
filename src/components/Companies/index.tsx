import {
	LogoAmazon,
	LogoApple,
	LogoBehance,
	LogoGithub,
	LogoWhatsapp,
	LogoWordpress,
	LogoYahoo,
} from "react-ionicons";

const Companies = () => {
	return (
		<div className="w-full md:px-[80px] px-8 pt-8 pb-16 flex flex-col gap-8 items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="font-bold text-indigo-200 text-[32px] text-center">
					Long Term Trusted Companies
				</div>
				<p className="text-center max-w-[700px] text-gray-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel consequuntur vum.
					Facere repellat, nesciunt iure repellendus ipsam molestias.
				</p>
			</div>
			<div className="flex w-full items-center justify-between md:overflow-x-hidden overflow-x-auto md:px-60 md:gap-0 gap-8 md:pb-0 pb-4">
				<LogoGithub
					color={"#dddddd"}
					cssClasses={"hover:fill-[#c7d2fe] cursor-pointer"}
					width={"60px"}
					height={"60px"}
				/>
				<LogoAmazon
					color={"#dddddd"}
					cssClasses={"hover:fill-[#c7d2fe] cursor-pointer"}
					width={"60px"}
					height={"60px"}
				/>
				<LogoBehance
					color={"#dddddd"}
					cssClasses={"hover:fill-[#c7d2fe] cursor-pointer"}
					width={"60px"}
					height={"60px"}
				/>
				<LogoApple
					color={"#dddddd"}
					cssClasses={"hover:fill-[#c7d2fe] cursor-pointer"}
					width={"60px"}
					height={"60px"}
				/>
				<LogoYahoo
					color={"#dddddd"}
					cssClasses={"hover:fill-[#c7d2fe] cursor-pointer"}
					width={"60px"}
					height={"60px"}
				/>
				<LogoWhatsapp
					color={"#dddddd"}
					cssClasses={"hover:fill-[#c7d2fe] cursor-pointer"}
					width={"60px"}
					height={"60px"}
				/>
				<LogoWordpress
					color={"#dddddd"}
					cssClasses={"hover:fill-[#c7d2fe] cursor-pointer"}
					width={"60px"}
					height={"60px"}
				/>
			</div>
		</div>
	);
};

export default Companies;
