import { useEffect, useState } from "react";

const useDarkMode = () => {
	const [value, setValue] = useState(false);

	useEffect(() => {
		const isDark = localStorage.theme === "dark";
		setValue(isDark);

		if (isDark) {
			enable();
		} else {
			disable();
		}
	}, []);

	const enable = (): void => {
		localStorage.theme = "dark";
		document.documentElement.classList.add("dark");
		setValue(true);
	};

	const disable = (): void => {
		localStorage.theme = "light";
		document.documentElement.classList.remove("dark");
		setValue(false);
	};

	return { value, enable, disable };
};

export default useDarkMode;
