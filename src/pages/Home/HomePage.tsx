import { Helmet } from "react-helmet";
import { NavLink } from "react-router";
import SearchIcon from "assets/icons/search.svg?react";
import routeKeys from "routeKeys";

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>

			<main className="space-y-10 py-10">
				<div className="mx-auto max-w-[800px]">
					<h1 className="text-display-lg text-center">Home Page</h1>
					<div className="mt-10 grid justify-center space-y-10">
						<NavLink to={routeKeys.second()} className="text-blue-500 underline">
							Go to Second page
						</NavLink>

						<SearchIcon />

						<img src="any-image.png" alt="search icon" />
					</div>
				</div>
			</main>
		</>
	);
};

export default HomePage;
