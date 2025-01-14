import { FC } from "react";
import { Helmet } from "react-helmet";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { CredentialResponse } from "@react-oauth/google";
import { HttpStatusCode, isAxiosError } from "axios";
import { cc } from "lib/tailwindUtils";
import { CircleXIcon } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import routeKeys from "routeKeys";
import z from "zod";

import GoogleLoginButton from "components/GoogleLoginButton";
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
		formState: { errors }
	} = useForm<TFormFields>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "New",
			email: "new@gmail.com",
			password: "12345678"
		}
	});
	const navigate = useNavigate();
	const { signInQuery, signInWithGoogleQuery, signUpQuery } = useSession();

	const onSubmit: SubmitHandler<TFormFields> = async (data) => {
		try {
			await signUpQuery.mutateAsync({
				name: data.name,
				email: data.email,
				password: data.password
			});
			navigate(routeKeys.home());
		} catch (error) {
			if (isAxiosError(error) && error.status === HttpStatusCode.Conflict) {
				return setError("email", { message: "There is already an account with this email" });
			}
			setError("root", { message: "Error signing up" });
		}
	};

	const onGoogleLoginSuccess = async (credentialResponse: CredentialResponse) => {
		try {
			if (!credentialResponse.credential) {
				throw new Error("Invalid credentials");
			}
			await signInWithGoogleQuery.mutateAsync({
				token: credentialResponse.credential
			});
			navigate(routeKeys.home());
		} catch (error) {
			setError("root", { message: "Error signing in with Google" });
		}
	};

	const onGoogleLoginError = () => {
		setError("root", { message: "Error signing in with Google" });
	};

	return (
		<>
			<Helmet>
				<title>Sign Up</title>
			</Helmet>

			<div className="w-full max-w-[440px]">
				<div className="text-center">
					<h1 className="text-title-3xl">Welcome Back!</h1>
					<p className="mt-3 text-secondary">Log in or Create account to get back your account!</p>
				</div>

				<GoogleLoginButton className="mt-9" onSuccess={onGoogleLoginSuccess} onError={onGoogleLoginError} />

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

						<Controller
							control={control}
							name="password"
							render={({ field: { onChange, onBlur, value, ref } }) => (
								<div className="mt-6 flex flex-col gap-2">
									<label htmlFor="password">Password</label>
									<Password
										id="password"
										aria-describedby="password-help"
										invalid={!!errors.password}
										toggleMask
										feedback={false}
										value={value}
										onChange={onChange}
										onBlur={onBlur}
										inputRef={ref}
									/>
									{errors.password && (
										<small id="password-help" className={cc("flex gap-2", errors.password && "text-error")}>
											<CircleXIcon size="20" className="text-error" /> {errors.password.message}
										</small>
									)}
								</div>
							)}
						/>
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
