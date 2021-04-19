import classNames from 'classnames/bind';
import React from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const cx = classNames.bind(styles);

const Button: React.FC<ButtonProps> = ({ children, className, onClick, type = 'button' }) => {
	return (
		<button className={cx(className, 'c-button')} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

export default Button;
