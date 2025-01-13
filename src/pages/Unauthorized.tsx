import { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import routeKeys from "routeKeys";

const Unauthorized: FC = () => {
	return (
		<>
			<Helmet>
				<title>Unauthorized</title>
			</Helmet>

			<main className="flex h-full items-center">
				<div className="container mx-auto flex justify-center">
					<div className="text-center">
						<h1 className="text-title-3xl">You're not allowed to access this page</h1>
						<Link to={routeKeys.home()} className="mt-4 block text-body-md underline">
							Go to home page
						</Link>
					</div>
				</div>
			</main>
		</>
	);
};

export default Unauthorized;
