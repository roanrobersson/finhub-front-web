import { ComponentProps, FC, useRef } from "react";
import { GoogleLogin, GoogleLoginProps } from "@react-oauth/google";
import GoogleIcon from "assets/icons/google.svg?react";
import { cc } from "lib/tailwindUtils";
import { Button } from "primereact/button";

type GoogleLoginButtonProps = ComponentProps<"div"> & Pick<GoogleLoginProps, "onSuccess" | "onError">;

const GoogleLoginButton: FC<GoogleLoginButtonProps> = (props) => {
	const { className, onSuccess, onError, ...restProps } = props;
	const ref = useRef<HTMLDivElement>(null);

	return (
		<div className={cc("relative mt-9", className)} {...restProps}>
			<Button
				className="w-full select-none rounded-full bg-white"
				raised
				text
				severity="secondary"
				icon={<GoogleIcon width={26} height={26} />}
				label="Continue with Google"
				onClick={(e) => {
					e.stopPropagation();
					ref.current?.click();
				}}
			/>

			<div
				className="invisible absolute inset-0"
				ref={ref}
				onClick={() => {
					const button = ref.current?.querySelector("[role='button']") as HTMLButtonElement;
					button?.click();
				}}
			>
				<GoogleLogin onSuccess={onSuccess} onError={onError} />
			</div>
		</div>
	);
};

export default GoogleLoginButton;
