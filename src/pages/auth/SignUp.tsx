import { FC } from "react";
import { Helmet } from "react-helmet";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleIcon from "assets/icons/google.svg?react";
import { cc } from "lib/tailwindUtils";
import { CircleXIcon } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import routeKeys from "routeKeys";
import z from "zod";

import useSession from "hooks/useSession";

const schema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z
		.string()
		.min(1, {
			message: "Email is required"
		})
		.email({ message: "Invalid email" }),
	password: z.string().min(8, { message: "Password must be at least 8 characters" })
});

type TFormFields = z.infer<typeof schema>;

const SignUp: FC = () => {
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
			name: "",
			email: "",
			password: ""
		}
	});
	const navigate = useNavigate();
	const { signInQuery } = useSession();

	const onSubmit: SubmitHandler<TFormFields> = async (data) => {
		try {
			await signInQuery.mutateAsync({
				email: data.email,
				password: data.password
			});
			navigate(routeKeys.home());
		} catch (error) {
			setError("root", { message: "Invalid credentials" });
		}
	};

	return (
		<>
			<Helmet>
				<title>Sign In</title>
			</Helmet>

			<div className="w-full max-w-[440px]">
				<div className="text-center">
					<h1 className="text-title-3xl">Welcome Back!</h1>
					<p className="mt-3 text-secondary">Log in or Create account to get back your account!</p>
				</div>

				<Button
					className="mt-9 w-full rounded-full"
					raised
					text
					severity="secondary"
					icon={<GoogleIcon width={26} height={26} />}
					label="Continue with Google"
				/>

				<form className="mt-9" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex max-w-[440px] flex-col">
						<div className="flex flex-col gap-2">
							<label htmlFor="name">User name</label>
							<InputText
								id="name"
								aria-describedby="name-help"
								invalid={!!errors.name}
								{...register("name")}
								ref={{ ...register("name") }.ref}
							/>
							{errors.name && (
								<small id="name-help" className={cc("flex items-center gap-2", errors.name && "text-error")}>
									<CircleXIcon size="20" className="text-error" /> {errors.name.message}
								</small>
							)}
						</div>

						<div className="mt-6 flex flex-col gap-2">
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

						<div className="mt-6 flex flex-col gap-2">
							<label htmlFor="password">Password</label>
							<Password
								id="password"
								aria-describedby="password-help"
								invalid={!!errors.password}
								feedback={false}
								toggleMask
								{...register("password")}
								inputRef={register("password").ref}
							/>
							{errors.password && (
								<small id="password-help" className={cc("flex gap-2", errors.password && "text-error")}>
									<CircleXIcon size="20" className="text-error" /> {errors.password.message}
								</small>
							)}
						</div>
					</div>

					{errors.root && <p className="mt-5 text-center text-error">{errors.root.message}</p>}

					<div className="mt-9 text-center">
						<Button type="submit" className="w-full" loading={signInQuery.isPending} label="Sign up" />

						<p className="mt-5">
							<span>Already have an account? </span>
							<Link className="underline" to={routeKeys.signIn()}>
								Sign in
							</Link>
						</p>
					</div>
				</form>
			</div>

			<DevTool control={control} />
		</>
	);
};

export default SignUp;
