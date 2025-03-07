import Banner from "./components/Banner";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Roadmap from "./components/Roadmap";
import Why from "./components/Why";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<Companies />
			<Why />
			<Roadmap />
			<Reviews />
			<Banner />
			<Footer />
		</div>
	);
};

export default App;
