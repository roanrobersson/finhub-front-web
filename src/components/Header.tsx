import { FC } from "react";
import { useNavigate } from "react-router";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import routeKeys from "routeKeys";

import useSession from "hooks/useSession";

const Header: FC = () => {
	const { signOutQuery, user } = useSession();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await signOutQuery.mutateAsync();
		navigate(routeKeys.signIn());
	};
	console.log(user);
	return (
		<div className="flex w-full items-center justify-between border bg-slate-50 bg-opacity-70 px-4 py-4 md:px-12">
			<div className="flex items-center gap-4">FinHub</div>

			<div className="flex items-center gap-10">
				<div>Welcome, {user?.name}!</div>

				<Avatar
					className="outline outline-secondary"
					image={user?.picture ?? undefined}
					imageFallback=""
					shape="circle"
					size="xlarge"
				/>

				<Button
					type="button"
					severity="danger"
					className="mt-4"
					onClick={handleLogout}
					loading={signOutQuery.isPending}
					label="Logout"
				/>
			</div>
		</div>
	);
};

export default Header;
