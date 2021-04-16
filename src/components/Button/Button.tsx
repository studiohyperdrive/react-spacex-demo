import React from 'react';

import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
	return (
		<button onClick={onClick} type={type}>
			{children}
		</button>
	);
};

export default Button;
