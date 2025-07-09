import type { FC } from 'react';
import { Modal as AntdModal } from 'antd';

export interface IModal extends React.PropsWithChildren {
	title: string;
	isOpen: boolean;
	onClose: () => void;
	centered?: boolean | undefined;
}

const Modal: FC<IModal> = ({ title, isOpen, onClose, children, centered = false }) => {
	return (
		<AntdModal centered={centered} title={title} open={isOpen} onCancel={onClose} footer={null}>
			{children}
		</AntdModal>
	);
};

export { Modal };
