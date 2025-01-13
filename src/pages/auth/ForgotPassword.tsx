import { FC } from "react";
import { Helmet } from "react-helmet";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { cc } from "lib/tailwindUtils";
import { CircleXIcon } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import routeKeys from "routeKeys";
import z from "zod";

import useSession from "hooks/useSession";

const schema = z.object({
	email: z
		.string()
		.min(1, {
			message: "Email is required"
		})
		.email({ message: "Invalid email" })
});

type TFormFields = z.infer<typeof schema>;

const ForgotPassword: FC = () => {
	const {
		register,
		control,
		setError,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<TFormFields>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: ""
		}
	});
	const navigate = useNavigate();
	const { signInQuery } = useSession();

	const onSubmit: SubmitHandler<TFormFields> = async (data) => {
		try {
			// await signInQuery.mutateAsync({
			// 	email: data.email,
			// 	password: data.password
			// });
			// navigate(routeKeys.home());
		} catch (error) {
			// setError("root", { message: "Invalid credentials" });
		}
	};

	return (
		<>
			<Helmet>
				<title>Forgot password</title>
			</Helmet>

			<div className="w-full max-w-[440px]">
				<div className="text-center">
					<h1 className="text-title-3xl">Enter Your Email to Reset Password</h1>
					<p className="mt-3 text-secondary">Enter a verified email and we will send a recovery link</p>
				</div>

				<form className="mt-9" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex max-w-[440px] flex-col">
						<div className="flex flex-col gap-2">
							<label htmlFor="email">Email</label>
							<InputText
								id="email"
								aria-describedby="email-help"
								invalid={!!errors.email}
								{...register("email")}
								ref={{ ...register("email") }.ref}
							/>
							{errors.email && (
								<small id="email-help" className={cc("flex items-center gap-2", errors.email && "text-error")}>
									<CircleXIcon size="20" className="text-error" /> {errors.email.message}
								</small>
							)}
						</div>
					</div>

					{errors.root && <p className="mt-5 text-center text-error">{errors.root.message}</p>}

					<div className="mt-9 text-center">
						<Button type="submit" className="w-full" loading={signInQuery.isPending} label="Send email" />

						<p className="mt-5">
							<Link className="underline" to={routeKeys.signIn()}>
								Go back to login
							</Link>
						</p>
					</div>
				</form>
			</div>

			<DevTool control={control} />
		</>
	);
};

export default ForgotPassword;
