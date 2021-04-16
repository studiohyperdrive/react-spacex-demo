import { NavLinkProps } from 'react-router-dom';

export interface NavigationProps {
	items?: (NavLinkProps & { label: string })[];
	logoUrl?: string;
}
