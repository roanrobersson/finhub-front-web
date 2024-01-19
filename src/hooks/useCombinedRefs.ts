import { useCallback, useRef } from "react";

import type { MutableRefObject, RefCallback } from "react";

export type MutableObjOrCallbackRef<T> =
	| MutableRefObject<T | null>
	| RefCallback<T>
	| null;

export type UseCombinedRefsReturn<T> = {
	refCallback: RefCallback<T>;
	ref: MutableRefObject<T | null>;
};

/**
 * Combines multiple refs into a single ref callback.
 *
 * @param refs - An array of refs to combine.
 * @param initialValue - The initial value of the ref.
 * @returns An object containing the ref callback and the ref object.
 */
const useCombinedRefs = <T>(
	refs: MutableObjOrCallbackRef<T>[],
	initialValue?: T | null
): UseCombinedRefsReturn<T> => {
	const ref = useRef<T | null>(initialValue ?? null);

	const refCallback = useCallback(
		(element: T) => {
			refs.forEach((ref) => {
				if (typeof ref === "function") {
					ref(element);
				} else if (ref && typeof ref === "object") {
					ref.current = element;
				}
			});
			ref.current = element;
		},
		[refs]
	);

	return { refCallback, ref };
};

export default useCombinedRefs;
