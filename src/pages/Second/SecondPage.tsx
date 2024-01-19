import { Helmet } from "react-helmet";
import { NavLink } from "react-router";
import routeKeys from "routeKeys";

const SecondPage = () => {
	return (
		<>
			<Helmet>
				<title>Second</title>
			</Helmet>

			<main className="space-y-10 py-10">
				<div className="mx-auto max-w-[800px]">
					<h1 className="text-display-lg text-center">Second Page</h1>
					<div className="mt-10 grid justify-center space-y-10">
						<NavLink to={routeKeys.home()} className="text-blue-500 underline" end>
							Go to Home page
						</NavLink>
						<img src="any-image.png" alt="search icon" />
					</div>
				</div>
			</main>
		</>
	);
};

export default SecondPage;
