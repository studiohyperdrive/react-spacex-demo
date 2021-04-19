import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
	className?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	onClick?: () => void;
}
