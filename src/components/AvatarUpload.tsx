import { FC, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { FileUpload, FileUploadHandlerEvent } from "primereact/fileupload";

type AvatarUploadProps = {};

const AvatarUpload: FC<AvatarUploadProps> = () => {
	const ref = useRef<FileUpload>(null);
	const [scale, setScale] = useState(1);
	const handleUpload = async (event: FileUploadHandlerEvent) => {};

	const handleZoom = (e: React.WheelEvent) => {
		e.stopPropagation();
		e.preventDefault();
		console.log("wheel");

		if (e.deltaY < 0) {
			setScale((prev) => {
				if (prev + 0.1 >= 5) {
					return 5;
				}
				return prev + 0.1;
			});
		} else {
			setScale((prev) => {
				if (prev - 0.1 <= 1) {
					return 1;
				}
				return prev - 0.1;
			});
		}
	};

	return (
		<div className="p-10" onWheel={handleZoom}>
			<AvatarEditor
				image="https://i.pravatar.cc/2000?img=18"
				width={300}
				height={300}
				borderRadius={999}
				border={50}
				color={[0, 0, 0, 0.5]}
				scale={scale}
			/>
		</div>
	);
};

export default AvatarUpload;
