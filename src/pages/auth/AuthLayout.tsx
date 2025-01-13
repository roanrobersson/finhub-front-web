import { FC } from "react";
import { Outlet } from "react-router";
import DiagonalLinesIllustration from "assets/artifacts/diagonal-lines.svg?react";
import AuthIllustration from "assets/illustrations/auth.svg?react";

const AuthLayout: FC = () => {
	return (
		<main className="flex min-h-screen">
			<section className="flex w-5/12 items-center justify-center bg-primary">
				<Outlet />
			</section>

			<section className="flex-1">
				<div className="relative flex h-full items-center overflow-hidden bg-primary-500 2xl:hidden">
					<DiagonalLinesIllustration className="absolute left-0 top-0" />
					<img className="absolute mt-[124px] max-w-none" src="dashboard.png" alt="System preview" />
				</div>

				<div className="ml-8 hidden h-full items-center justify-start 2xl:flex">
					<AuthIllustration />
				</div>
			</section>
		</main>
	);
};

export default AuthLayout;
