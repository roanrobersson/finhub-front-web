import { ComponentRef, FC, useEffect, useRef } from "react";
import { LOCAL_STORAGE_API_DELAY_KEY } from "lib/constants";
import { SettingsIcon } from "lucide-react";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { OverlayPanel } from "primereact/overlaypanel";

import useLocalStorage from "hooks/useLocalStorage";
import { setResponseDelay } from "services/api";

type DevToolsProps = {};

const DevTools: FC<DevToolsProps> = () => {
	const opRef = useRef<ComponentRef<typeof OverlayPanel>>(null);
	const [apiDelay, setApiDelay] = useLocalStorage(LOCAL_STORAGE_API_DELAY_KEY, 0);

	useEffect(() => {
		setResponseDelay(apiDelay);
	}, [apiDelay]);

	const toggleDelay = () => {
		setApiDelay((prev) => (prev ? 0 : 1000));
	};

	return (
		<div className="card fixed bottom-20 right-3 flex justify-center">
			<Button
				type="button"
				rounded
				raised
				icon={<SettingsIcon />}
				severity="success"
				onClick={(e) => opRef.current?.toggle(e)}
			/>

			<OverlayPanel ref={opRef}>
				<div className="flex min-h-[100px] items-center gap-2">
					<label className="" htmlFor="api-delay">
						Api delay
					</label>
					<InputSwitch id="api-delay" checked={!!apiDelay} onChange={toggleDelay} />
				</div>
			</OverlayPanel>
		</div>
	);
};

export default DevTools;
