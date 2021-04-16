import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	onClick?: () => void;
}
