import { Star, StarHalf } from "react-ionicons";
import user from "../../assets/images/user.png";

const Reviews = () => {
	const reviews = [
		{
			name: "Kevin Jones",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dicta similique doloribus, maiores delectus.",
			image: user,
		},
		{
			name: "Kevin Jones",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dicta similique doloribus, maiores delectus.",
			image: user,
		},
		{
			name: "Kevin Jones",
			body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dicta similique doloribus, maiores delectus.",
			image: user,
		},
	];
	return (
		<div className="w-full md:px-[80px] px-8 py-16 flex flex-col gap-16 items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="text-indigo-200 font-bold text-[32px] text-center">
					What Our Customers Say About Us
				</div>
				<p className="text-center max-w-[700px] text-gray-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel consequuntur vum.
					Facere repellat, nesciunt iure repellendus ipsam molestias.
				</p>
			</div>
			<div className="flex w-full items-center md:flex-row flex-col justify-between md:px-[80px] px-8 md:gap-0 gap-10">
				{reviews.map((review, index: number) => (
					<div
						className="flex flex-col gap-2 items-center justify-center"
						key={index}
					>
						<img
							src={review.image}
							alt="userImage"
							className="rounded-full border border-gray-200 w-[45px] h-[45px]"
						/>
						<span className="font-bold text-indigo-200 text-[18px]">{review.name}</span>
						<p className="leading-8 mex-w-[400px] text-center text-[17px]">{review.body}</p>
						<div className="flex items-center gap-1">
							<Star
								color={"#FFD700"}
								width="21px"
								height="21px"
							/>
							<Star
								color={"#FFD700"}
								width="21px"
								height="21px"
							/>
							<Star
								color={"#FFD700"}
								width="21px"
								height="21px"
							/>
							<Star
								color={"#FFD700"}
								width="21px"
								height="21px"
							/>
							<StarHalf
								color={"#FFD700"}
								width="21px"
								height="21px"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
