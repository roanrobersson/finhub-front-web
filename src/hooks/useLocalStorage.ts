import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
	const storedValue = localStorage.getItem(key);

	const [value, setValue] = useState<T>(storedValue ? JSON.parse(storedValue) : initialValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as const;
}

export default useLocalStorage;
